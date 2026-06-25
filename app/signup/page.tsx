"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { createClient } from "../lib/supabase-client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0D0D0B" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="w-full max-w-md p-8 rounded-3xl"
        style={{ background: "#171715", border: "1px solid #1e1e1b" }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#C8A26A" }}>
            <span className="text-lg font-bold text-[#0D0D0B]">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#F5F2EB]">Create account</h1>
            <p className="text-sm text-[#6D675E]">Start tracking your reading life</p>
          </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {error && (
            <div className="px-4 py-3 rounded-xl text-sm text-[#C77C7C] bg-[#C77C7C]/10 border border-[#C77C7C]/30">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2 text-[#A8A39A]">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-[#20201C] text-[#F5F2EB] border border-[#1e1e1b] focus:border-[#C8A26A]"
              placeholder="bookworm_alex"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#A8A39A]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-[#20201C] text-[#F5F2EB] border border-[#1e1e1b] focus:border-[#C8A26A]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#A8A39A]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-[#20201C] text-[#F5F2EB] border border-[#1e1e1b] focus:border-[#C8A26A]"
              placeholder="Min. 6 characters"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl text-sm font-semibold bg-[#C8A26A] text-[#0D0D0B]"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Creating account..." : "Create account"}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#6D675E]">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#C8A26A] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
