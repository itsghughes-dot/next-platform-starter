import Link from 'next/link';
import { ALL_MATCHES } from '@/data/matches';

export const metadata = {
  title: 'All Matches — Worst Eleven',
  description:
    'Browse all 29 Premier League classics available in Worst Eleven. From Man City 8-0 Watford to Agueroooo — pick your chaos.',
  openGraph: {
    title: 'All Matches | Worst Eleven',
    url: 'https://worsteleven.com/match',
  },
};

export default function MatchArchivePage() {
  const sorted = [...ALL_MATCHES].sort((a, b) => {
    const goalsA = a.meta.score.split('-').map(Number).reduce((x, y) => x + y, 0);
    const goalsB = b.meta.score.split('-').map(Number).reduce((x, y) => x + y, 0);
    return goalsB - goalsA;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="bg-[#0a0a0a] border-b border-[#1e1e1e] px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2 }}
          className="text-white"
        >
          WORST<span className="text-[#e8290b]">XI</span>
        </Link>
        <a
          href="/game"
          className="bg-white text-black text-xs font-semibold rounded-lg px-5 py-2 hover:bg-[#e8e6e1] transition-colors"
        >
          Play Now
        </a>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1
          className="text-white tracking-widest mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px,8vw,56px)' }}
        >
          All Matches
        </h1>
        <p className="text-[#666] text-sm mb-9">
          {ALL_MATCHES.length} Premier League classics — sorted by total goals
        </p>

        <div className="flex flex-col gap-2">
          {sorted.map((m, i) => {
            const totalGoals = m.meta.score.split('-').map(Number).reduce((a, b) => a + b, 0);
            return (
              <Link
                key={m.id}
                href={`/match/${m.slug}`}
                className="flex items-center bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3.5 gap-4 hover:border-[#333] transition-colors"
              >
                <span
                  className="text-[#333] w-5 shrink-0 text-right text-[10px]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        background: m.meta.homeColour,
                        boxShadow: m.meta.homeColour === '#FBEE23' ? '0 0 0 1px #777' : 'none',
                      }}
                    />
                    <span
                      className="text-[#ddd] tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16 }}
                    >
                      {m.meta.home}
                    </span>
                    <span
                      className="text-white tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18 }}
                    >
                      {m.meta.score}
                    </span>
                    <span
                      className="text-[#ddd] tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16 }}
                    >
                      {m.meta.away}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        background: m.meta.awayColour,
                        boxShadow: m.meta.awayColour === '#FBEE23' ? '0 0 0 1px #777' : 'none',
                      }}
                    />
                  </div>
                  <span
                    className="text-[#444] text-[10px]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {m.meta.date}
                  </span>
                </div>
                <span
                  className="text-[#555] text-[10px] tracking-wide bg-[#1a1a1a] px-2 py-0.5 rounded-md shrink-0"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {totalGoals} goals
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
