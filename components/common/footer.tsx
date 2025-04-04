"use client";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/khetha100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/khethukuthula-simamane-67127a265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/KSimamane37390"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-neutral-500 text-sm">
            <p>© {currentYear}Khethukuthula Simamane</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
