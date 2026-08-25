export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Innovation House Technologies Pvt Ltd",
      date: "Jun 2026 - Aug 2026",
      desc: [
        "Developed backend services for an AI workforce platform using Node.js and Express.js with REST APIs for user management, payments, and core platform features.",
        "Implemented user authentication and role-based access control (RBAC) with input validation and security measures to protect application data."
      ]
    },
    {
      role: "Backend Developer",
      company: "SAARTHI - MPCST",
      date: "May 2026 - Jul 2026",
      desc: [
        "Architected a real-time yoga tracking backend using custom middleware, JWT/session authentication, and optimized database schemas to handle user management and live telemetry.",
        "Implemented caching mechanisms and optimized database queries to deliver responsive, real-time feedback during user workouts.",
        "Contributed to a high-profile health-tech product featured in leading publications like Hindustan Times."
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Experience</h1>
        <p className="text-gray-400">My professional journey so far.</p>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-4 flex flex-col gap-10 pb-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8">
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-darkBg shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <div className="text-lg font-semibold text-white">{exp.role}</div>
                  <div className="text-sm font-medium text-indigo-400">{exp.company}</div>
                </div>
                <div className="text-xs font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2 text-sm leading-relaxed">
                {exp.desc.map((point, i) => (
                  <li key={i} className="pl-1 marker:text-white/30">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
