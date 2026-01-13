import React from "react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Harvard Business Review",
    description:
      "Insights and best practices for management, strategy, and leadership.",
    link: "https://hbr.org/",
    type: "Business Strategy",
  },
  {
    title: "Nielsen Norman Group",
    description:
      "World-leading research and expert guidance on user experience (UX) design.",
    link: "https://www.nngroup.com/",
    type: "Design & UX",
  },
  {
    title: "Khan Academy",
    description:
      "Free courses and educational resources covering math, science, economics, and arts.",
    link: "https://www.khanacademy.org/",
    type: "General Education",
  },
  {
    title: "Coursera",
    description:
      "Online courses and specializations from top universities and companies worldwide.",
    link: "https://www.coursera.org/",
    type: "Professional Courses",
  },
  {
    title: "The Economist",
    description:
      "Global analysis of politics, current affairs, business, and finance.",
    link: "https://www.economist.com/",
    type: "Current Affairs",
  },
  {
    title: "NASA Image and Video Library",
    description:
      "High-resolution media resources covering space exploration and scientific discovery.",
    link: "https://images.nasa.gov/",
    type: "Science & Research",
  },
];

const ResourcesPage = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Much bigger hover
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.18,        // 🔥 bigger pop
      y: -18,             // lift up
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.main className="pt-28 px-8 text-white relative z-10 flex flex-col gap-12">
        <motion.header
          className="text-center mb-12 flex flex-col gap-3 items-center"
          variants={headingVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              Resources
            </span>
          </h1>
          <p className="text-indigo-200/60 max-w-xl">
            Curated guides, tutorials, and tools for building the future across disciplines.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          {resources.map((res, index) => (
            <motion.div
              key={res.title}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 + index * 0.15 }}
              className="
                relative
                transform-gpu
                cursor-pointer
                rounded-2xl p-6
                bg-black/35 backdrop-blur-lg
                border border-indigo-500/20
                shadow-lg
                transition-all duration-300
                will-change-transform
              "
              style={{ transformOrigin: "center" }}
            >
              {/* Glow layer (appears on hover) */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 rounded-2xl
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {/* Make it float above neighbors when hovered */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                whileHover={{
                  boxShadow:
                    "0 40px 120px rgba(99,102,241,0.35), 0 0 60px rgba(255,255,255,0.10)",
                }}
              />

              <div className="mb-3">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                  {res.type}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2">{res.title}</h2>
              <p className="text-white/80 mb-4">{res.description}</p>

              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                  bg-indigo-500/20 hover:bg-indigo-500/40
                  transition-all duration-300
                "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Go to Resource
              </a>

              {/* z-index bump on hover */}
              <style>{`
                .resource-card:hover { z-index: 50; }
              `}</style>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </motion.div>
  );
};

export default ResourcesPage;
