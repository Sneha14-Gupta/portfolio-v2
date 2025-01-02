"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  index: number
  children: React.ReactNode
}

export function AnimatedCard({ index, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  )
}

