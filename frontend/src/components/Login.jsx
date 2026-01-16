import { useState } from "react";
import { motion } from "framer-motion";

export default function MagicLinkAlertSignInPage({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (loading) return; 
    setLoading(true);

    try {
     
      await new Promise((resolve) => setTimeout(resolve, 500));

     
      onSuccess();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

 
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };


  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 0px rgba(255, 255, 255, 0.3)",
        "0 0 20px rgba(255, 255, 255, 0.6)",
        "0 0 0px rgba(255, 255, 255, 0.3)"
      ],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="w-full flex justify-center items-center min-h-screen px-4"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="rounded-2xl p-1" 
        variants={glowVariants}
        animate="animate"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 w-full max-w-md text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Join Entrepreneurship Hub
          </h2>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="
              w-full px-4 py-3 mb-4 rounded-lg
              bg-black/50 border border-indigo-500/30
              text-white placeholder-indigo-300/50
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg font-medium
              bg-indigo-600 hover:bg-indigo-500
              transition disabled:opacity-50
            "
          >
            {loading ? "Redirecting..." : "Join Now"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
