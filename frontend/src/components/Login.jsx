import { useEffect, useState } from "react";
import { requestMagicLink, verifyMagicLink, persistSession } from "../lib/api";

export default function MagicLinkAlertSignInPage({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (!token) return;

      setLoading(true);
      setError("");

      try {
        const data = await verifyMagicLink(token);
        persistSession(data);

        localStorage.removeItem("pending_username");
        localStorage.removeItem("pending_email");

        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        window.history.replaceState({}, "", url.toString());

        onSuccess?.(data);
      } catch (e) {
        setError(e?.message || "Sign-in failed");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [onSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      localStorage.setItem("pending_username", username);
      localStorage.setItem("pending_email", email);

      const data = await requestMagicLink({ email, username });

      const link = data?.magic_link;
      if (!link) throw new Error("Missing magic link");

      window.location.href = link;
    } catch (e) {
      setError(e?.message || "Request failed");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 w-full max-w-md text-white shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Join Entrepreneurship Hub
      </h2>

      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full px-4 py-3 mb-4 rounded-lg bg-black/50 border border-indigo-500/30 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      />

      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-3 mb-6 rounded-lg bg-black/50 border border-indigo-500/30 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      />

      {error ? (
        <div className="mb-4 text-sm text-red-300 bg-red-900/20 border border-red-500/20 rounded-lg px-3 py-2">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Confirm"}
      </button>
    </form>
  );
}
