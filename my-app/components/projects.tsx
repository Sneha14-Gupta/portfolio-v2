"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  liveLink: string
  githubLink: string
  features: string[]
}

const projects: Project[] = [
  {
    title: "Noughts and Crosses",
    description: "A classic game of Tic-Tac-Toe with a modern twist.",
    image: "/images/noughts-and-crosses.jpg",
    techStack: ["React", "TypeScript", "CSS"],
    liveLink: "https://noughts-and-crosses.example.com",
    githubLink: "https://github.com/yourusername/noughts-and-crosses",
    features: [
      "Two-player gameplay",
      "AI opponent option",
      "Game history tracking",
      "Responsive design",
      "Customizable player names"
    ]
  },
  {
    title: "Rock Paper Scissors Lizard Spock",
    description: "An extended version of the classic game, as seen in 'The Big Bang Theory'.",
    image: "/images/rock-paper-scissors-lizard-spock.jpg",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://rpsls.example.com",
    githubLink: "https://github.com/yourusername/rock-paper-scissors-lizard-spock",
    features: [
      "Single-player vs Computer",
      "Animated hand gestures",
      "Score tracking",
      "Game rules explanation",
      "Sound effects"
    ]
  },
  {
    title: "Untitled UI",
    description: "A comprehensive UI kit and design system for rapid prototyping.",
    image: "/images/untitled-ui.jpg",
    techStack: ["React", "Styled Components", "Storybook"],
    liveLink: "https://untitled-ui.example.com",
    githubLink: "https://github.com/yourusername/untitled-ui",
    features: [
      "100+ reusable components",
      "Dark mode support",
      "Customizable theme",
      "Accessibility compliant",
      "Comprehensive documentation"
    ]
  },
  {
    title: "Password Generator",
    description: "A secure password generator with customizable options.",
    image: "/images/password-generator.jpg",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://password-gen.example.com",
    githubLink: "https://github.com/yourusername/password-generator",
    features: [
      "Adjustable password length",
      "Character type selection",
      "Password strength indicator",
      "Copy to clipboard functionality",
      "Responsive design"
    ]
  },
  {
    title: "Todomatic",
    description: "A feature-rich todo application with task management capabilities.",
    image: "/images/todo-app.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://todomatic.example.com",
    githubLink: "https://github.com/yourusername/todomatic",
    features: [
      "Task creation and deletion",
      "Task status tracking",
      "Priority setting",
      "Due date management",
      "Responsive design"
    ]
  },
  {
    title: "Pokedex",
    description: "A comprehensive Pokedex application showcasing detailed information about Pokemon.",
    image: "/images/pokedex-app.jpg",
    techStack: ["Next.js", "TypeScript", "PokeAPI"],
    liveLink: "https://pokedex.example.com",
    githubLink: "https://github.com/yourusername/pokedex",
    features: [
      "Pokemon search functionality",
      "Detailed Pokemon information",
      "Type-based filtering",
      "Evolution chain visualization",
      "Responsive grid layout"
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center text-sage dark:text-sage-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 text-sage dark:text-sage-dark">{project.title}</h3>
                <CardDescription className="text-lightpink dark:text-lightpink-dark mb-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-lighterpink dark:bg-lighterpink-dark text-sage dark:text-sage-dark">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h4 className="font-semibold text-sage dark:text-sage-dark mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-sage dark:text-sage-dark">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between p-4 bg-lighterpink bg-opacity-30 dark:bg-gray-700 dark:bg-opacity-50">
                <Button asChild variant="outline" size="sm" className="bg-sage text-offwhite hover:bg-lightpink dark:bg-sage-dark dark:text-gray-900 dark:hover:bg-lightpink-dark">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="bg-sage text-offwhite hover:bg-lightpink dark:bg-sage-dark dark:text-gray-900 dark:hover:bg-lightpink-dark">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

