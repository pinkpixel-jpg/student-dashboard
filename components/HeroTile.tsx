"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-6"
    >
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, Alex 👋
        </h1>

        <p className="text-gray-400">
          Keep your learning streak alive.
        </p>

        <div className="inline-flex rounded-full bg-emerald-500/20 px-4 py-2">
          <span className="text-sm font-medium text-emerald-400">
            🔥 12 Day Streak
          </span>
        </div>
      </div>
    </motion.section>
  );
}