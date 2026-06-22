const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">
          One straightforward rate. No complex tiers, no hidden fees, and no guessing what a visit will cost.
        </p>
      </div>

      {/* Hero rate card — the actual core offer */}
      <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-8 sm:p-10 mb-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
              In-Home & Remote Technical Support
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold text-white">$89</span>
              <span className="text-slate-200 text-xl font-medium">/ hour</span>
            </div>
            <p className="text-amber-400 font-medium mt-3 text-sm bg-amber-950/40 inline-block px-3 py-1 rounded border border-amber-900/50">
              ➔ 1-hour minimum per visit
            </p>
          </div>
          <a
            href="/?service=hourly-visit#contact"
            className="inline-flex items-center justify-center self-start sm:self-end bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-blue-600/20 whitespace-nowrap"
          >
            Book an In-Home Visit
          </a>
        </div>

        <div className="border-t border-slate-700/60 mt-8 pt-8 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-white font-semibold text-base mb-1">Covers everything</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Computer repairs, virus cleanups, printer troubleshooting, moving photos and data to a new device, and Windows upgrades. One rate covers any tech help you need.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-base mb-1">Phone & remote help</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Quick issues I can fix safely over the phone or computer screen are billed at{' '}
              <span className="text-white font-bold">$25 per 15 minutes</span>. You only pay for the exact time used.
            </p>
          </div>
        </div>
      </div>

      {/* Honest note — protecting against scope creep and equipment cost expectations */}
      <p className="text-slate-400 text-sm text-center mb-16 max-w-xl mx-auto bg-slate-900/40 p-4 rounded-xl border border-slate-800">
        💡 <span className="font-medium text-white">Please note:</span> Rates cover technical labor only. Any required physical parts, software licenses, or subscription costs are extra and will always be discussed with you upfront before anything is ordered.
      </p>

      {/* Care Package — secondary, clearly optional */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Want to stay ahead of computer problems?</h3>
        <p className="text-slate-300 text-sm sm:text-base">An optional annual preventative maintenance package — never required to work with me.</p>
      </div>

      <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
        <div className="flex items-baseline justify-between mb-6">
          <h4 className="text-white font-bold text-xl">Annual Care Package</h4>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$299</span>
            <span className="text-slate-300 text-sm">/ year</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            'Two fully pre-scheduled 60-minute tuneups per year (spaced 6 months apart)',
            'System backups verified and browser malware/clutter safely cleared',
            'Internal dust cleaned out and critical security updates installed',
            'Priority calendar slot placement ahead of standard calls',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base">
              <span className="text-emerald-400 text-lg font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-700/60 pt-5 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-2">
            Important Information
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            This plan explicitly covers your two scheduled preventative care visits. Any extra on-site calls or standard phone troubleshooting requests between checkups are billed separately at the standard hourly rates listed above. This ensures my schedule stays reliable and open for unexpected emergencies.
          </p>
        </div>

        <a
          href="/?service=care-package#contact"
          className="mt-6 block text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl text-base transition-colors border border-slate-700"
        >
          Inquire About the Care Package
        </a>
      </div>
    </div>
  </section>
);

export default Pricing;