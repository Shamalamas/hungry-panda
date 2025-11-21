export default function About() {
  return (
  
  <>
     <header className="text-center mb-10">
           <h1
             className="text-3xl font-extrabold tracking-tight mb-2"
             style={{ textShadow: "0 0 18px rgba(99,102,241,0.85)" }}
            >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-400">
                About Us
             </span>
            </h1>
      </header>
      <div className="p-6 max-w-xl mx-auto">
        <p className="text-white leading-relaxed text-2xl">
          Our mission is to empower startups by cultivating a dynamic ecosystem where innovation, collaboration, and growth converge.
          We strive to connect visionary entrepreneurs with the resources, mentorship, and networks they need to transform bold ideas into thriving ventures.
          Through strategic partnerships, community engagement, and tailored support, we aim to break down barriers, accelerate progress, and champion the next generation of changemakers.
        </p>
       </div>
  </>
 );
}
