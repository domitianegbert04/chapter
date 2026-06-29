
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase-client";
import { motion } from "motion/react";
import { colors } from "../design-system";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      });

      if (error) throw error;
      alert("Check your email for confirmation link!");
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0B] p-4">
      <motion.div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 rounded-3xl flex items-center justify-center text-4xl mb-4" style={{ background: colors.accent.DEFAULT }}>
            C
          </div>
          <h1 className="text-4xl font-bold">Join Chapter</h1>
          <p className="text-lg mt-2" style={{ color: colors.text.secondary }}>Start your reading sanctuary</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-2xl bg-[#171715] border border-white/10 focus:border-[#C8A26A] outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-2xl bg-[#171715] border border-white/10 focus:border-[#C8A26A] outline-none"
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-2xl bg-[#171715] border border-white/10 focus:border-[#C8A26A] outline-none"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-semibold text-lg"
            style={{ background: colors.accent.DEFAULT }}
            whileHover={{ scale: 1.02 }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </motion.button>
        </form>

        <p className="text-center mt-8 text-sm" style={{ color: colors.text.muted }}>
          Already have an account?{" "}
          <a href="/login" className="text-[#C8A26A]">Sign in</a>
        </p>
      </motion.div>
    </div>
  );
}
