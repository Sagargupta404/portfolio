"use client";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-black to-red-700 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">MyPortfolio</h2>
          <p className="mt-2 text-sm text-gray-400">
            Crafting ideas into code ✨ | Developer • Creator • Innovator
          </p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="text-gray-400 hover:text-pink-500 transition text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="text-gray-400 hover:text-gray-100 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-red-400 transition text-xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Extra Info */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Your Name</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
