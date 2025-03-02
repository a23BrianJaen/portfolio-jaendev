"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const projects = [
    {
      title: "Syncblend App",
      description: "SyncBlend is a web platform designed specifically for high schools, with an innovative approach to managing 14-18 year old students.",
      tags: ["Vue.js", "Node.js", "Laravel", "Tailwind CSS", "Python"],
      link: "#",
      github: "https://github.com/jaendev/syncblendApp"
    },
    {
      title: "Dungeon Game",
      description: "Dungeon Crawler is a 2D adventure game in Phaser, where you explore dungeons, face enemies and collect treasures.",
      tags: ["TypeScript", "Phaser.js", "HTML", "CSS"],
      link: "#",
      github: "https://github.com/jaendev/dungeonGame"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI's GPT-3",
      tags: ["Python", "FastAPI", "React", "OpenAI"],
      link: "#",
      github: "#"
    }
  ];

  const description = ["Hi 👋🏻, I'm Brian and I'm a web developer. I have been programming for two years and my first contact with the world of developers was Java. From that moment on I can't stop programming and every day I try to expand my knowledge even more."]

  // List of skills: frontend, backend, databases, tools and others
  const skills = [
    "HTML",
    "CSS",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "VUE",
    "Nuxt",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "Mysql",
    "MongoDB",
    "Cloding",
    "React Native",
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero/About Section */}
      <section id="about" className="container mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=infobrian03@gmail.com`)} >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            {/* <Button onClick={() => window.open("https://github.com/jaendev", "_blank")} variant="outline" size="lg" className="w-full sm:w-auto border-primary/20 hover:bg-primary/10">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button> */}
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 md:px-6 py-16 md:py-20 bg-secondary/50 backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {skills.map((skill, skillId) => (
            <Badge
              key={skillId}
              variant="secondary"
              className="text-sm py-1 px-3 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all border-primary/10">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-primary/20 bg-primary/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 md:px-6 py-16 md:py-20 bg-secondary/50 backdrop-blur-sm">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Let's Connect</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a
                onClick={() => window.open('https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252', '_blank')} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/jaendev" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}