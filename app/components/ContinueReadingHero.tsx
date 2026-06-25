"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { colors, radii, shadows, typography } from "../design-system";

interface Props {
  cover: string;
  title: string;
  author: string;
  currentPage: number;
  totalPages: number;
  moods: string[];
  streak: number;
  onProgressUpdate?: (page: number) => void;
}

export default function ContinueReadingHero({
  cover,
  title,
  author,
  currentPage,
  totalPages,
  moods,
  streak,
  onProgressUpdate,
}: Props) {
  const [localPage, setLocalPage] = useState(currentPage);
  const [showCelebration, setShowCelebration] = useState(false);
  const progress = (localPage / totalPages) * 100;
  const pagesLeft = totalPages - localPage;
  const estMin = Math.round(pagesLeft * 1.5);
  const hours = Math.floor(estMin / 60);
  const minutes = estMin % 60;

  const moodColors: Record<string, string> = {
    cozy: colors.mood.cozy,
    dark: colors.mood.dark,
    hopeful: colors.mood.hopeful,
    philosophical: colors.mood.philosophical,
    fantasy: colors.mood.fantasy,
    historical: colors.mood.historical,
    romance: colors.mood.romance,
    classic: colors.mood.classic,
    thriller: colors.mood.thriller,
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const newPage = Math.round((percentage / 100) * totalPages);
    setLocalPage(newPage);
    onProgressUpdate?.(newPage);
    if (newPage === totalPages) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="relative overflow-hidden"
        style={{
          borderRadius: radii.xl,
          background: colors.bg.surface,
          boxShadow: shadows.card,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Cover */}
          <div className="relative w-full lg:w-2/5 aspect-[2/3] lg:aspect-auto overflow-hidden">
            <motion.img
              src={cover}
              alt={title}
              className="w-full h-full object-cover"
              style={{ borderRadius: `${radii.xl} 0 0 ${radii.xl}` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, transparent 50%, ${colors.bg.surface} 100%)`,
              }}
            />
            <div
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: colors.bg.elevated,
                border: `1px solid ${colors.border.light}`,
              }}
            >
              <span className="text-lg">🔥</span>
              <span
                className="text-sm font-semibold"
                style={{
                  color: colors.accent.DEFAULT,
                  fontFamily: typography.fontFamily.mono,
                }}
              >
                {streak}
              </span>
              <span className="text-xs" style={{ color: colors.text.muted }}>
                day streak
              </span>
            </div>
          </div>
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
            <span
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: colors.accent.DEFAULT }}
            >
              Continue Reading
            </span>
            <h1
              className="text-2xl lg:text-3xl font-bold leading-tight mb-2"
              style={{ color: colors.text.primary }}
            >
              {title}
            </h1>
            <p className="text-base mb-4" style={{ color: colors.text.secondary }}>
              {author}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {moods.map((mood) => (
                <span
                  key={mood}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: colors.bg.elevated,
                    color: moodColors[mood.toLowerCase()] || colors.accent.DEFAULT,
                    border: `1px solid ${moodColors[mood.toLowerCase()] || colors.accent.DEFAULT}40`,
                  }}
                >
                  {mood}
                </span>
              ))}
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm" style={{ color: colors.text.secondary }}>
                  Your Progress
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: colors.accent.DEFAULT,
                    fontFamily: typography.fontFamily.mono,
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
              <div
                className="relative h-3 rounded-full cursor-pointer"
                style={{ background: colors.bg.elevated }}
                onClick={handleSliderClick}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: colors.accent.DEFAULT }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2"
                  style={{
                    left: `calc(${progress}% - 12px)`,
                    background: colors.accent.DEFAULT,
                    borderColor: colors.bg.surface,
                    boxShadow: `0 0 12px ${colors.accent.DEFAULT}40`,
                  }}
                />
                {[25, 50, 75].map((m) => (
                  <div
                    key={m}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${m}%`,
                      background: progress >= m ? colors.accent.DEFAULT : colors.bg.elevated,
                      transform: `translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span
                  className="text-xs"
                  style={{
                    color: colors.text.muted,
                    fontFamily: typography.fontFamily.mono,
                  }}
                >
                  Page {localPage} / {totalPages}
                </span>
                <span className="text-xs" style={{ color: colors.text.muted }}>
                  {pagesLeft} pages left · {hours > 0 ? `${hours}h ` : ""}
                  {minutes}m est.
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                className="flex-1 px-6 py-3 rounded-full text-sm font-semibold"
                style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Update Progress
              </motion.button>
              <motion.button
                className="px-6 py-3 rounded-full text-sm font-semibold"
                style={{ background: colors.bg.elevated, color: colors.text.primary }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Save Quote
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: colors.text.primary }}
              >
                Book Completed!
              </h2>
              <p style={{ color: colors.text.secondary }}>
                Your streak is now {streak + 1} days
              </p>
            </motion.div>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: [colors.accent.DEFAULT, colors.success, colors.danger, colors.mood.hopeful][i % 4],
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400 - 100,
                  opacity: 0,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
