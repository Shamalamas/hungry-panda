import { Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import ExploreStartups from './pages/ExploreStartups';
import JoinNow from './pages/JoinNow';
import Navbar from './components/Navbar';
import AccessResources from './pages/AccessResources.jsx';    

export default function App() {
  return (
    <>
  <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen text-white">  
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ExploreStartups' element={<ExploreStartups />} />
        <Route path='/JoinNow' element={<JoinNow />} />
        <Route path='/AccessResources' element={<AccessResources />} />
      </Routes>
    </Router>
  </div>  
    </>
  );
}
