"use client";

import { motion, AnimatePresence } from "motion/react";
import { colors, radii, shadows } from "../design-system";

const navItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "discover", label: "Discover", icon: "🔍" },
  { id: "library", label: "Library", icon: "📚" },
  { id: "stats", label: "Stats", icon: "📊" },
];

interface Props {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function FloatingNav({ activeTab = "home", onTabChange }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden px-4 w-full max-w-md">
      <motion.div
        className="flex items-center justify-around px-2 py-2"
        style={{
          background: colors.bg.surface,
          border: `1px solid ${colors.border.light}`,
          borderRadius: radii["2xl"],
          boxShadow: shadows.elevated,
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className="flex flex-col items-center justify-center py-2 px-4 relative min-w-[60px]"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: colors.accent.muted }}
                    layoutId="mobileNavActive"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <span className="text-2xl mb-1 relative z-10">{item.icon}</span>
              <span 
                className="text-xs font-medium relative z-10"
                style={{ color: isActive ? colors.accent.DEFAULT : colors.text.muted }}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
