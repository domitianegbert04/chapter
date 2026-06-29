"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function BookSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (q: string) => {
    if (!q) return;
    setLoading(true);
    // Open Library API (free, no key)
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=10`);
    const data = await res.json();
    setResults(data.docs || []);
    setLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => searchBooks(query), 300);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search books, authors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl bg-surface text-white placeholder:text-muted"
      />
      {/* Results dropdown with BookCard integration */}
    </div>
  );
}
