import { NavLink, useNavigate } from "react-router-dom";
import { getUser, getToken, logout, getPendingUsername } from "../lib/api";
import { useEffect, useState } from "react";

const getNavLinkClass = ({ isActive }) => {
  const baseClasses =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 uppercase tracking-wider";
  const activeClasses = "bg-indigo-500/40 text-white";
  const inactiveClasses = "text-indigo-300/80 hover:text-white hover:bg-white/5";
  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

const getNavLinkStyle = ({ isActive }) => ({
  boxShadow: isActive ? "0 0 20px rgba(139,92,246,0.35)" : "none",
});

export default function Navbar() {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(!!getToken());
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const sync = () => {
      setSignedIn(!!getToken());
      setUser(getUser());
    };

    sync();
    window.addEventListener("auth:changed", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);

    return () => {
      window.removeEventListener("auth:changed", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  const label = user?.username || user?.name || getPendingUsername() || "";

  const handleAuthClick = () => {
    if (signedIn) {
      logout();
      setSignedIn(false);
      setUser(null);
      navigate("/");
    } else {
      navigate("/JoinNow");
    }
  };

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
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}
      >
        <div className="flex space-x-6 mx-auto">
          <NavLink to="/" className={getNavLinkClass} style={getNavLinkStyle} end>
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
            to="/AccessResources"
            className={getNavLinkClass}
            style={getNavLinkStyle}
          >
            ACCESS RESOURCES
          </NavLink>
        </div>

        <div className="p-4 pointer-events-auto flex items-center gap-4">
          {signedIn && label ? (
            <div
              className="
                flex items-center gap-2
                px-4 py-1.5
                rounded-full
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-sm font-medium text-indigo-200
                shadow-[0_0_20px_rgba(99,102,241,0.25)]
                select-none
              "
            >
              <span
                className="
                  w-6 h-6 flex items-center justify-center
                  rounded-full
                  bg-indigo-500/30
                  text-indigo-200 text-xs font-bold
                "
              >
                {label.charAt(0).toUpperCase()}
              </span>
              <span>{label}</span>
            </div>
          ) : null}

          <button
            onClick={handleAuthClick}
            className="
              px-6 py-2 rounded-full text-sm font-bold text-white/90
              backdrop-blur-xl bg-white/5
              transition-all duration-300
              hover:bg-white/10 hover:text-white
            "
          >
            {signedIn ? "LOG OUT" : "JOIN NOW"}
          </button>
        </div>
      </nav>
    </header>
  );
}
