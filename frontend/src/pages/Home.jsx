import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 bg-transparent">
        <Hero />
        <About />
      </div>
    </div>
  );
}
