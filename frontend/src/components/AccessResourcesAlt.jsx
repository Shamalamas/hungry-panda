import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getToken,
  fetchPublicResources,
  fetchResourcesAuthed,
} from "../lib/api";

export default function AccessResourcesAlt() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.18,
      y: -18,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  useEffect(() => {
    let alive = true;

    async function loadResources() {
      setLoading(true);
      setError("");

      try {
        const token = getToken();
        const data = token
          ? await fetchResourcesAuthed()
          : await fetchPublicResources();

        if (!alive) return;
        setResources(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        if (!alive) return;
        setError(err.message || "Failed to load resources");
      } finally {
        if (alive) setLoading(false);
      }
    }

    loadResources();
    return () => {
      alive = false;
    };
  }, []);

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
            Curated guides, tutorials, and tools for building the future across
            disciplines.
          </p>

          <div className="h-5 text-xs text-indigo-200/60">
            {loading ? "Loading resources..." : error ? error : " "}
          </div>
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
            >
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
                Go to Resource
              </a>
            </motion.div>
          ))}

          {!loading && !error && resources.length === 0 && (
            <div className="col-span-full text-center text-indigo-200/60 py-8">
              No resources found.
            </div>
          )}
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
