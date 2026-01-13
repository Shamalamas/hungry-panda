import Hero from "../components/Hero";
import About from "../components/About";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10 bg-transparent">
        <Hero />
        <About />
      </div>
    </div>
  );
}
