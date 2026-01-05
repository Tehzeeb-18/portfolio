import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Tehzeeb-18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tehzeeb-hassan18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tehzeebh456@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="mx-1 text-red-500 fill-current" />
            <span>by M Tehzeeb Hassan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
