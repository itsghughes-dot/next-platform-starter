import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMatchBySlug, getAllSlugs, stripHtml, ALL_MATCHES } from '@/data/matches';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const match = getMatchBySlug(slug);
  if (!match) return {};
  const { home, away, score, date } = match.meta;
  const title = `${home} ${score} ${away} (${date}) — Play on Worst Eleven`;
  const description = `Relive ${home} ${score} ${away} on ${date}. Draft the worst XI from the real lineups, pick your Chaos Captain, and watch the mayhem unfold.`;
  return {
    title,
    description,
    openGraph: { title: `${home} ${score} ${away}`, description, url: `https://worsteleven.com/match/${slug}` },
    twitter: { title: `${home} ${score} ${away} | Worst Eleven`, description },
  };
}

export default async function MatchPage({ params }) {
  const { slug } = await params;
  const match = getMatchBySlug(slug);
  if (!match) notFound();

  const { home, away, score, homeColour, awayColour, date, label, blurb } = match.meta;
  const [homeScore, awayScore] = score.split('-').map(Number);

  const related = ALL_MATCHES.filter(
    (m) =>
      m.id !== match.id &&
      (m.meta.home === home || m.meta.away === home || m.meta.home === away || m.meta.away === away)
  ).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsEvent',
            name: `${home} vs ${away}`,
            description: stripHtml(blurb),
            startDate: date,
            sport: 'Football',
            homeTeam: { '@type': 'SportsTeam', name: home },
            awayTeam: { '@type': 'SportsTeam', name: away },
            url: `https://worsteleven.com/match/${match.slug}`,
          }),
        }}
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white">

        {/* NAV */}
        <nav className="bg-[#0a0a0a] border-b border-[#1e1e1e] px-6 py-3.5 flex items-center justify-between sticky top-0 z-10">
          <Link
            href="/"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2 }}
            className="text-white"
          >
            WORST<span className="text-[#e8290b]">XI</span>
          </Link>
          <Link
            href="/match"
            className="text-[#555] text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            ← All matches
          </Link>
        </nav>

        {/* SCOREBOARD HERO */}
        <header className="bg-[#111] border-b border-[#1e1e1e] px-6 py-10">
          <div className="max-w-lg mx-auto text-center">
            <p
              className="text-[#555] text-[10px] tracking-[2px] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {label}
            </p>

            {/* Teams & Score */}
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Home */}
              <div className="flex-1 text-right">
                <div className="inline-flex items-center gap-2 justify-end mb-1.5">
                  <h1
                    className="tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(20px,5vw,32px)', color: homeColour }}
                  >
                    {home}
                  </h1>
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{
                      background: homeColour,
                      boxShadow: homeColour === '#FBEE23' ? '0 0 0 1px #666' : 'none',
                    }}
                  />
                </div>
                <p
                  className="text-white leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72 }}
                >
                  {homeScore}
                </p>
              </div>

              <span
                className="text-[#444] shrink-0 text-sm"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                vs
              </span>

              {/* Away */}
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{
                      background: awayColour,
                      boxShadow: awayColour === '#FBEE23' ? '0 0 0 1px #666' : 'none',
                    }}
                  />
                  <h2
                    className="tracking-wide"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(20px,5vw,32px)',
                      color: awayColour,
                      textShadow: awayColour === '#FBEE23' ? '0 0 1px #666' : 'none',
                    }}
                  >
                    {away}
                  </h2>
                </div>
                <p
                  className="text-white leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72 }}
                >
                  {awayScore}
                </p>
              </div>
            </div>

            {/* Blurb */}
            <p
              className="text-[#888] text-sm leading-relaxed text-left max-w-md mx-auto mb-7"
              dangerouslySetInnerHTML={{ __html: blurb }}
            />

            {/* CTA */}
            <a
              href="/game"
              className="bg-white text-black font-semibold rounded-xl px-10 py-4 text-sm inline-block hover:bg-[#e8e6e1] transition-colors"
            >
              Play Now — Free →
            </a>
          </div>
        </header>

        {/* HOW TO PLAY */}
        <section className="px-6 py-10 max-w-lg mx-auto">
          <h3
            className="text-[#555] text-[10px] tracking-[3px] uppercase mb-5"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            How to play
          </h3>
          <p className="text-[#777] text-sm leading-relaxed mb-3">
            Both players draft from the real {home} and {away} lineups. The goal is to pick the{' '}
            <strong className="text-[#ddd]">worst performers</strong> — whoever scores own goals,
            gets red cards, or concedes the most earns you the most points.
          </p>
          <p className="text-[#777] text-sm leading-relaxed">
            You'll also pick a <strong className="text-[#ddd]">Chaos Captain</strong> — their events
            score double. Then sit back and watch the {home} {score} {away} result play out event by event.
          </p>
        </section>

        {/* RELATED MATCHES */}
        {related.length > 0 && (
          <section className="px-6 pb-12 border-t border-[#1a1a1a] pt-8 max-w-2xl mx-auto">
            <p
              className="text-[#555] text-[10px] tracking-[3px] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              More matches featuring {home} or {away}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {related.map((m) => (
                <Link
                  key={m.id}
                  href={`/match/${m.slug}`}
                  className="bg-[#141414] border border-[#222] rounded-xl px-4 py-3.5 hover:border-[#333] transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#ccc] tracking-wide text-sm"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {m.meta.home} vs {m.meta.away}
                    </span>
                    <span
                      className="text-white tracking-wide ml-2 shrink-0"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18 }}
                    >
                      {m.meta.score}
                    </span>
                  </div>
                  <p
                    className="text-[#444] text-[10px] mt-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {m.meta.date}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="border-t border-[#1a1a1a] px-6 py-5 flex items-center justify-between flex-wrap gap-3">
          <Link
            href="/"
            className="text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 2 }}
          >
            WORST<span className="text-[#e8290b]">XI</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/match" className="text-[#555] text-xs hover:text-[#888] transition-colors">All Matches</Link>
          </nav>
          <nav className="flex gap-4">
            <Link href="/disclaimer" className="text-[#444] text-xs hover:text-[#777] transition-colors">Disclaimer</Link>
            <Link href="/privacy" className="text-[#444] text-xs hover:text-[#777] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[#444] text-xs hover:text-[#777] transition-colors">Terms</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
