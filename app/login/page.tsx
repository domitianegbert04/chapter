"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase-client";
import { motion } from "motion/react";
import { colors } from "../design-system";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0B] p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 rounded-3xl flex items-center justify-center text-4xl mb-4" style={{ background: colors.accent.DEFAULT }}>
            C
          </div>
          <h1 className="text-4xl font-bold" style={{ color: colors.text.primary }}>Welcome back</h1>
          <p className="text-lg mt-2" style={{ color: colors.text.secondary }}>Continue your reading journey</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-[#171715] border border-white/10 focus:border-[#C8A26A] outline-none text-white"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl bg-[#171715] border border-white/10 focus:border-[#C8A26A] outline-none text-white"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-semibold text-lg"
            style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        <p className="text-center mt-8 text-sm" style={{ color: colors.text.muted }}>
          Don't have an account?{" "}
          <a href="/signup" className="text-[#C8A26A] hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}
