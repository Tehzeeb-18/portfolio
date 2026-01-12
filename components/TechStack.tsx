"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { 
      name: "HTML5", 
      category: "Frontend",
      icon: "🌐",
      gradient: "from-orange-400 to-red-500",
      description: "Semantic markup"
    },
    { 
      name: "CSS3", 
      category: "Frontend",
      icon: "🎨",
      gradient: "from-blue-400 to-cyan-500",
      description: "Modern styling"
    },
    { 
      name: "JavaScript", 
      category: "Frontend",
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500",
      description: "Interactive logic"
    },
    { 
      name: "TypeScript", 
      category: "Frontend",
      icon: "📘",
      gradient: "from-blue-600 to-blue-400",
      description: "Type-safe JS"
    },
    { 
      name: "React", 
      category: "Frontend",
      icon: "⚛️",
      gradient: "from-cyan-400 to-blue-500",
      description: "UI library"
    },
    { 
      name: "Next.js", 
      category: "Frontend",
      icon: "▲",
      gradient: "from-gray-700 to-gray-900",
      description: "React framework"
    },
    { 
      name: "Tailwind CSS", 
      category: "Frontend",
      icon: "💨",
      gradient: "from-teal-400 to-cyan-500",
      description: "Utility-first CSS"
    },
    { 
      name: "Bootstrap", 
      category: "Frontend",
      icon: "🅱️",
      gradient: "from-purple-500 to-indigo-600",
      description: "CSS framework"
    },
    { 
      name: "Python", 
      category: "Backend",
      icon: "🐍",
      gradient: "from-blue-500 to-yellow-400",
      description: "Backend language"
    },
    { 
      name: "SQL", 
      category: "Database",
      icon: "🗄️",
      gradient: "from-blue-500 to-indigo-600",
      description: "Database queries"
    },
    { 
      name: "Git", 
      category: "Tools",
      icon: "🔀",
      gradient: "from-orange-500 to-red-600",
      description: "Version control"
    },
    { 
      name: "GitHub", 
      category: "Tools",
      icon: "🐙",
      gradient: "from-gray-700 to-gray-900",
      description: "Code hosting"
    },
    { 
      name: "Illustrator", 
      category: "Design",
      icon: "🎭",
      gradient: "from-orange-400 to-amber-600",
      description: "Vector graphics"
    },
    { 
      name: "Photoshop", 
      category: "Design",
      icon: "🖼️",
      gradient: "from-blue-500 to-cyan-600",
      description: "Image editing"
    },
    { 
      name: "Figma", 
      category: "Design",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      description: "UI/UX design"
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 bg-white dark:bg-gray-950"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium mb-4">
            Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${tech.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div className={`h-24 bg-gradient-to-br ${tech.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
