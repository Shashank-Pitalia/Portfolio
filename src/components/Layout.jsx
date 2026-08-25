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

const NavLink = ({ to, icon: Icon, label, external, isActive }) => {
  const content = (
    <div className="relative flex items-center justify-center rounded-full cursor-pointer aspect-square">
      <div className={`peer z-10 relative p-2 text-lg rounded-full transition-all ${isActive ? "text-newBlack md:bg-newGrey/20" : "text-gray-400"}`}>
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      {isActive && <span className="absolute inset-0 bg-newGrey/20 rounded-full"></span>}
      <div className="absolute top-0 px-2 py-1 text-xs font-medium transition-all rounded-md opacity-0 w-max bg-[#d8d8d8] text-newBlack md:right-0 peer-hover:opacity-100 peer-hover:-top-10 md:peer-hover:right-14 md:top-1/2 md:peer-hover:top-1/2 md:-translate-y-1/2">
        {label}
      </div>
    </div>
  );

  if (external) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to}>
        {content}
      </a>
    );
  }

  return (
    <Link target="_self" to={to}>
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
  ];

  return (
    <div className="relative flex justify-center min-h-screen p-1 md:p-4 capitalize text-newGrey bg-zinc-50 font-sans">
      <div className="relative w-full max-w-xl pt-8 mb-20">
        
        {/* Desktop Sidebar */}
        <div className="absolute top-0 bottom-0 hidden h-screen md:block -left-14">
          <div className="sticky flex flex-col items-center gap-2 p-2 mx-auto bg-white border rounded-full shadow-lg top-10 border-newGrey/20">
            {links.map((link) => (
              <NavLink key={link.label} {...link} isActive={location.pathname === link.to} />
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[calc(100vh-200px)] flex flex-col gap-4 md:gap-8 px-2 md:px-4">
          <Outlet />
        </div>

        {/* Mobile Bottom Nav */}
        <div className="fixed bottom-0 left-0 w-full z-50 flex flex-col justify-end h-full md:hidden pointer-events-none">
          <div className="sticky bottom-4 w-full flex justify-center">
            <div className="flex items-center gap-1 p-2 bg-white border rounded-full shadow-lg border-newGrey/20 pointer-events-auto">
              {links.map((link) => (
                <NavLink key={link.label} {...link} isActive={location.pathname === link.to} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
