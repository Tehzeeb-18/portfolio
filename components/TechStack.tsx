"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "SQL", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Adobe Illustrator", category: "Design" },
    { name: "Adobe Photoshop", category: "Design" },
    { name: "Figma", category: "Design" },
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
                      whileHover={{ scale: 1.05 }}
                      className="group relative p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 cursor-pointer"
                    >
                      <p className="text-center font-medium text-gray-900 dark:text-white">
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
