"use client"

import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/animated-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome, Github, CodepenIcon as ReactIcon, Server, Database, Code, Braces, Globe, Wind, FileCode2, Palette } from 'lucide-react'
import Image from "next/image"
import { AnimatedName } from "@/components/animated-name"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  features: string[]
}

interface AnimatedSectionsProps {
  skills: Skill[]
  projects: Project[]
}

export function AnimatedSections({ skills, projects }: AnimatedSectionsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <>
      {/* About Section with Enhanced Animation */}
      <section id="about" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedName />
            <p className="mx-auto max-w-[700px] text-sage md:text-xl mt-4 font-poppins text-center">
              Full Stack Developer with expertise in MERN stack. Passionate about creating efficient, scalable, and user-friendly web applications. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, maintainable code and intuitive user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Animation and Icons */}
      <section id="skills" className="py-12 bg-lightpink">
        <h2 className="text-2xl font-bold mb-8 font-poppins text-center text-sage">Skills</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <AnimatedCard>
                <CardContent className="flex flex-col items-center justify-center p-6 bg-offwhite">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <motion.span 
                    className="font-medium mt-2 font-poppins text-sage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {skill.name}
                  </motion.span>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section with Enhanced Cards */}
      <section id="projects" className="py-12">
        <h2 className="text-2xl font-bold mb-8 font-poppins text-center text-sage">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} index={index} className="flex flex-col bg-offwhite">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover mb-4"
                />
                <CardTitle className="font-poppins text-sage">{project.title}</CardTitle>
                <CardDescription className="font-poppins text-lightpink">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold font-poppins text-sage">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm font-poppins text-lightpink">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-poppins bg-lighterpink text-sage">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" asChild className="bg-sage text-offwhite hover:bg-lightpink">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="font-poppins">
                      <Chrome className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-sage text-offwhite hover:bg-lightpink">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-poppins">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  )
}

