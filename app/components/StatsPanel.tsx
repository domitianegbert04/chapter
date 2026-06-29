"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { colors, radii, shadows } from "../design-system";
import confetti from "canvas-confetti"; // Run: npm install canvas-confetti

interface Props {
  booksRead: number;
  pagesRead: number;
  readingTime: string;
  streak: number;
  palette: string[];
}

export default function StatsPanel({ booksRead, pagesRead, readingTime, streak, palette }: Props) {
  const [currentStreak, setCurrentStreak] = useState(streak);
  const [showWrapped, setShowWrapped] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const monthlyGoal = 30;
  const progress = Math.min((currentStreak / monthlyGoal) * 100, 100);

  // Clickable Streak Counter with Confetti
  const incrementStreak = () => {
    const newStreak = currentStreak + 1;
    setCurrentStreak(newStreak);

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (newStreak % 5 === 0) {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0.1 }
      });
    }
  };

  // Export Wrapped as Image (Canvas)
  const exportWrapped = async () => {
    setIsExporting(true);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d")!;

      // Background
      ctx.fillStyle = "#0D0D0B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradient overlay
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#1A1814");
      grad.addColorStop(1, "#0D0D0B");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Title
      ctx.fillStyle = "#C8A26A";
      ctx.font = "bold 90px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("CHAPTER", canvas.width / 2, 220);

      ctx.fillStyle = "#F5F2EB";
      ctx.font = "600 48px system-ui";
      ctx.fillText("2026 Wrapped", canvas.width / 2, 300);

      // Stats
      ctx.font = "700 120px system-ui";
      ctx.fillText(currentStreak.toString(), canvas.width / 2, 650);
      ctx.font = "500 36px system-ui";
      ctx.fillText("DAY STREAK", canvas.width / 2, 720);

      ctx.font = "600 60px system-ui";
      ctx.fillText(`${booksRead} Books`, canvas.width / 2, 950);
      ctx.fillText(`${pagesRead} Pages`, canvas.width / 2, 1050);
      ctx.fillText(`${readingTime} Read`, canvas.width / 2, 1150);

      // Palette
      ctx.font = "500 32px system-ui";
      ctx.fillText("Your Reading Palette", canvas.width / 2, 1350);

      const boxSize = 120;
      palette.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.fillRect(200 + i * 160, 1400, boxSize, boxSize);
      });

      // Download
      const link = document.createElement("a");
      link.download = "chapter-wrapped-2026.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to generate Wrapped image");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Streak Card - Clickable */}
      <motion.div
        className="rounded-3xl p-8 cursor-pointer relative overflow-hidden"
        style={{ background: colors.bg.elevated }}
        whileHover={{ scale: 1.02 }}
        onClick={incrementStreak}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🔥</span>
              <div>
                <p className="text-sm uppercase tracking-widest" style={{ color: colors.text.muted }}>Current Streak</p>
                <p className="text-7xl font-bold mt-1" style={{ color: colors.accent.DEFAULT }}>{currentStreak}</p>
              </div>
            </div>
            <p className="text-xl mt-2" style={{ color: colors.text.secondary }}>days</p>
          </div>

          <div className="text-right">
            <div className="text-3xl mb-1">→ {monthlyGoal}</div>
            <div className="text-xs" style={{ color: colors.text.muted }}>monthly goal</div>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="relative w-28 h-28 mx-auto mt-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#2A2A27" strokeWidth="12" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke={colors.accent.DEFAULT}
              strokeWidth="12"
              strokeDasharray={Math.PI * 104}
              strokeDashoffset={Math.PI * 104 * (1 - progress / 100)}
              initial={{ strokeDashoffset: Math.PI * 104 }}
              animate={{ strokeDashoffset: Math.PI * 104 * (1 - progress / 100) }}
              transition={{ duration: 1 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold" style={{ color: colors.accent.DEFAULT }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Reading Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl p-6" style={{ background: colors.bg.elevated }}>
          <p className="text-sm" style={{ color: colors.text.muted }}>BOOKS READ</p>
          <p className="text-5xl font-bold mt-2" style={{ color: colors.text.primary }}>{booksRead}</p>
        </div>

        <div className="rounded-3xl p-6" style={{ background: colors.bg.elevated }}>
          <p className="text-sm" style={{ color: colors.text.muted }}>PAGES</p>
          <p className="text-5xl font-bold mt-2" style={{ color: colors.text.primary }}>{pagesRead.toLocaleString()}</p>
        </div>

        <div className="col-span-2 rounded-3xl p-6" style={{ background: colors.bg.elevated }}>
          <p className="text-sm" style={{ color: colors.text.muted }}>TIME SPENT READING</p>
          <p className="text-5xl font-bold mt-2" style={{ color: colors.text.primary }}>{readingTime}</p>
        </div>
      </div>

      {/* Your Palette */}
      <div className="rounded-3xl p-8" style={{ background: colors.bg.elevated }}>
        <p className="text-sm uppercase tracking-widest mb-6" style={{ color: colors.text.muted }}>Your 2026 Palette</p>
        <div className="flex gap-4">
          {palette.map((color, i) => (
            <motion.div
              key={i}
              className="w-12 h-20 rounded-2xl flex-1"
              style={{ background: color }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          ))}
        </div>
      </div>

      {/* Share Wrapped Button */}
      <motion.button
        onClick={() => {
          exportWrapped();
          setShowWrapped(true);
          setTimeout(() => setShowWrapped(false), 2000);
        }}
        disabled={isExporting}
        className="w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3"
        style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isExporting ? "Generating..." : "✨ Share Your Wrapped"}
      </motion.button>

      {/* Success Toast */}
      <AnimatePresence>
        {showWrapped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-50"
          >
            🎉 Wrapped image downloaded!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
