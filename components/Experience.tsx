"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

type WorkExperience = {
  type: "work";
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: JSX.Element;
  color: string;
};

type Education = {
  type: "education";
  degree: string;
  institution: string;
  period: string;
  description: string[];
  icon: JSX.Element;
  color: string;
};

type TimelineItem = WorkExperience | Education;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: WorkExperience[] = [
    {
      type: "work",
      title: "Front End Web Development Intern",
      company: "Ezitech Institute",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Completed a front-end development internship at Ezitech from October 2024 to January 2025",
        "Worked on responsive web design, UI/UX improvements, and performance optimization",
        "Gained experience in HTML, CSS, JavaScript, and Bootstrap for building modern web applications",
        "Collaborated with team members on real-world projects and client requirements",
      ],
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Graphics Designer",
      company: "SuperTech Institute",
      period: "2024 - 2025",
      description: [
        "Gained hands-on experience in Adobe Illustrator and Photoshop",
        "Developed professional graphics for web, branding, and digital media",
        "Improved design skills in typography, visual composition, and creative layouts",
        "Created visually appealing designs while applying industry best practices",
      ],
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const education: Education[] = [
    {
      type: "education",
      degree: "Bachelor of Computer Science",
      institution: "University of Mianwali",
      period: "2020 - 2024",
      description: [
        "Final Year Project: Skin Lesion Detection Using Deep Learning",
        "Developed a CNN model in Python to classify skin lesions for early disease detection",
        "Worked with Jupyter Notebook, TensorFlow/Keras, and image datasets",
        "GPA: 3.01/4.0",
      ],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const allItems: TimelineItem[] = [...experiences, ...education];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium mb-4">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Experience & Education
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line with Gradient */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg" />

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative cursor-pointer h-full"
                whileHover={{ scale: 1.05 }}
              >
                {/* Timeline Dot with Pulse */}
                <div className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center`}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-75`}></div>
                  </div>
                </div>

                {/* Content Card with Gradient Border */}
                <div className="relative group mt-32 md:mt-32 h-full flex flex-col">
                  {/* Gradient Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur`}></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                    {/* Icon with Gradient */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} text-white mb-4 shadow-md group-hover:shadow-lg transition-shadow w-fit`}>
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all">
                      {item.type === "work" ? item.title : item.degree}
                    </h3>

                    {/* Company/Institution */}
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {item.type === "work" ? item.company : item.institution}
                    </p>

                    {/* Period with Icon */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg">
                      <Calendar size={14} className="text-primary-500" />
                      <span className="font-medium">{item.period}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 flex-grow">
                      {item.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                        >
                          <span className="text-primary-500 mt-1 font-bold">•</span>
                          <span className="flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Learning with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group cursor-pointer">
            {/* Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            
            <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 Continuous Learning
              </h3>
              <p className="text-white/90 max-w-2xl">
                Always exploring new technologies and design trends. Currently learning advanced
                animation techniques and exploring modern web frameworks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
