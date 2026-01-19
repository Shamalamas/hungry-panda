import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { requestMagicLink, verifyMagicLink, persistSession } from "../lib/api";

export default function MagicLinkAlertSignInPage({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [magicLink, setMagicLink] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (!token) return;

      setLoading(true);
      setError("");

      try {
        const data = await verifyMagicLink(token);
        persistSession({ access_token: data.access_token, user: data.user });

        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        window.history.replaceState({}, "", url.toString());

        onSuccess?.(data);
      } catch (err) {
        setError(err.message || "Verification failed");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [onSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");
    setMagicLink("");

    try {
      const data = await requestMagicLink({ email, username });
      setMagicLink(data.magic_link || "");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 0px rgba(255, 255, 255, 0.3)",
        "0 0 20px rgba(255, 255, 255, 0.6)",
        "0 0 0px rgba(255, 255, 255, 0.3)",
      ],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="w-full flex justify-center items-center min-h-screen px-4"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="rounded-2xl p-1" variants={glowVariants} animate="animate">
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 w-full max-w-md text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Join Entrepreneurship Hub</h2>

          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="
              w-full px-4 py-3 mb-4 rounded-lg
              bg-black/50 border border-indigo-500/30
              text-white placeholder-indigo-300/50
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
          />

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

          {error ? (
            <div className="mb-4 text-sm text-red-300 bg-red-900/20 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </div>
          ) : null}

          {magicLink ? (
            <a href={magicLink} className="block mb-4 text-sm text-indigo-200 underline break-all">
              {magicLink}
            </a>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg font-medium
              bg-indigo-600 hover:bg-indigo-500
              transition disabled:opacity-50
            "
          >
            {loading ? "Working..." : "Get Magic Link"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
