export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      
      <h1
        className="text-4xl font-extrabold tracking-tight mb-6"
        style={{ textShadow: "0 0 18px rgba(99,102,241,0.85)" }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-400">
          About Us
        </span>
      </h1>

      <div className="max-w-3xl">
        <p className="text-white leading-relaxed text-xl">
          Our mission is to empower startups by cultivating a dynamic ecosystem
          where innovation, collaboration, and growth converge.
          <br /><br />
          We strive to connect visionary entrepreneurs with the resources,
          mentorship, and networks they need to transform bold ideas into
          thriving ventures.
          <br /><br />
          Through strategic partnerships, community engagement, and tailored
          support, we aim to break down barriers, accelerate progress, and
          champion the next generation of innovators.
        </p>
      </div>

    </div>
  );
}
