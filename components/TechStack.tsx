"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Database, 
  GitBranch, 
  Layers,
  FileCode,
  Braces,
  Sparkles
} from "lucide-react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { 
      name: "HTML5", 
      category: "Frontend",
      icon: <FileCode className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS3", 
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "JavaScript", 
      category: "Frontend",
      icon: <Braces className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      name: "React", 
      category: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Next.js", 
      category: "Frontend",
      icon: <Layers className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900"
    },
    { 
      name: "Tailwind CSS", 
      category: "Frontend",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    },
    { 
      name: "Bootstrap", 
      category: "Frontend",
      icon: <Layers className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    { 
      name: "Python", 
      category: "Backend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-600 to-yellow-500"
    },
    { 
      name: "SQL", 
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "Git", 
      category: "Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-orange-600 to-red-600"
    },
    { 
      name: "GitHub", 
      category: "Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900"
    },
    { 
      name: "Illustrator", 
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600"
    },
    { 
      name: "Photoshop", 
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    { 
      name: "Figma", 
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools", "Design"];

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

        {/* Tech Grid by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(
              (tech) => tech.category === category
            );
            
            if (categoryTechs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-600 font-medium mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categoryTechs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <div className={`mb-3 text-gray-400 dark:text-gray-600 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:${tech.color} group-hover:bg-clip-text transition-all duration-300`}>
                        {tech.icon}
                      </div>
                      
                      {/* Name */}
                      <p className="text-sm font-medium text-gray-900 dark:text-white relative">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
