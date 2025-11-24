import { NavLink } from "react-router-dom";


const getNavLinkClass = ({ isActive }) => {
  const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 uppercase tracking-wider";
  
  const activeClasses = 'bg-indigo-600/70 text-white border border-indigo-500 shadow-md';
  const inactiveClasses = 'text-indigo-300 hover:text-white hover:bg-indigo-900/30 border border-transparent';

  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};


const getNavLinkStyle = ({ isActive }) => {
  return {
    boxShadow: isActive 
      ? "0 0 15px rgba(99,102,241,0.4)" 
      : "none"
  };
};


export default function Navbar() {
  
  const resourcePath = '/AccessResources';

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav 
        className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm border-b border-indigo-900/40 shadow-lg px-8"
        style={{ boxShadow: "0 0 20px rgba(99,102,241,0.15)" }}
      >
        
       
        <div className="flex space-x-6 mx-auto">
          
          
          <NavLink 
            to="/" 
            className={getNavLinkClass}
            style={getNavLinkStyle}
            // Add 'end' prop to ensure only the exact path '/' is active
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
        
        
       <NavLink to="/JoinNow" className="p-0">
          <button 
            className="px-6 py-2 rounded-full text-sm font-bold text-white/90 backdrop-blur-xl 
                       bg-white/5 border border-white/20 
                       transition-all duration-300 hover:bg-white/10 hover:text-white"
            style={{ 
              
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.15)",
            }}
          >
            Join Now
          </button>
        </NavLink>
      </nav>
    </header>
  );
}