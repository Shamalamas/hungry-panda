import { Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import ExploreStartups from './pages/ExploreStartups';
import JoinNow from './pages/JoinNow';
import Navbar from './components/Navbar'; 

export default function App() {
  return (
    <>
  <div class="bg-gradient-to-r from-black to-blue-950 min-h-screen text-white">  
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<ExploreStartups />} />
        <Route path='/join' element={<JoinNow />} />
      </Routes>
    </Router>
  </div>  
    </>
  );
}
