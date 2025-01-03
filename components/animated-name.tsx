"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function AnimatedName() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-center"
      style={{ x, opacity, scale }}
      initial={{ color: "#000000" }}
      animate={{ color: ["#000000", "#3B82F6", "#10B981", "#000000"] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    >
      Hi, I'm Sneha
    </motion.h1>
  )
}

