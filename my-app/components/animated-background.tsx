"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:via-purple-900 dark:to-gray-900"
        animate={{
          background: theme === "dark" 
            ? [
                "linear-gradient(to bottom right, #1a202c, #2d3748)",
                "linear-gradient(to bottom right, #2d3748, #4a5568)",
                "linear-gradient(to bottom right, #4a5568, #1a202c)",
              ]
            : [
                "linear-gradient(to bottom right, #E6F3FF, #F0E6FF)",
                "linear-gradient(to bottom right, #E6FFFA, #FFE6E6)",
                "linear-gradient(to bottom right, #FFF5E6, #E6F3FF)",
              ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white dark:bg-gray-300 opacity-20"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

