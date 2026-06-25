"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import BookCard from "./BookCard";
import { colors } from "../design-system";

interface Book {
  id: string;
  cover: string;
  title: string;
  author: string;
  rating: number;
  moods: string[];
  currentPage?: number;
  totalPages?: number;
  friendsReading?: number;
}

interface Props {
  mood: string;
  books: Book[];
}

export default function MoodCarousel({ mood, books }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);

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

  const moodColor = moodColors[mood.toLowerCase()] || colors.accent.DEFAULT;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6 px-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 rounded-full" style={{ background: moodColor }} />
          <h2 className="text-xl font-bold" style={{ color: colors.text.primary }}>
            {mood}
          </h2>
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{
              background: colors.bg.elevated,
              color: moodColor,
              border: `1px solid ${moodColor}40`,
            }}
          >
            {books.length} books
          </span>
        </div>
        <div className="hidden md:block w-32 h-1 rounded-full overflow-hidden" style={{ background: colors.bg.elevated }}>
          <motion.div className="h-full rounded-full" style={{ background: moodColor, scaleX, transformOrigin: "left" }} />
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <BookCard {...book} size="md" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
