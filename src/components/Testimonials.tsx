const testimonials = [
  {
    name: 'Jeffrey Jones',
    neighborhood: 'Villages of Parkwood',
    quote:
      "Pat's Tech Help has been an absolute lifesaver. Pat is knowledgeable, professional, and incredibly patient. He shows up on time, explains technology in a way that's easy to understand, and never makes you feel rushed or overwhelmed. What stands out most is his trustworthiness and genuine desire to help. If you're in The Villages and looking for someone who has integrity, is reliable, honest, and easy to work with — I highly recommend Pat's Tech Help.",
  },
  {
    name: 'Jeannette Laspopoulos',
    neighborhood: 'Orange Blossom',
    quote:
      "Patrick impressed me. He asked me what I needed. He stayed until it happened. Not one complaint from this mastermind. Also I think he has good intentions for the community. I would definitely have him back!",
  },
  {
    name: 'Lori Oliver',
    neighborhood: 'Villages of Parkwood',
    quote:
      "Patrick is a computer wizard that I found on Nextdoor. He kept in touch so I knew exactly when he'd be here. He is very good with computers and answered all my questions. What makes him different from the others is he's very friendly and kind. I feel like I made a new friend! Call him — you won't be disappointed!",
  },
]

const Testimonials = () => (
  <section className="py-24 bg-slate-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">What Neighbors Are Saying</h2>
        <a
          href="https://nextdoor.com/page/pats-tech-help-wildwood-fl/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          Verified reviews from Nextdoor
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 text-lg tracking-wider">★★★★★</div>
              <span className="text-xs text-green-500 font-medium bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">Nextdoor</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
            <div className="border-t border-slate-700 pt-4">
              <div className="font-semibold text-white text-sm">{t.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.neighborhood}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
