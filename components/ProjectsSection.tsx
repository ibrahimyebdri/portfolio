/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "TripDzAir",
    description: "A tourism web platform for hotel, restaurant, and activity booking in Algeria.",
    image: "/tripdzair.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "https://tripdzair.vercel.app",
    githubUrl: "https://github.com/ibrahimyebdri/PFEL3",
    featured: true,
  },
  {
    title: "Notesco",
    description: "A simple mobile app for taking, organizing and managing notes.",
    image: "/notesco.png",
    technologies: ["React Native", "Expo", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/ibrahimyebdri/",
    featured: true,
  },
  {
    title: "Portfolio",
    description: "My personal portfolio to showcase my projects, skills and experience.",
    image: "/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/ibrahimyebdri/",
    featured: true,
  },
  {
    title: "Cholesterol Tracker",
    description: "A mobile app to help users track and monitor their cholesterol levels easily.",
    image: "/cholesterol-tracker.png",
    technologies: ["React Native", "Expo"],
    liveUrl: "",
    githubUrl: "https://github.com/ibrahimyebdri/",
    featured: true,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-text-primary">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            Explore my collection of projects showcasing different technologies and solutions I've built.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div data-aos="zoom-in" key={index} className="group relative overflow-hidden rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
                        <FaGithub className="h-5 w-5" />
                      </Link>
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
                          <FaExternalLinkAlt className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-text-primary border-b border-border pb-2">
            More Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-background">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-text-primary">{project.title}</h4>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="_blank" className="text-text-secondary hover:text-primary transition-colors">
                        <FaGithub className="h-4 w-4" />
                      </Link>
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" className="text-text-secondary hover:text-primary transition-colors">
                          <FaExternalLinkAlt className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
