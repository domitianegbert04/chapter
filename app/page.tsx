"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "./lib/supabase-client";
import { useState } from "react";
import { motion } from "motion/react";
import Sidebar from "./components/Sidebar";
import FloatingNav from "./components/FloatingNav";
import ContinueReadingHero from "./components/ContinueReadingHero";
import MoodCarousel from "./components/MoodCarousel";
import StatsPanel from "./components/StatsPanel";
import { colors } from "./design-system";

const currentlyReading = {
  cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  title: "The Midnight Library",
  author: "Matt Haig",
  currentPage: 234,
  totalPages: 360,
  moods: ["Cozy", "Hopeful", "Philosophical"],
  streak: 12,
};

const moodBooks = {
  "Cozy Reads": [
    { id: "1", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop", title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", rating: 4.5, moods: ["Cozy", "Historical"], currentPage: 0, totalPages: 448, friendsReading: 3 },
    { id: "2", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop", title: "Eleanor Oliphant is Completely Fine", author: "Gail Honeyman", rating: 4.3, moods: ["Cozy", "Hopeful"], currentPage: 120, totalPages: 336, friendsReading: 1 },
    { id: "3", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=450&fit=crop", title: "A Man Called Ove", author: "Fredrik Backman", rating: 4.6, moods: ["Cozy", "Hopeful"], currentPage: 0, totalPages: 337, friendsReading: 2 },
    { id: "4", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop", title: "The House in the Cerulean Sea", author: "TJ Klune", rating: 4.7, moods: ["Cozy", "Fantasy"], currentPage: 0, totalPages: 394, friendsReading: 5 },
  ],
  "Dark & Tense": [
    { id: "5", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop", title: "Project Hail Mary", author: "Andy Weir", rating: 4.8, moods: ["Tense", "Sci-Fi"], currentPage: 0, totalPages: 496, friendsReading: 4 },
    { id: "6", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop", title: "Gone Girl", author: "Gillian Flynn", rating: 4.1, moods: ["Dark", "Thriller"], currentPage: 0, totalPages: 432, friendsReading: 2 },
    { id: "7", cover: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&h=450&fit=crop", title: "The Silent Patient", author: "Alex Michaelides", rating: 4.2, moods: ["Dark", "Thriller"], currentPage: 0, totalPages: 336, friendsReading: 1 },
  ],
  "Hopeful": [
    { id: "8", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop", title: "Klara and the Sun", author: "Kazuo Ishiguro", rating: 4.0, moods: ["Hopeful", "Sci-Fi"], currentPage: 0, totalPages: 320, friendsReading: 2 },
    { id: "9", cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=450&fit=crop", title: "The Alchemist", author: "Paulo Coelho", rating: 4.4, moods: ["Hopeful", "Philosophical"], currentPage: 0, totalPages: 208, friendsReading: 6 },
    { id: "10", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop", title: "Tuesdays with Morrie", author: "Mitch Albom", rating: 4.5, moods: ["Hopeful", "Philosophical"], currentPage: 0, totalPages: 192, friendsReading: 3 },
  ],
};

const palette = ["#C8A26A", "#7FA88A", "#8B8BC8", "#C8A88B", "#C88B8B", "#8BA8C8"];

export default function Home() {

  // ===== AUTH GUARD =====
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
      setChecking(false);
    });
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0B" }}>
        <div className="w-8 h-8 border-2 border-[#C8A26A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;
  // ===== END AUTH GUARD =====

  const [activeTab, setActiveTab] = useState("home");  

  return (
    <div className="min-h-screen bg-[#0D0D0B]">
      <Sidebar activeItem={activeSidebar} onItemChange={setActiveSidebar} streak={12} />
      <FloatingNav activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="lg:ml-64">
        <div className="sticky top-0 z-30 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: colors.accent.DEFAULT }}>
                <span className="text-sm font-bold" style={{ color: colors.text.inverse }}>C</span>
              </div>
              <span className="font-bold" style={{ color: colors.text.primary }}>Chapter</span>
            </div>
            <motion.div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl flex-1 max-w-md mx-4"
              style={{ background: colors.bg.surface, border: `1px solid ${colors.border.light}` }}
              whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.text.muted} strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-sm" style={{ color: colors.text.muted }}>Search books, authors, moods...</span>
            </motion.div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer"
                style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>A</div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-8 pb-32 max-w-7xl mx-auto">
          <div className="flex gap-8">
            <div className="flex-1 min-w-0">
              <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
               const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "Reader";
                <p className="text-sm mt-1" style={{ color: colors.text.secondary }}>You are 65% through your current read</p>
              </motion.div>
              <div className="mb-10">
                <ContinueReadingHero {...currentlyReading} />
              </div>
              <div className="space-y-2">
                {Object.entries(moodBooks).map(([mood, books]) => (
                  <MoodCarousel key={mood} mood={mood} books={books} />
                ))}
              </div>
            </div>
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <StatsPanel booksRead={3} pagesRead={1247} readingTime="18h" streak={12} palette={palette} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
