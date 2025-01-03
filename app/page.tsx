import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-offwhite-dark font-poppins">
      <SiteHeader />
      
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

