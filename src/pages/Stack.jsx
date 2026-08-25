export default function Stack() {
  const categories = [
    {
      title: "Languages & Core",
      items: ["C", "C++", "Python", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express.js", "Socket.IO"]
    },
    {
      title: "Tools & Databases",
      items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Prisma ORM", "Supabase", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">My Stack</h1>
        <p className="text-gray-400">Technologies and tools I use to build software.</p>
      </div>

      <div className="flex flex-col gap-10 mt-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white border-b border-white/10 pb-3">{cat.title}</h2>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl shadow-sm text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
