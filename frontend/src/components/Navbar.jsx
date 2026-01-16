import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) => {
  const baseClasses =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 uppercase tracking-wider";

  const activeClasses =
    "bg-indigo-500/40 text-white";

  const inactiveClasses =
    "text-indigo-300/80 hover:text-white hover:bg-white/5";

  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

const getNavLinkStyle = ({ isActive }) => ({
  boxShadow: isActive
    ? "0 0 20px rgba(139,92,246,0.35)"
    : "none",
});

export default function Navbar() {
  const resourcePath = "/AccessResources";

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav
        className="
          pointer-events-auto
          flex justify-between items-center
          p-4 px-8
          bg-black/25 backdrop-blur-md
          border-b border-white/5
          transition-all duration-300
        "
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
        }}
      >
    
        <div className="flex space-x-6 mx-auto">
          <NavLink
            to="/"
            className={getNavLinkClass}
            style={getNavLinkStyle}
            end
          >
            HOME
          </NavLink>

          <NavLink
            to="/ExploreStartups"
            className={getNavLinkClass}
            style={getNavLinkStyle}
          >
            EXPLORE STARTUPS
          </NavLink>

          <NavLink
            to={resourcePath}
            className={getNavLinkClass}
            style={getNavLinkStyle}
          >
            ACCESS RESOURCES
          </NavLink>
        </div>

 
        <NavLink to="/JoinNow" className="p-4 pointer-events-auto">
          <button
            className="
              px-6 py-2 rounded-full text-sm font-bold text-white/90
              backdrop-blur-xl bg-white/5
              transition-all duration-300
              hover:bg-white/10 hover:text-white
            "
          >
            Join Now
          </button>
        </NavLink>
      </nav>
    </header>
  );
}
