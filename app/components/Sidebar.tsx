"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { colors, typography } from "../design-system";
import { createClient } from "../lib/supabase-client";

const sidebarItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "discover", label: "Discover", icon: "🔍" },
  { id: "library", label: "Library", icon: "📚" },
  { id: "community", label: "Community", icon: "👥" },
  { id: "quotes", label: "Quotes", icon: "💭" },
  { id: "statistics", label: "Statistics", icon: "📊" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

interface Props {
  activeItem?: string;
  onItemChange?: (item: string) => void;
  streak?: number;
}

export default function Sidebar({ activeItem = "home", onItemChange, streak = 12 }: Props) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleSignOut = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Sign out error:", error);
      alert("Failed to sign out. Please try again.");
    }
  };

  // Mock user (in real app, pass from parent or use context)
  const username = "Alex";
  const userEmail = "alex@reads.com";

  return (
    <div className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-40 border-r" 
         style={{ background: colors.bg.surface, borderColor: colors.border.subtle }}>
      
      {/* Logo */}
      <div className="px-6 py-6 flex items-center gap-3 border-b" style={{ borderColor: colors.border.subtle }}>
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-2xl font-bold" 
             style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>
          C
        </div>
        <span className="text-2xl font-bold tracking-tight" style={{ color: colors.text.primary }}>Chapter</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className="mb-4 px-3">
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: colors.text.muted }}>MENU</span>
        </div>

        {sidebarItems.map((item) => {
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onItemChange?.(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 text-left relative overflow-hidden"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0"
                  style={{ background: colors.accent.muted }}
                  layoutId="activeSidebar"
                />
              )}

              <span className="text-xl relative z-10">{item.icon}</span>
              <span 
                className="font-medium relative z-10"
                style={{ 
                  color: isActive ? colors.text.primary : isHovered ? colors.text.primary : colors.text.secondary 
                }}
              >
                {item.label}
              </span>

              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C8A26A] relative z-10" />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Streak Card */}
      <div className="mx-4 mb-6 p-5 rounded-3xl" style={{ background: colors.bg.elevated }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🔥</span>
          <span className="text-sm font-medium" style={{ color: colors.text.muted }}>STREAK</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-5xl font-bold" style={{ color: colors.accent.DEFAULT }}>{streak}</span>
          <span className="ml-2 text-xl" style={{ color: colors.text.secondary }}>days</span>
        </div>
        <div className="mt-4 h-1.5 bg-black/30 rounded-full overflow-hidden">
          <div className="h-full bg-[#C8A26A] rounded-full" style={{ width: `${Math.min(streak / 30 * 100, 100)}%` }} />
        </div>
      </div>

      {/* Profile & Logout */}
      <div className="p-4 border-t" style={{ borderColor: colors.border.subtle }}>
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-bold" 
               style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>
            {username[0]}
          </div>
          <div>
            <p className="font-medium" style={{ color: colors.text.primary }}>{username}</p>
            <p className="text-xs" style={{ color: colors.text.muted }}>{userEmail}</p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full py-3 text-sm font-medium rounded-2xl hover:bg-red-500/10 text-red-400 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
