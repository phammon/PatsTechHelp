import patrickAvatar from '../assets/patrick-avatar.png'

const About = () => (
  <section id="about" className="py-24 bg-slate-950">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src={patrickAvatar}
            alt="Patrick — Pat's Tech Help"
            className="w-52 h-64 rounded-2xl object-cover object-top border-4 border-blue-500/30 shadow-xl shadow-blue-900/20"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Hi, I'm Patrick 👋</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            I'm a software engineer and tech enthusiast. Whether it's fixing a frustrating computer
            problem or building a full-stack web app for your startup, I love helping people get
            more out of technology.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            With years of experience in professional software development and hands-on tech
            support, I bring quality work at prices that make sense for individuals and small
            businesses.
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', '.NET Core', '.NET Framework', 'React Native', 'Node.js', 'iOS & Android', 'PC & Mac Support'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
