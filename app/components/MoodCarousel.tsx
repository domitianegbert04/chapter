"use client";

import { motion } from "motion/react";
import BookCard from "./BookCard";
import { colors } from "../design-system";

interface Book {
  id: string;
  cover: string;
  title: string;
  author: string;
  rating?: number;
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
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold" style={{ color: colors.text.primary }}>{mood}</h2>
        <span className="text-sm" style={{ color: colors.text.muted }}>{books.length} books</span>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="snap-start"
          >
            <BookCard {...book} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
