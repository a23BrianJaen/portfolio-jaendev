"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const name = ["Brian Jaén"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {name}
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2 mr-10">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full text-left text-muted-foreground hover:text-foreground hover:bg-primary/10"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-muted-foreground hover:text-foreground hover:bg-primary/10"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-muted-foreground hover:text-foreground hover:bg-primary/10"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-muted-foreground hover:text-foreground hover:bg-primary/10"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}