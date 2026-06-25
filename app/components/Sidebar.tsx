"use client";


import { useState } from "react";
import { motion } from "motion/react";
import { colors, typography } from "../design-system";

const sidebarItems = [
  { id: "home", label: "Home", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { id: "discover", label: "Discover", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> },
  { id: "library", label: "Library", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
  { id: "community", label: "Community", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { id: "challenges", label: "Challenges", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
  { id: "quotes", label: "Quotes", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg> },
  { id: "statistics", label: "Statistics", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
  { id: "settings", label: "Settings", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
];

interface Props {
  activeItem?: string;
  onItemChange?: (item: string) => void;
  streak?: number;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;  // <-- ADD THIS
}

const handleSignOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  window.location.href = "/login";
};

const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "Reader";
const avatarInitial = username.charAt(0).toUpperCase();

// In the profile section at bottom:
<div className="flex items-center gap-3 mb-4">
  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "#C8A26A", color: "#0D0D0B" }}>
    {avatarInitial}
  </div>
  <div className="flex-1 min-w-0">
    <p className="text-sm font-medium truncate" style={{ color: "#F5F2EB" }}>{username}</p>
    <p className="text-xs truncate" style={{ color: "#6D675E" }}>{user?.email || ""}</p>
  </div>
</div>



export default function Sidebar({ activeItem = "home", onItemChange, streak = 0 }: Props) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-40" style={{ background: colors.bg.surface, borderRight: `1px solid ${colors.border.subtle}` }}>
      <div className="px-6 py-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: colors.accent.DEFAULT }}>
          <span className="text-lg font-bold" style={{ color: colors.text.inverse }}>C</span>
        </div>
        <span className="text-lg font-bold" style={{ color: colors.text.primary }}>Chapter</span>
      </div>
      <nav className="flex-1 px-3 py-2">
        <div className="mb-2 px-3">
          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: colors.text.muted }}>Your Space</span>
        </div>
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;
          return (
            <motion.button key={item.id} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 relative"
              onClick={() => onItemChange?.(item.id)} onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)} whileTap={{ scale: 0.98 }}>
              {isActive && <motion.div className="absolute inset-0 rounded-xl" style={{ background: colors.accent.muted }} layoutId="sidebarActive" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              <span className="relative z-10" style={{ color: isActive ? colors.accent.DEFAULT : isHovered ? colors.text.primary : colors.text.muted }}>{item.icon}</span>
              <span className="relative z-10 text-sm font-medium" style={{ color: isActive ? colors.text.primary : isHovered ? colors.text.primary : colors.text.secondary }}>{item.label}</span>
              {isActive && <motion.div className="absolute right-3 w-1.5 h-1.5 rounded-full" style={{ background: colors.accent.DEFAULT }} layoutId="sidebarIndicator" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            </motion.button>
          );
        })}
      </nav>
      <div className="px-3 pb-3">
        <div className="rounded-2xl p-4" style={{ background: colors.bg.elevated }}>
          <div className="flex items-center gap-2 mb-2"><span className="text-lg">🔥</span><span className="text-xs font-medium" style={{ color: colors.text.muted }}>Reading Streak</span></div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold" style={{ color: colors.accent.DEFAULT, fontFamily: typography.fontFamily.mono }}>{streak}</span>
            <span className="text-sm" style={{ color: colors.text.secondary }}>days</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: colors.bg.surface }}>
            <div className="h-full rounded-full" style={{ width: `${Math.min((streak / 30) * 100, 100)}%`, background: colors.accent.DEFAULT }} />
          </div>
          <p className="text-xs mt-2" style={{ color: colors.text.muted }}>{30 - streak} days to monthly goal</p>
        </div>
      </div>
      <div className="px-3 pb-4" style={{ borderTop: `1px solid ${colors.border.subtle}` }}>
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}>A</div>
          <div className="text-left"><p className="text-sm font-medium" style={{ color: colors.text.primary }}>Alex</p><p className="text-xs" style={{ color: colors.text.muted }}>@alexreads</p></div>
        </button>
      </div>
    </div>
  );
}
