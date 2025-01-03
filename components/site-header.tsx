"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sage dark:border-sage-dark bg-offwhite/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-offwhite/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-sage dark:text-sage-dark">
              &lt;
            </span>
            <span className="font-bold text-lightpink dark:text-lightpink-dark">
              sneha
            </span>
            <span className="font-bold text-sage dark:text-sage-dark">
              /&gt;
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          {["about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors hover:text-sage dark:hover:text-sage-dark ${
                activeSection === section
                  ? "text-sage dark:text-sage-dark"
                  : "text-lightpink dark:text-lightpink-dark"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
