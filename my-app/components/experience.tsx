"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  date: string
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Innovators Inc.",
    date: "2021 - Present",
    description: [
      "Developed and maintained multiple web applications using the MERN stack",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with the design team to create intuitive user interfaces"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions Ltd.",
    date: "2019 - 2021",
    description: [
      "Created dynamic and interactive website features using React and Redux",
      "Optimized applications for maximum speed and scalability",
      "Participated in code reviews and contributed to team knowledge sharing"
    ]
  }
]

const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    date: "2015 - 2019"
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Coding Academy",
    date: "2019"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center text-sage"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience & Education
      </motion.h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-lightpink">Work Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-sage">{exp.title}</CardTitle>
                  <p className="text-sm text-lightpink">{exp.company} | {exp.date}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sage">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-lightpink">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-sage">{edu.degree}</CardTitle>
                  <p className="text-sm text-lightpink">{edu.institution} | {edu.date}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

