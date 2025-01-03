"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 text-center container mx-auto px-4">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-sage"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sneha Gupta
      </motion.h1>
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl mb-6 text-lightpink"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Full Stack Developer
      </motion.h2>
      <motion.p 
        className="text-lg mb-8 text-sage"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Crafting efficient, scalable, and user-friendly web applications
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild className="bg-sage text-offwhite hover:bg-lightpink">
          <a href="#contact">Get in Touch</a>
        </Button>
      </motion.div>
    </section>
  )
}

