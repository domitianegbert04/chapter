"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "./lib/supabase-client";
import { motion } from "motion/react";

import Sidebar from "./components/Sidebar";
import FloatingNav from "./components/FloatingNav";
import ContinueReadingHero from "./components/ContinueReadingHero";
import MoodCarousel from "./components/MoodCarousel";
import StatsPanel from "./components/StatsPanel";
import { colors } from "./design-system";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"home" | "discover" | "library" | "stats">("home");
  const [activeSidebar, setActiveSidebar] = useState("home");

  // Mock data (will be replaced with real API later)
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
      { id: "1", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop", title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", rating: 4.5, moods: ["Cozy", "Historical"], currentPage: 45, totalPages: 448, friendsReading: 3 },
      { id: "2", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop", title: "Eleanor Oliphant is Completely Fine", author: "Gail Honeyman", rating: 4.3, moods: ["Cozy", "Hopeful"], currentPage: 120, totalPages: 336, friendsReading: 1 },
      { id: "3", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=450&fit=crop", title: "A Man Called Ove", author: "Fredrik Backman", rating: 4.6, moods: ["Cozy", "Hopeful"], currentPage: 210, totalPages: 337, friendsReading: 2 },
      { id: "4", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop", title: "The House in the Cerulean Sea", author: "TJ Klune", rating: 4.7, moods: ["Cozy", "Fantasy"], currentPage: 0, totalPages: 394, friendsReading: 5 },
    ],
    "Dark & Tense": [
      { id: "5", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop", title: "Project Hail Mary", author: "Andy Weir", rating: 4.8, moods: ["Tense", "Sci-Fi"], currentPage: 0, totalPages: 496, friendsReading: 4 },
      { id: "6", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop", title: "Gone Girl", author: "Gillian Flynn", rating: 4.1, moods: ["Dark", "Thriller"], currentPage: 0, totalPages: 432, friendsReading: 2 },
    ],
    "Hopeful": [
      { id: "8", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop", title: "Klara and the Sun", author: "Kazuo Ishiguro", rating: 4.0, moods: ["Hopeful", "Sci-Fi"], currentPage: 0, totalPages: 320, friendsReading: 2 },
      { id: "9", cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=450&fit=crop", title: "The Alchemist", author: "Paulo Coelho", rating: 4.4, moods: ["Hopeful", "Philosophical"], currentPage: 0, totalPages: 208, friendsReading: 6 },
    ],
  };

  const palette = ["#C8A26A", "#7FA88A", "#8B8BC8", "#C8A88B", "#C88B8B", "#8BA8C8"];

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

    // Optional: Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") router.push("/login");
    });

    return () => listener.subscription.unsubscribe();
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: colors.bg.primary }}>
        <div className="w-8 h-8 border-4 border-[#C8A26A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "Reader";

  return (
    <div className="min-h-screen bg-[#0D0D0B] text-white">
      <Sidebar 
        activeItem={activeSidebar} 
        onItemChange={setActiveSidebar} 
        streak={12} 
      />
      
      <FloatingNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <div className="lg:ml-64">
        {/* Top Header */}
        <div className="sticky top-0 z-30 px-4 lg:px-8 py-4 border-b border-white/5" style={{ background: colors.bg.primary }}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="lg:hidden flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>
                C
              </div>
              <span className="font-bold text-xl">Chapter</span>
            </div>

            {/* Search Bar */}
            <motion.div 
              className="hidden md:flex items-center gap-3 px-5 py-3 rounded-3xl flex-1 max-w-md mx-4"
              style={{ 
                background: colors.bg.surface, 
                border: `1px solid ${colors.border.light}` 
              }}
              whileHover={{ scale: 1.01 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.text.muted} strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input 
                type="text" 
                placeholder="Search books, authors, moods..." 
                className="bg-transparent flex-1 outline-none text-sm"
              />
            </motion.div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-sm font-bold cursor-pointer" 
                   style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>
                {username[0]?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 lg:px-8 pb-24 max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Feed Area */}
            <div className="flex-1 min-w-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h1 className="text-4xl font-bold tracking-tight" style={{ color: colors.text.primary }}>
                  Good morning, {username}
                </h1>
                <p className="text-lg mt-1" style={{ color: colors.text.secondary }}>
                  You are 65% through your current read
                </p>
              </motion.div>

              {/* Continue Reading */}
              <div className="mb-12">
                <ContinueReadingHero 
                  {...currentlyReading} 
                  onProgressUpdate={(newPage) => console.log("Progress updated to", newPage)}
                />
              </div>

              {/* Mood Sections */}
              <div className="space-y-12">
                {Object.entries(moodBooks).map(([moodCategory, books]) => (
                  <MoodCarousel 
                    key={moodCategory} 
                    mood={moodCategory} 
                    books={books} 
                  />
                ))}
              </div>
            </div>

            {/* Sidebar Stats (Desktop) */}
            <div className="hidden xl:block w-80 flex-shrink-0 pt-4">
              <div className="sticky top-24">
                <StatsPanel 
                  booksRead={3} 
                  pagesRead={1247} 
                  readingTime="18h" 
                  streak={12} 
                  palette={palette} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
