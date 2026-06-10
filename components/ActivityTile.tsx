"use client";

import { motion } from "framer-motion";

const activity = [35, 60, 40, 80, 55, 90, 70];

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-6"
    >
      <h2 className="mb-6 text-xl font-semibold text-white">
        Activity
      </h2>

      <div className="flex h-40 items-end gap-3">
        {activity.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="flex-1 rounded-t-lg bg-cyan-500"
          />
        ))}
      </div>
    </motion.article>
  );
}