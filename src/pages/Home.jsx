import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">


      {/* Profile & Intro */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-2 ring-white/10">
            SP
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white tracking-tight">Shashank Pitalia</h1>
            <p className="text-gray-400 font-medium">B. 2006</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Crafting High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Software & Real-Time Systems</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            I am a motivated Information Technology student with a strong interest in software development, full-stack web development, and problem-solving. I have hands-on experience with C++, Java, JavaScript, React, Node.js, databases, and REST APIs, along with a solid foundation in Data Structures, Algorithms, Operating Systems, and Computer Networks. I enjoy building practical applications, learning new technologies, and continuously improving my technical skills through hands-on projects and problem-solving.
          </p>
        </div>
      </div>

      {/* Snippets Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        
        {/* Experience Snippet */}
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Experience</h3>
            <Link to="/experience" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center group">
              View All <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col border-l-2 border-white/10 pl-3 py-1">
              <span className="text-sm font-medium text-white">Innovation House Technologies</span>
              <span className="text-xs text-gray-500">06/2026 - 08/2026</span>
            </div>
            <div className="flex flex-col border-l-2 border-white/10 pl-3 py-1">
              <span className="text-sm font-medium text-white">SAARTHI - MPCST</span>
              <span className="text-xs text-gray-500">05/2026 - 07/2026</span>
            </div>
          </div>
        </div>

        {/* Projects Snippet */}
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Projects</h3>
            <Link to="/projects" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center group">
              View All <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col border-l-2 border-white/10 pl-3 py-1">
              <span className="text-sm font-medium text-white">Sgsits GatePass System</span>
              <span className="text-xs text-gray-500">Fullstack • Socket.IO</span>
            </div>
            <div className="flex flex-col border-l-2 border-white/10 pl-3 py-1">
              <span className="text-sm font-medium text-white">Mentor AI</span>
              <span className="text-xs text-gray-500">Fullstack • AI</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
