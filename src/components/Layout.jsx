import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Layers } from "lucide-react";

const Linkedin = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LeetCode = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.543l1.83 1.691a1.73 1.73 0 0 0 2.45-.098l6.82-7.3a1.446 1.446 0 0 0 .098-1.944 1.442 1.442 0 0 0-1.936-.098L8.681 14.16a1.597 1.597 0 0 1-2.261-.098l-1.83-1.692a3.528 3.528 0 0 1-.75-1.196 3.6 3.6 0 0 1-.205-.59 3.693 3.693 0 0 1-.036-1.579 3.541 3.541 0 0 1 .75-1.195l3.854-4.127L13.568 2.33a1.365 1.365 0 0 0 .098-1.944 1.373 1.373 0 0 0-.183-.387zM20.536 7.684a1.45 1.45 0 0 0-1.937.098l-1.884 2.016-1.63 1.745a1.442 1.442 0 0 0 .098 1.944 1.445 1.445 0 0 0 1.937-.098l1.63-1.744 1.884-2.017a1.44 1.44 0 0 0-.098-1.944zM16.9 14.881a1.442 1.442 0 0 0-1.936.098l-1.937 2.073-1.63 1.744a1.442 1.442 0 0 0 .098 1.944 1.445 1.445 0 0 0 1.936-.098l1.63-1.744 1.937-2.073a1.44 1.44 0 0 0-.098-1.944z"></path>
  </svg>
);

const NavLink = ({ to, icon: Icon, label, external, isActive }) => {
  const content = (
    <div className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      {/* Tooltip */}
      <div className="absolute -bottom-8 px-2 py-1 text-xs font-medium rounded-md opacity-0 bg-gray-800 text-white transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </div>
  );

  if (external) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to} className="group">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="group">
      {content}
    </Link>
  );
};

export default function Layout() {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/projects", icon: FolderOpen, label: "Projects" },
    { to: "/stack", icon: Layers, label: "My Stack" },
    { to: "https://linkedin.com/in/shashank-pitalia-892059329", icon: Linkedin, label: "LinkedIn", external: true },
    { to: "https://github.com/Shashank-Pitalia", icon: Github, label: "Github", external: true },
    { to: "https://leetcode.com/u/UBpqnWifVn", icon: LeetCode, label: "LeetCode", external: true },
  ];

  return (
    <div className="min-h-screen text-gray-100 font-sans pb-24 relative selection:bg-accent/30 selection:text-white">
      
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]"></div>
      </div>

      {/* Floating Top Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
        <nav className="flex items-center justify-between p-2 mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
          {links.map((link) => (
            <NavLink key={link.label} {...link} isActive={location.pathname === link.to} />
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="pt-28 px-4 w-full max-w-2xl mx-auto flex flex-col gap-8">
        <Outlet />
      </div>

    </div>
  );
}
