"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tehzeebh456@gmail.com",
      href: "mailto:tehzeebh456@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 306 0811362",
      href: "tel:+923060811362",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Mianwali, Pakistan",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Tehzeeb-18",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tehzeeb-hassan18",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/tehzeeb18",
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                    <div className="relative flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                      <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 text-white rounded-lg shadow-md">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg ${social.color} transition-all duration-300 shadow-lg cursor-pointer`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:block relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-2">Let&apos;s Create Together</h4>
                <p className="text-white/90">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                  part of your vision.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
            <form onSubmit={handleSubmit} className="relative space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-center text-sm"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
