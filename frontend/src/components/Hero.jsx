export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">
     
      <div className="max-w-5xl mx-auto">
       
        <header className="text-center mb-10">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            style={{ textShadow: "0 0 18px rgba(99,102,241,0.85)" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-400">
              Welcome to the Entrepreneurship Hub
            </span>
          </h1>
          <p className="text-sm sm:text-base text-indigo-200/60">
              Empowering Innovators, Connecting Startups, and Fueling Growth.
          </p>
        </header>
      </div>
    </main>
  );
}