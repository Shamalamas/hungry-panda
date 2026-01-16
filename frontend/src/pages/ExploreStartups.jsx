import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

export default function ExploreStartups() {
  const [search, setSearch] = useState("");

  const startups = [
    { name: "EcoFlow", industry: "Clean Energy", desc: "Portable power solutions for sustainable living." },
    { name: "MediLink", industry: "HealthTech", desc: "Connecting patients with healthcare providers instantly." },
    { name: "FinPilot", industry: "FinTech", desc: "AI tools for smarter personal finance." },
    { name: "AgroNova", industry: "AgriTech", desc: "Innovating agriculture through smart sensors." },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.25 } },
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return startups;

    return startups.filter((s) => {
      return (
        s.name.toLowerCase().includes(q) ||
        s.industry.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q)
      );
    });
  }, [search]);

  return (
    <motion.div
      className="relative min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AnimatedBackground />

      <motion.main className="pt-28 px-8 text-white relative z-10 flex flex-col gap-10">
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

        <motion.div
          className="max-w-md mx-auto w-full"
          variants={fadeUpVariants}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search startups…"
            className="
              w-full
              px-4 py-2.5 rounded-lg
              bg-black/40 backdrop-blur-md
              border border-indigo-500/20
              text-sm text-white placeholder-indigo-300/60
              shadow-[0_0_18px_rgba(99,102,241,0.08)]
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
            "
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full"
          variants={containerVariants}
          layout
        >
          {filtered.map((startup) => (
            <motion.div
              key={startup.name}
              className="
                bg-black/35 backdrop-blur-lg
                border border-indigo-500/20
                rounded-2xl p-6
                shadow-lg cursor-pointer
              "
              variants={fadeUpVariants}
              whileHover="hover"
              layout
              transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="mb-2">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                  {startup.industry}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-1">{startup.name}</h2>
              <p className="text-white/80 text-sm mb-4">{startup.desc}</p>

              <button
                type="button"
                className="px-4 py-2 rounded-lg text-sm bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300"
              >
                View More
              </button>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <motion.div
              key="empty"
              className="col-span-full text-center text-indigo-200/60 py-8"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              layout
            >
              No startups found.
            </motion.div>
          )}
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
