"use client";

import { motion, AnimatePresence } from "motion/react";
import { colors, radii, shadows } from "../design-system";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "search",
    label: "Search",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "library",
    label: "Library",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "community",
    label: "Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

interface Props {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function FloatingNav({ activeTab = "home", onTabChange }: Props) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 lg:hidden">
      <motion.div
        className="flex items-center gap-1 px-2 py-2"
        style={{
          background: colors.bg.surface,
          border: `1px solid ${colors.border.light}`,
          borderRadius: radii["2xl"],
          boxShadow: shadows.elevated,
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              className="relative flex items-center gap-2 px-3 py-2.5 rounded-full outline-none"
              onClick={() => onTabChange?.(item.id)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: colors.accent.DEFAULT }}
                    layoutId="activeNavBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <motion.span
                className="relative z-10"
                animate={{ color: isActive ? colors.text.inverse : colors.text.muted }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.span>
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="relative z-10 text-sm font-medium"
                    style={{ color: colors.text.inverse }}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
