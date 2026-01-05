"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Avo - Creative Agency Website",
      description: "A stunning creative agency website showcasing modern design principles with smooth animations and interactive elements. Features portfolio showcase, services section, and contact form.",
      image: "/projects/avo-free-templatel.jpg.avif",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "UI/UX"],
      github: "https://github.com/Tehzeeb-18/AVO-TAS-3",
      live: "https://avotask3.netlify.app/",
      gradient: "from-violet-400 to-purple-600",
    },
    {
      title: "FinLoans - Financial Services Website",
      description: "A professional financial services website offering personal loans, business loans, and financial consulting. Features modern UI/UX design with responsive layout and smooth animations.",
      image: "/projects/finloans-free-template.jpg.avif",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Tehzeeb-18/Finloans-task-4",
      live: "https://finloans-task-4.netlify.app/",
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      title: "Cafedine Website",
      description: "A modern, responsive restaurant website featuring online menu, reservation system, and interactive UI. Built with React and styled with Tailwind CSS for optimal user experience.",
      image: "/projects/cafedine.png",
      tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Tehzeeb-18/Cafedine",
      live: "https://cafedinetask.netlify.app/",
      gradient: "from-orange-400 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in web development and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Project Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-xl transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
