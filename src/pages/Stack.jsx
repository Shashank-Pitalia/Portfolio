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
        <h1 className="text-2xl font-bold text-newBlack">My Stack</h1>
        <p className="text-gray-500">Technologies and tools I use to build software.</p>
      </div>

      <div className="flex flex-col gap-8 mt-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-newBlack border-b border-gray-100 pb-2">{cat.title}</h2>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <div key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:shadow-md hover:border-gray-300 transition-all">
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
