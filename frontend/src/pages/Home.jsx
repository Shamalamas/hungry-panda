import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
