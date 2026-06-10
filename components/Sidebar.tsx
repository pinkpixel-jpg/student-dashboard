"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="h-screen w-64 border-r border-white/10 bg-zinc-950 p-4">
      <nav>
        <h2 className="mb-8 text-xl font-bold text-white">
          LearnHub
        </h2>

        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <button
                  onClick={() => setActive(item.name)}
                  className="relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300"
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}

                  <Icon className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}