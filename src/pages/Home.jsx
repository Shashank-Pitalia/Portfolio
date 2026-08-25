import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Profile */}
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 overflow-hidden rounded-full bg-newBlack text-white flex items-center justify-center font-bold text-xl shadow-md">
          SP
        </div>
        <div className="flex flex-col text-sm font-medium">
          <div className="text-newBlack text-lg">Shashank Pitalia</div>
          <div className="text-gray-500">B. 2006</div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col gap-3">
        <div className="text-xl md:text-2xl font-medium">
          Architecting Scalable <span className="font-bold text-newBlack"> Digital Solutions!</span>
        </div>
        <div className="text-base md:text-lg text-gray-600 leading-relaxed">
          I am a motivated Information Technology student with a strong interest in software development, full-stack web development, and problem-solving. I have hands-on experience with C++, Java, JavaScript, React, Node.js, databases, and REST APIs, along with a solid foundation in Data Structures, Algorithms, Operating Systems, and Computer Networks. I enjoy building practical applications, learning new technologies, and continuously improving my technical skills through hands-on projects and problem-solving.
        </div>
      </div>

      {/* Socials / Links Snippet */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            LinkedIn
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <a href="https://linkedin.com/in/shashank-pitalia-892059329" target="_blank" className="text-xs uppercase tracking-wider font-semibold">Follow</a>
          </div>
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            Github
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <a href="https://github.com/Shashank-Pitalia" target="_blank" className="text-xs uppercase tracking-wider font-semibold">Follow</a>
          </div>
        </div>
      </div>

      {/* Experience Snippet */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between text-base md:text-lg font-medium text-newBlack">
          <div></div>
          <Link className="flex items-center px-2 py-1 text-sm font-normal transition-all rounded-md cursor-pointer text-newBlack group hover:bg-black/5 relative z-50" to="/experience">
            <span>All</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            Innovation House Technologies
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">06/2026 - 08/2026</div>
          </div>
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            SAARTHI - MPCST
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">05/2026 - 07/2026</div>
          </div>
        </div>
      </div>

      {/* Projects Snippet */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between text-base md:text-lg font-medium text-newBlack">
          <div></div>
          <Link className="flex items-center px-2 py-1 text-sm font-normal transition-all rounded-md cursor-pointer text-newBlack group hover:bg-black/5 relative z-50" to="/projects">
            <span>All</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            Sgsits GatePass System
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">Fullstack</div>
          </div>
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            Mentor AI
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">Fullstack</div>
          </div>
          <div className="flex items-end justify-between w-full gap-3 group hover:text-newBlack">
            Real-Time Chat App
            <div className="h-[1px] flex-1 bg-newGrey/30 mb-[6px] relative">
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap">Fullstack</div>
          </div>
        </div>
      </div>

      {/* Stack Snippet */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between text-base md:text-lg font-medium text-newBlack">
          <div></div>
          <Link className="flex items-center px-2 py-1 text-sm font-normal transition-all rounded-md cursor-pointer text-newBlack group hover:bg-black/5 relative z-50" to="/stack">
            <span>All</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 mt-2">
          {["React", "Node.js", "Express.js", "TypeScript", "Python", "SQL", "Postman", "Prisma"].map((tech) => (
            <div key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-medium text-newBlack hover:shadow-md transition-shadow">
              {tech}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
