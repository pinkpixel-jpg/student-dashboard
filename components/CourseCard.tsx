"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  const LucideIcon =
    (Icons[
      course.icon_name as keyof typeof Icons
    ] as React.ElementType) || Icons.BookOpen;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <LucideIcon className="h-8 w-8 text-cyan-400" />

        <span className="text-sm text-gray-400">
          {course.progress}%
        </span>
      </div>

      <h3 className="mb-4 text-lg font-semibold text-white">
        {course.title}
      </h3>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="h-full rounded-full bg-cyan-500"
        />
      </div>
    </motion.article>
  );
}