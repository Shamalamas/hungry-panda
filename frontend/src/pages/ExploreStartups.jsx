import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

export default function ExploreStartups() {
  const startups = [
    { name: "EcoFlow", industry: "Clean Energy", desc: "Portable power solutions for sustainable living." },
    { name: "MediLink", industry: "HealthTech", desc: "Connecting patients with healthcare providers instantly." },
    { name: "FinPilot", industry: "FinTech", desc: "AI tools for smarter personal finance." },
    { name: "AgroNova", industry: "AgriTech", desc: "Innovating agriculture through smart sensors." },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AnimatedBackground />

      <motion.main className="pt-28 px-8 text-white relative z-10 flex flex-col gap-12">
        <motion.header
          className="text-center flex flex-col gap-3 items-center"
          variants={fadeUpVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              Explore Startups
            </span>
          </h1>
          <p className="text-indigo-200/60 max-w-xl">
            Discover innovative startups across industries shaping the future.
          </p>
        </motion.header>

        <motion.div className="max-w-4xl mx-auto" variants={fadeUpVariants}>
          <input
            type="text"
            placeholder="Search by name, industry, or description..."
            className="
              w-full px-6 py-4 rounded-xl
              bg-black/40 backdrop-blur-md
              border border-indigo-500/30
              text-white placeholder-indigo-300/60
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              className="
                bg-black/35 backdrop-blur-lg
                border border-indigo-500/20
                rounded-2xl p-8
                shadow-lg cursor-pointer
              "
              variants={fadeUpVariants}
              whileHover="hover"
            >
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                  {startup.industry}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2">{startup.name}</h2>
              <p className="text-white/80 mb-6">{startup.desc}</p>

              <button className="px-4 py-2 rounded-lg text-sm bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300">
                View More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
