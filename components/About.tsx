"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Bootstrap", level: 82 },
    { name: "Git & GitHub", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe Photoshop", level: 88 },
  ];

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern Tech",
      description: "Using latest web technologies",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative and communicative",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quick to adapt new technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800/50 dark:via-gray-800/50 dark:to-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer and designer with a keen eye for detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 flex flex-col"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I'm a motivated Computer Science graduate from the University of Mianwali with a strong GPA of 3.01/4.0.
                  I have practical experience in front-end web development and graphic design, combining technical expertise 
                  with creative problem-solving skills.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I've completed internships at Ezitech Institute (Front-End Web Development) and SuperTech Institute 
                  (Graphics Designing), where I gained hands-on experience in HTML, CSS, JavaScript, Bootstrap, Adobe 
                  Illustrator, and Photoshop. My final year project focused on Skin Lesion Detection using Deep Learning, 
                  showcasing my ability to work with cutting-edge technologies.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-primary-600 dark:text-primary-400 mb-2">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      className="group/skill cursor-pointer"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
