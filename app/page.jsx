import Link from 'next/link';
import { ALL_MATCHES } from '@/data/matches';

export const metadata = {
  title: 'Worst Eleven — Draft the Most Chaotic XI from Premier League Classics',
  description:
    'Draft the most disastrous XI from iconic Premier League matches. Own goals, red cards and meltdowns all score big. Free to play.',
  openGraph: {
    title: 'Worst Eleven',
    description: 'Can you draft a worse team than your opponent? Pick from 29 Premier League classics.',
    url: 'https://worsteleven.com',
  },
};

const FEATURED_IDS = [
  'mci_8-0_wat_2019',
  'avl_7-2_liv_2020',
  'new_4-4_ars_2011',
  'mci_3-2_qpr_2012',
  'ars_2-8_mun_2011',
  'che_4-4_mci_2023',
];

export default function HomePage() {
  const featured = ALL_MATCHES.filter((m) => FEATURED_IDS.includes(m.id));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Worst Eleven',
            url: 'https://worsteleven.com',
            description: 'Draft the most disastrous XI from iconic Premier League matches.',
            applicationCategory: 'GameApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
          }),
        }}
      />

      <main className="min-h-screen bg-[#0a0a0a] text-white">

        {/* HERO */}
        <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-2xl mx-auto">
          <h1
            className="text-white leading-none tracking-widest mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px,14vw,100px)' }}
          >
            WORST<span className="text-[#e8290b]">XI</span>
          </h1>
          <p className="text-[#9b9690] text-base mb-8 leading-relaxed max-w-sm">
            Draft the most chaotic XI from{' '}
            <strong className="text-white">{ALL_MATCHES.length} Premier League classics</strong>.
            Own goals, red cards and meltdowns all score big.
          </p>
          <a
            href="/game"
            className="bg-white text-black font-semibold rounded-xl px-12 py-4 text-base hover:bg-[#e8e6e1] transition-colors"
          >
            Play Now — Free
          </a>
          <p className="mt-3 text-xs text-[#444]">No account needed · Works on mobile</p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#111] border-y border-[#1e1e1e] px-6 py-12">
          <div className="max-w-lg mx-auto">
            <p
              className="text-center text-[#555] text-[10px] tracking-[3px] uppercase mb-7"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              How it works
            </p>
            <ol className="flex flex-col gap-5">
              {[
                { n: '1', title: 'Pick a classic match', body: 'We pull up the real lineups from an iconic Premier League game — both sides.' },
                { n: '2', title: 'Draft your Worst XI', body: 'Take turns picking players. The twist: you want the worst performers, not the best.' },
                { n: '3', title: 'Name a Chaos Captain', body: 'Double the disaster with your captain pick — the one most likely to implode.' },
                { n: '4', title: 'Watch the match replay', body: 'We simulate the actual result. Every goal, red card and own goal scores chaos points for whoever drafted that player.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 items-start">
                  <span
                    className="shrink-0 w-7 h-7 bg-[#1e1e1e] rounded-full flex items-center justify-center text-[#555] text-[10px] font-bold"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <strong className="text-[#ddd] text-sm block mb-0.5">{step.title}</strong>
                    <span className="text-[#888] text-xs leading-relaxed">{step.body}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FEATURED MATCHES */}
        <section className="px-6 py-12 max-w-2xl mx-auto">
          <p
            className="text-center text-[#555] text-[10px] tracking-[3px] uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Featured matches
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featured.map((m) => (
              <Link
                key={m.id}
                href={`/match/${m.slug}`}
                className="block bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#444] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        background: m.meta.homeColour,
                        boxShadow: m.meta.homeColour === '#FBEE23' ? '0 0 0 1px #666' : 'none',
                      }}
                    />
                    <span
                      className="text-white tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 17 }}
                    >
                      {m.meta.home}
                    </span>
                  </div>
                  <span
                    className="text-white tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22 }}
                  >
                    {m.meta.score}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-white tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 17 }}
                    >
                      {m.meta.away}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        background: m.meta.awayColour,
                        boxShadow: m.meta.awayColour === '#FBEE23' ? '0 0 0 1px #666' : 'none',
                      }}
                    />
                  </div>
                </div>
                <p
                  className="text-[#555] text-[10px] tracking-wide"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {m.meta.date}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link
              href="/match"
              className="text-[#666] text-[11px] tracking-widest uppercase border-b border-[#333] pb-0.5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Browse all {ALL_MATCHES.length} matches →
            </Link>
          </div>
        </section>

        {/* SCORING */}
        <section className="bg-[#111] border-t border-[#1e1e1e] px-6 py-12">
          <div className="max-w-sm mx-auto">
            <p
              className="text-center text-[#555] text-[10px] tracking-[3px] uppercase mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Scoring
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Goal scored', pts: '+10', pos: true },
                { label: 'Own goal', pts: '+25', pos: true },
                { label: 'Yellow card', pts: '+8', pos: true },
                { label: 'Red card', pts: '+20', pos: true },
                { label: 'Assist', pts: '+5', pos: true },
                { label: 'Clean sheet (GK)', pts: '−15', pos: false },
                { label: 'Looking at the pre-match tip', pts: '−5', pos: false },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3">
                  <span className="text-[#888] text-sm">{row.label}</span>
                  <span
                    className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-md"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      background: row.pos ? '#1a2e1a' : '#2e1a1a',
                      color: row.pos ? '#4ade80' : '#f87171',
                    }}
                  >
                    {row.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 py-16 text-center bg-[#0a0a0a]">
          <h2
            className="text-white tracking-widest mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px,8vw,60px)' }}
          >
            Ready to build the worst team?
          </h2>
          <p className="text-[#9b9690] text-sm mb-8">
            Challenge a friend or play against the AI. Free, instant, no sign-up.
          </p>
          <a
            href="/game"
            className="bg-[#e8290b] text-white font-semibold rounded-xl px-12 py-4 text-base inline-block hover:bg-[#c5230a] transition-colors"
          >
            Start Playing
          </a>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#1e1e1e] px-6 py-5 flex items-center justify-between flex-wrap gap-2">
          <span
            className="text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 2 }}
          >
            WORST<span className="text-[#e8290b]">XI</span>
          </span>
          <nav className="flex gap-6">
            <Link href="/match" className="text-[#555] text-xs hover:text-[#888] transition-colors">All Matches</Link>
            <a href="/game" className="text-[#555] text-xs hover:text-[#888] transition-colors">Play</a>
          <Link href="/disclaimer" className="text-[#555] text-xs hover:text-[#888] transition-colors">Disclaimer</Link>
          <Link href="/privacy" className="text-[#555] text-xs hover:text-[#888] transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[#555] text-xs hover:text-[#888] transition-colors">Terms</Link>
          </nav>
          <span className="text-[#333] text-[11px]">worsteleven.com</span>
        </footer>
      </main>
    </>
  );
}
