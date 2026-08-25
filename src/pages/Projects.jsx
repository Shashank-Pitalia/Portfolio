const Github = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Sgsits GatePass System",
      date: "Jul 2026",
      tech: "React • TypeScript • Vite • Node.js • Express.js • Socket.IO • Prisma ORM",
      desc: "Built a full-stack visitor management platform with role-based access control, secure authentication, and real-time updates. Developed a responsive React + TS frontend with dynamic dashboards and seamless API integration. Engineered a scalable backend with RESTful APIs and Socket.IO for instant notifications.",
      link: "https://github.com/Shashank-Pitalia"
    },
    {
      title: "Mentor AI",
      date: "Jun 2026",
      tech: "React • Node.js • Express.js • OpenAI API • Gemini API • MongoDB",
      desc: "Built an AI-driven mentorship platform providing personalized learning roadmaps, automated code reviews, and interactive mock interview simulations. Integrated Generative AI APIs to analyze responses and provide real-time career guidance.",
      link: "https://github.com/Shashank-Pitalia"
    },
    {
      title: "Real-Time Chat Application",
      date: "May 2026",
      tech: "React • Supabase • PostgreSQL • JavaScript",
      desc: "Built a real-time chat interface supporting instant one-to-one messaging. Integrated Supabase authentication for secure login and protected user chat data. Designed PostgreSQL tables for users and messages to keep data organized and easy to query.",
      link: "https://github.com/Shashank-Pitalia"
    },
    {
      title: "Gen AI MERN Stack Project",
      date: "Apr 2026",
      tech: "MongoDB • Express.js • React • Node.js • OpenAI API • JWT",
      desc: "Engineered a full-stack Generative AI content creation and workflow platform. Integrated LLM APIs for automated text, code, and image generation with prompt template customization, history management, JWT authentication, and rate-limiting.",
      link: "https://github.com/Shashank-Pitalia"
    }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Projects</h1>
        <p className="text-gray-400">Things I've built to solve problems and learn new technologies.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="flex flex-col gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                <p className="text-xs font-semibold text-indigo-300 mt-1">{proj.tech}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">{proj.date}</span>
                <a href={proj.link} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-indigo-500 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
