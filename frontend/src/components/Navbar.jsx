import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-10 backdrop-blur-md text-white z-50 h-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-6">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="Home">HOME</Link>
          </li>
          <li>
            <Link to="/ExploreStartups" className="navlink">
              EXPLORE STARTUPS
            </Link>
                  
          </li>
          <li>
            <Link to="/AccessResources" className="navlink">
              ACCESS RESOURCES
            </Link>
          </li>
         </ul>
            <Link to="/JoinNow" className="navlink" >
             <button>
              Join Now
             </button>
            </Link>
      </div>
    </header>
  );
}
