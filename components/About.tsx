"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900"
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
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a motivated Computer Science graduate from the University of Mianwali with a strong GPA of 3.01/4.0. 
              I have practical experience in front-end web development and graphic design, combining technical expertise 
              with creative problem-solving skills.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;ve completed internships at Ezitech Institute (Front-End Web Development) and SuperTech Institute 
              (Graphics Designing), where I gained hands-on experience in HTML, CSS, JavaScript, Bootstrap, Adobe 
              Illustrator, and Photoshop.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My final year project focused on Skin Lesion Detection using Deep Learning, showcasing my ability to 
              work with cutting-edge technologies and solve real-world problems.
            </p>
          </motion.div>

          {/* Education & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="border-l-2 border-gray-900 dark:border-white pl-6">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Computer Science
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  University of Mianwali
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  2020 - 2024 • GPA: 3.01/4.0
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    3+
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    2
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Internships
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    12+
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    2024
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Graduate
                  </p>
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
