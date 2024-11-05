import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Giyani Marketplace",
    description:
      "A cross-platform marketplace application serving the Giyani community with a modern and intuitive shopping experience.",
    image: "src/assets/giyani-marketplace.jpeg",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example",
    tags: ["Flutter", "Node.js", "MongoDB"],
  },
  {
    title: "E-Learning Platform",
    description:
      "Interactive learning platform with real-time collaboration features and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Health Tracking App",
    description:
      "Mobile application for tracking health metrics with data visualization and insights.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example",
    tags: ["Flutter", "Firebase", "ML Kit"],
  },
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-800/50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
