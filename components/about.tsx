"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  FileCode,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "HTML", icon: <Code className="h-6 w-6" /> },
  { name: "JavaScript", icon: <FileCode className="h-6 w-6" /> },
  { name: "CSS", icon: <Palette className="h-6 w-6" /> },
  { name: "SCSS", icon: <Palette className="h-6 w-6" /> },
  { name: "Tailwind", icon: <Palette className="h-6 w-6" /> },
  { name: "Bootstrap", icon: <Palette className="h-6 w-6" /> },
  { name: "React", icon: <Code className="h-6 w-6" /> },
  { name: "Next.js", icon: <Globe className="h-6 w-6" /> },
  { name: "Node.js", icon: <FileCode className="h-6 w-6" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6" /> },
  { name: "Git", icon: <Code className="h-6 w-6" /> },
];

export function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Content */}
        </motion.div>
        <motion.div
          className="w-full md:w-2/3 mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-sage dark:text-sage-dark">
            About Me
          </h2>
          <p className="text-lg mb-8 text-sage dark:text-sage-dark max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web
            technologies. With a strong foundation in both frontend and backend
            development, I love bringing ideas to life through clean,
            maintainable code and intuitive user experiences.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
            >
              <a
                href="https://github.com/Sneha14-Gupta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-white dark:text-gray-800" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
            >
              <a
                href="https://www.linkedin.com/in/sneha-gupta-a27633232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-white dark:text-gray-800" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
            >
              <a href="mailto:sneha@phleebs.tech">
                <Mail className="h-5 w-5 text-white dark:text-gray-800" />
              </a>
            </Button>
          </div>
          <div id="skills">
            <h3 className="text-2xl font-semibold mb-6 text-lightpink dark:text-lightpink-dark">
              Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-lighterpink dark:bg-lighterpink-dark p-6 rounded-lg flex items-center justify-center flex-col aspect-square shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    scale: 1.05,
                    rotateX: 15,
                    rotateY: 15,
                    boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-sage dark:text-sage-dark mb-3">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-sage dark:text-sage-dark">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
