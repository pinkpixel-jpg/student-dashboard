"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8"
    >
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, Rashmi
        </h1>

        <p className="text-gray-400">
          Keep your learning streak alive.
        </p>

        <div className="inline-flex rounded-full bg-emerald-500/20 px-4 py-2">
          <span className="text-sm font-medium text-emerald-400">
            22 Day Streak
            <div className="mt-6 flex gap-4">
  <div className="rounded-xl bg-cyan-500/10 px-4 py-2">
    <p className="text-xs text-gray-400">Courses</p>
    <p className="text-xl font-bold text-cyan-400">4</p>
  </div>

  <div className="rounded-xl bg-emerald-500/10 px-4 py-2">
    <p className="text-xs text-gray-400">Completed</p>
    <p className="text-xl font-bold text-emerald-400">1</p>
  </div>
</div>
          </span>
        </div>
      </div>
    </motion.section>
  );
}