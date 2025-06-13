/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiStyledcomponents, SiMongodb, SiWebpack, SiEslint, SiPrettier, SiVercel } from "react-icons/si";
import { BiCodeAlt, BiLayer, BiTerminal, BiWrench } from "react-icons/bi";

const skills = [
  {
    icon: <FaReact className="h-8 w-8 mb-4 text-primary" />,
    title: "Front-End Development",
    description: "Building responsive and optimized web applications with modern frameworks.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="inline mr-1" /> },
      { name: "CSS3", icon: <FaCss3Alt className="inline mr-1" /> },
      { name: "JavaScript", icon: <FaJs className="inline mr-1" /> },
      { name: "TypeScript", icon: <SiTypescript className="inline mr-1" /> },
      { name: "Next.js", icon: <SiNextdotjs className="inline mr-1" /> },
      { name: "React", icon: <FaReact className="inline mr-1" /> }
    ],
  },
  {
    icon: <BiCodeAlt className="h-8 w-8 mb-4 text-primary" />,
    title: "Styling & UI Frameworks",
    description: "Crafting modern and maintainable UI components with efficient styling techniques.",
    technologies: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="inline mr-1" /> },
      { name: "CSS Modules", icon: <FaCss3Alt className="inline mr-1" /> },
      { name: "Styled Components", icon: <SiStyledcomponents className="inline mr-1" /> },
      { name: "ShadCN", icon: <BiCodeAlt className="inline mr-1" /> }
    ],
  },
  {
    icon: <BiLayer className="h-8 w-8 mb-4 text-primary" />,
    title: "State Management",
    description: "Handling application state efficiently for scalable applications.",
    technologies: [
      { name: "Context API", icon: <FaReact className="inline mr-1" /> },
      { name: "Zustand", icon: <BiLayer className="inline mr-1" /> }
    ],
  },
  {
    icon: <BiTerminal className="h-8 w-8 mb-4 text-primary" />,
    title: "Back-End Integration",
    description: "Connecting front-end applications to databases and back-end services.",
    technologies: [
      { name: "Mongoose", icon: <SiMongodb className="inline mr-1" /> },
      { name: "REST APIs", icon: <BiTerminal className="inline mr-1" /> }
    ],
  },
  {
    icon: <BiWrench className="h-8 w-8 mb-4 text-primary" />,
    title: "Development Tools",
    description: "Optimizing workflows with modern development and build tools.",
    technologies: [
      { name: "Webpack", icon: <SiWebpack className="inline mr-1" /> },
      { name: "ESLint", icon: <SiEslint className="inline mr-1" /> },
      { name: "Prettier", icon: <SiPrettier className="inline mr-1" /> }
    ],
  },
  {
    icon: <FaGitAlt className="h-8 w-8 mb-4 text-primary" />,
    title: "Version Control & Deployment",
    description: "Managing code collaboration and deploying applications efficiently.",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="inline mr-1" /> },
      { name: "GitHub", icon: <FaGithub className="inline mr-1" /> },
      { name: "Vercel", icon: <SiVercel className="inline mr-1" /> }
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-text-primary">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
            data-aos="zoom-in" 
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{skill.title}</h3>
                <p className="text-sm mb-4 text-text-secondary">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}