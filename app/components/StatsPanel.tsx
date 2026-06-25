"use client";

import { motion } from "motion/react";
import { colors, typography } from "../design-system";

interface Props {
  booksRead: number;
  pagesRead: number;
  readingTime: string;
  streak: number;
  palette: string[];
}

export default function StatsPanel({ booksRead, pagesRead, readingTime, palette }: Props) {
  const stats = [
    { value: String(booksRead), label: "Books", color: colors.accent.DEFAULT },
    { value: pagesRead.toLocaleString(), label: "Pages", color: colors.success },
    { value: readingTime, label: "Hours", color: colors.mood.classic },
  ];

  return (
    <div className="space-y-6">
      <motion.div className="rounded-3xl p-6" style={{ background: colors.bg.surface, border: `1px solid ${colors.border.subtle}` }}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 25 }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.text.primary }}>This Month</h3>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} className="flex items-center gap-4" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke={colors.bg.elevated} strokeWidth="3" />
                  <circle cx="20" cy="20" r="16" fill="none" stroke={stat.color} strokeWidth="3" strokeDasharray={`${(index + 1) * 60} ${100 - (index + 1) * 60}`} strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ color: colors.text.primary, fontFamily: typography.fontFamily.mono }}>{stat.value}</p>
                <p className="text-xs" style={{ color: colors.text.muted }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="rounded-3xl p-6" style={{ background: colors.bg.surface, border: `1px solid ${colors.border.subtle}` }}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 25 }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.text.primary }}>Your Palette</h3>
        <div className="flex gap-2 flex-wrap">
          {palette.map((color, i) => (
            <motion.div key={i} className="w-10 h-10 rounded-full" style={{ background: color }}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 400, damping: 20 }} />
          ))}
        </div>
      </motion.div>

      <motion.button className="w-full py-4 rounded-3xl text-base font-semibold flex items-center justify-center gap-2"
        style={{ background: colors.accent.DEFAULT, color: colors.text.inverse }}
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        Share Wrapped
      </motion.button>

      <motion.div className="rounded-3xl p-6" style={{ background: colors.bg.surface, border: `1px solid ${colors.border.subtle}` }}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 25 }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.text.primary }}>Recent Activity</h3>
        <div className="space-y-3">
          {[
            { text: "Finished The Midnight Library", time: "2d ago" },
            { text: "Sarah started Project Hail Mary", time: "3h ago" },
            { text: "Saved quote from Circe", time: "5h ago" },
          ].map((activity, i) => (
            <motion.div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: colors.bg.elevated }}
              initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}>
              <span className="text-sm" style={{ color: colors.text.secondary }}>{activity.text}</span>
              <span className="text-xs" style={{ color: colors.text.muted }}>{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
