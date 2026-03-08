"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white shadow-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600 tracking-wide hover:text-red-500 transition">
          MyPortfolio
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-40 text-lg font-medium">

          <Link
            href="/about"
            className="relative group hover:text-red-400 transition"
          >
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/Projects"
            className="relative group hover:text-red-400 transition"
          >
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="relative group hover:text-red-400 transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-red-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-5 space-y-5 border-t border-white/10">

          <Link
            href="/about"
            className="block text-lg hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/Projects"
            className="block text-lg hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="block text-lg hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}