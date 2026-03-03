import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Worst Eleven',
  description: 'Worst Eleven privacy policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p
          className="text-[#555] text-[10px] tracking-widest uppercase mb-10"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Last updated: 3 March 2026
        </p>

        <div className="flex flex-col gap-8 text-[#888] text-sm leading-relaxed">
          <p>We respect your privacy and are committed to protecting your personal data.</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Account information (e.g. email address)</li>
              <li>Gameplay data (e.g. scores, selections)</li>
              <li>Device and usage data (e.g. analytics, IP address)</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">2. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Provide and improve the Service</li>
              <li>Enable gameplay features</li>
              <li>Communicate with you</li>
              <li>Monitor usage and performance</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">3. Analytics</h2>
            <p>We may use third-party analytics tools (e.g. Google Analytics) to understand how users interact with the Service.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">4. Payments</h2>
            <p>Payments are processed via third-party providers (e.g. Stripe, Apple, Google). We do not store full payment details.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with trusted service providers where necessary to operate the Service.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">6. Data Retention</h2>
            <p>We retain data only as long as necessary to operate the Service.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Access your data</li>
              <li>Request deletion of your data</li>
            </ul>
            <p>Please contact us to exercise these rights.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">8. Security</h2>
            <p>We take reasonable steps to protect your data, but no system is completely secure.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">9. Changes to Policy</h2>
            <p>We may update this policy from time to time.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-[#ddd] text-base font-semibold">10. Contact</h2>
            <p>
              For any privacy-related questions, contact:{' '}
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
