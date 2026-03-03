import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Worst Eleven',
  description: 'Worst Eleven terms of service — the rules governing use of the platform.',
};

export default function TermsPage() {
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
          className="text-white tracking-widest mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px,8vw,56px)' }}
        >
          Terms of Service
        </h1>
        <p
          className="text-[#555] text-[10px] tracking-widest uppercase mb-10"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Last updated: 3 March 2026
        </p>

        <div className="flex flex-col gap-8 text-[#888] text-sm leading-relaxed">
          <p>Welcome to Worst Eleven ("the Service"). By using this Service, you agree to the following terms.</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">1. About the Service</h2>
            <p>Worst Eleven is an entertainment product that allows users to play football-based draft and simulation games using historical match data. The Service is provided for entertainment purposes only.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">2. No Gambling or Financial Rewards</h2>
            <p>Worst Eleven is not a gambling service.</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>No real money betting is offered</li>
              <li>No prizes of monetary value are awarded</li>
              <li>All gameplay is for entertainment only</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">3. No Affiliation</h2>
            <p>Worst Eleven is an independent product and is not affiliated with, endorsed by, or licensed by:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>The Premier League</li>
              <li>UEFA</li>
              <li>Any football club or organisation</li>
            </ul>
            <p>All team and player names are used for descriptive purposes only.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">4. Use of the Service</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Use the Service for personal, non-commercial purposes</li>
              <li>Not attempt to exploit or disrupt the Service</li>
              <li>Not reverse engineer or copy the platform</li>
            </ul>
            <p>We may suspend or terminate accounts that violate these terms.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">5. Gameplay and Data</h2>
            <p>The Service uses sports data and simulated outcomes. We do not guarantee:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Accuracy of data</li>
              <li>Accuracy of scores</li>
              <li>Availability of the Service at all times</li>
            </ul>
            <p>Gameplay results are generated for entertainment purposes only.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">6. Purchases and Payments</h2>
            <p>The Service may offer paid content (such as game packs or subscriptions). By making a purchase, you agree that:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>All purchases are final unless required by law</li>
              <li>Access may be revoked if terms are violated</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">7. Limitation of Liability</h2>
            <p>The Service is provided "as is". To the fullest extent permitted by law, we are not liable for:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Loss of data</li>
              <li>Loss of profits</li>
              <li>Service interruptions</li>
              <li>Any indirect or consequential loss</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">8. Changes to the Service</h2>
            <p>We may modify or discontinue parts of the Service at any time without notice.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">9. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of the Service constitutes acceptance of any changes.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">10. Contact</h2>
            <p>
              If you have any questions, please contact:{' '}
              <a href="mailto:info@worsteleven.com" className="text-[#aaa] underline">
                info@worsteleven.com
              </a>
            </p>
          </section>
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
