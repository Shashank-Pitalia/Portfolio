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
        <h1 className="text-2xl font-bold text-newBlack">Experience</h1>
        <p className="text-gray-500">My professional journey so far.</p>
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-2">
              <div>
                <div className="text-lg font-semibold text-newBlack">{exp.role}</div>
                <div className="text-sm font-medium text-gray-500">{exp.company}</div>
              </div>
              <div className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full w-fit">
                {exp.date}
              </div>
            </div>
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
              {exp.desc.map((point, i) => (
                <li key={i} className="pl-1">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
