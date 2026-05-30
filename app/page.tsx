export default function Page() {
  const faqs = [
    {
      q: "What photo formats are supported?",
      a: "JPEG, PNG, WebP, and HEIC files up to 20MB. Batch upload supports up to 50 photos at once."
    },
    {
      q: "Does this work with my existing Google Business account?",
      a: "Yes. Connect your Google My Business account via OAuth and we handle photo uploads automatically after optimization."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. Cancel from your dashboard with one click — no questions asked, no hidden fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Local Business Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-optimize photos for{" "}
          <span className="text-[#58a6ff]">Google Business</span> reviews
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically crop, compress, and enhance customer-submitted photos for your Google Business listings — maximize review impact without lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["AI Cropping", "Smart Compression", "Auto Enhancement", "Batch Upload", "GMB Integration", "Real-time Preview"].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to dominate local search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited photo optimizations",
              "Google My Business integration",
              "Batch processing (50 photos)",
              "AI crop, compress & enhance",
              "Real-time before/after preview",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PhotoBoost. All rights reserved.
      </footer>
    </main>
  );
}
