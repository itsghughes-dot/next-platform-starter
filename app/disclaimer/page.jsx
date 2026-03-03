import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer — Worst Eleven',
  description: 'Worst Eleven is an independent entertainment product, not affiliated with the Premier League, UEFA, or any football club.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      <nav className="bg-[#0a0a0a] border-b border-[#1e1e1e] px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2 }}
          className="text-white"
        >
          WORST<span className="text-[#e8290b]">XI</span>
        </Link>
        <Link
          href="/"
          className="text-[#555] text-[10px] tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ← Home
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1
          className="text-white tracking-widest mb-10"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px,8vw,56px)' }}
        >
          Disclaimer
        </h1>

        <div className="flex flex-col gap-4 text-[#888] text-sm leading-relaxed">
          <p><strong className="text-[#ddd]">Worst Eleven is an independent entertainment product.</strong></p>
          <p>This Service:</p>
          <ul className="list-disc pl-6 flex flex-col gap-1">
            <li>Is not affiliated with, endorsed by, or licensed by the Premier League, UEFA, or any football club</li>
            <li>Does not provide betting or gambling services</li>
            <li>Does not offer real-money prizes</li>
          </ul>
          <p>All content is provided for entertainment purposes only.</p>
          <p>Match data and results may be derived from publicly available sources and are not guaranteed to be accurate or complete.</p>
          <p>Use of this Service is at your own risk.</p>
        </div>
      </main>

      <footer className="border-t border-[#1a1a1a] px-6 py-5 flex items-center justify-between flex-wrap gap-3 mt-12">
        <Link
          href="/"
          className="text-white"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 2 }}
        >
          WORST<span className="text-[#e8290b]">XI</span>
        </Link>
        <nav className="flex gap-5 flex-wrap">
          <Link href="/match" className="text-[#555] text-xs hover:text-[#888] transition-colors">All Matches</Link>
          <a href="/game" className="text-[#555] text-xs hover:text-[#888] transition-colors">Play</a>
          <Link href="/disclaimer" className="text-[#555] text-xs hover:text-[#888] transition-colors">Disclaimer</Link>
          <Link href="/privacy" className="text-[#555] text-xs hover:text-[#888] transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[#555] text-xs hover:text-[#888] transition-colors">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
