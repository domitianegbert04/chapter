"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { colors, radii, shadows, transitions } from "../design-system";

interface BookCardProps {
  cover: string;
  title: string;
  author: string;
  rating?: number;
  moods?: string[];
  currentPage?: number;
  totalPages?: number;
  friendsReading?: number;
  isFavorite?: boolean;
  onFavorite?: () => void;
  onBookmark?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function BookCard({
  cover,
  title,
  author,
  rating = 0,
  moods = [],
  currentPage = 0,
  totalPages = 0,
  friendsReading = 0,
  isFavorite = false,
  onFavorite,
  onBookmark,
  size = "md",
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const progress = totalPages > 0 ? (currentPage / totalPages) * 100 : 0;

  const sizeConfig = {
    sm: { width: 140, coverHeight: 180 },
    md: { width: 200, coverHeight: 260 },
    lg: { width: 280, coverHeight: 360 },
  };

  const { width, coverHeight } = sizeConfig[size];

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

  return (
    <motion.div
      className="relative cursor-pointer select-none flex-shrink-0"
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: radii.lg,
          background: colors.bg.surface,
          boxShadow: isHovered ? shadows.cardHover : shadows.card,
          transition: `box-shadow ${transitions.normal}`,
        }}
      >
        {/* Cover Area */}
        <div className="relative" style={{ height: coverHeight }}>
          <motion.img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
            style={{ borderRadius: `${radii.lg} ${radii.lg} 0 0` }}
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 40%, ${colors.bg.surface} 100%)`,
            }}
          />

          {/* Favorite Button */}
          <motion.button
            className="absolute top-3 right-3 p-2 rounded-full"
            style={{
              background: colors.bg.elevated,
              border: `1px solid ${colors.border.light}`,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onFavorite?.();
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isFavorite ? colors.danger : "none"}
              stroke={isFavorite ? colors.danger : colors.text.primary}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.button>

          {/* Bookmark Button */}
          <motion.button
            className="absolute top-3 left-3 p-2 rounded-full"
            style={{
              background: colors.bg.elevated,
              border: `1px solid ${colors.border.light}`,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.();
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.text.primary}
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </motion.button>

          {/* Progress Bar */}
          {currentPage > 0 && totalPages > 0 && (
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
              <div
                className="relative h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: colors.accent.DEFAULT }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span
                  className="text-xs"
                  style={{
                    color: colors.text.muted,
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {currentPage} / {totalPages}
                </span>
                <span
                  className="text-xs"
                  style={{
                    color: colors.accent.DEFAULT,
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Metadata Panel */}
        <div className="px-4 pb-4 pt-2" style={{ background: colors.bg.surface }}>
          <h3
            className="font-semibold leading-tight truncate"
            style={{
              fontSize: size === "lg" ? "1.125rem" : "0.9375rem",
              color: colors.text.primary,
            }}
          >
            {title}
          </h3>
          <p className="mt-1 truncate text-sm" style={{ color: colors.text.secondary }}>
            {author}
          </p>

          {rating > 0 && (
            <div className="flex items-center gap-1 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={star <= Math.floor(rating) ? colors.accent.DEFAULT : "none"}
                    stroke={colors.accent.DEFAULT}
                    strokeWidth="1.5"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span
                className="text-xs ml-1"
                style={{
                  color: colors.text.muted,
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {rating.toFixed(1)}
              </span>
            </div>
          )}

          {moods.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {moods.slice(0, 3).map((mood) => (
                <span
                  key={mood}
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
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
          )}

          {friendsReading > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex -space-x-1.5">
                {[...Array(Math.min(friendsReading, 3))].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      borderColor: colors.bg.surface,
                      background: `hsl(${30 + i * 40}, 60%, 55%)`,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: colors.text.muted }}>
                {friendsReading} friend{friendsReading > 1 ? "s" : ""} reading
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
