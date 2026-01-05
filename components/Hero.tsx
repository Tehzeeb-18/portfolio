"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Code2, Palette, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating shapes with enhanced animations */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          x: [-50, 50, -50],
          y: [-50, 50, -50],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <span className="text-4xl">👋</span>
            </motion.div>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-xl">
              Hi, I&apos;m
            </span>
          </motion.div>

          {/* Name with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-4"
          >
            M Tehzeeb Hassan
          </motion.h1>

          {/* Role with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 px-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              IT Intern - Web Developer
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            />
          </motion.div>

          {/* Tagline with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 px-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              Motivated Computer Science graduate with practical experience in front-end web development and design. 
              Eager to join a dynamic IT team to apply technical skills and develop into a well-rounded IT professional.
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Web Developer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
              >
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Graphic Designer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                <span className="font-medium text-gray-700 dark:text-gray-300">UI/UX Enthusiast</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">View Projects</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm cursor-pointer text-center"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links with enhanced design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="https://github.com/Tehzeeb-18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 overflow-hidden cursor-pointer"
              aria-label="GitHub"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Github size={24} className="relative" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tehzeeb-hassan18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 overflow-hidden cursor-pointer"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Linkedin size={24} className="relative" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 dark:text-gray-300 overflow-hidden cursor-pointer"
              aria-label="Download Resume"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <Download size={24} className="relative" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
