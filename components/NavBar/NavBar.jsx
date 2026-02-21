"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Heading */}
        <h1 className="text-3xl font-bold text-red-600">MyPortfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg gap-30 font-medium">
          <Link href="/about" className="hover:text-red-400 transition">
            About
          </Link>
          <Link href="/Projects" className="hover:text-red-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-red-400  transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
          <Link
            href="#about"
            className="block text-lg hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-lg hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block text-lg hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
