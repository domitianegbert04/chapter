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

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [activeSidebar, setActiveSidebar] = useState("home");

  const [currentlyReading, setCurrentlyReading] = useState<any>(null);
  const [moodBooks, setMoodBooks] = useState<Record<string, Book[]>>({});
  const [loadingBooks, setLoadingBooks] = useState(true);

  const palette = ["#C8A26A", "#7FA88A", "#8B8BC8", "#C8A88B", "#C88B8B", "#8BA8C8"];

  // Fetch real books from Open Library
  const fetchBooks = async () => {
    setLoadingBooks(true);
    try {
      // Example searches for different moods
      const queries = {
        "Cozy Reads": "subject:fiction+OR+fantasy",
        "Dark & Tense": "subject:thriller+OR+mystery",
        "Hopeful": "subject:inspirational+OR+philosophy",
      };

      const results: Record<string, Book[]> = {};

      for (const [mood, query] of Object.entries(queries)) {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6&fields=title,author_name,cover_i,key`
        );
        const data = await res.json();

        results[mood] = data.docs?.slice(0, 4).map((book: any, index: number) => ({
          id: book.key,
          cover: book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
            : "https://via.placeholder.com/300x450?text=No+Cover",
          title: book.title,
          author: book.author_name?.[0] || "Unknown Author",
          rating: (4.0 + Math.random() * 0.8).toFixed(1) as any,
          moods: [mood.split(" ")[0]],
          currentPage: Math.floor(Math.random() * 200),
          totalPages: 250 + Math.floor(Math.random() * 300),
          friendsReading: Math.floor(Math.random() * 6) + 1,
        })) || [];
      }

      setMoodBooks(results);

      // Set a default "currently reading"
      if (results["Cozy Reads"]?.length) {
        setCurrentlyReading(results["Cozy Reads"][0]);
      }
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoadingBooks(false);
    }
  };

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push("/login");
      else setUser(user);
      setChecking(false);
    });

    fetchBooks();
  }, [router]);

  if (checking || loadingBooks) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0D0B]">
        <div className="w-8 h-8 border-4 border-[#C8A26A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "Reader";

  return (
    <div className="min-h-screen bg-[#0D0D0B]">
      <Sidebar activeItem={activeSidebar} onItemChange={setActiveSidebar} streak={12} />
      <FloatingNav activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="lg:ml-64">
        <div className="sticky top-0 z-30 px-4 lg:px-8 py-4 bg-[#0D0D0B] border-b border-white/5">
          {/* Header same as before */}
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="lg:hidden flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: colors.accent.DEFAULT }}>C</div>
              <span className="font-bold text-xl">Chapter</span>
            </div>
            {/* Search bar etc. */}
          </div>
        </div>

        <div className="px-4 lg:px-8 pb-24 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mt-8 mb-2" style={{ color: colors.text.primary }}>
            Good morning, {username}
          </h1>

          {currentlyReading && (
            <div className="mb-12">
              <ContinueReadingHero 
                {...currentlyReading} 
                streak={12}
                onProgressUpdate={(page) => console.log("Updated to page", page)}
              />
            </div>
          )}

          <div className="space-y-16">
            {Object.entries(moodBooks).map(([mood, books]) => (
              <MoodCarousel key={mood} mood={mood} books={books} />
            ))}
          </div>

          <div className="hidden xl:block fixed right-8 top-24 w-80">
            <StatsPanel 
              booksRead={5} 
              pagesRead={1247} 
              readingTime="18h" 
              streak={12} 
              palette={palette} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
