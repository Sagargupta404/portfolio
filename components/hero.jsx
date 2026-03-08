"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  const backgrounds = ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg"];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* Cinematic Black + Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-red-900/40"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Greeting */}
          <p className="text-red-500 font-semibold tracking-widest mb-2">
            HELLO, I'M
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Sagar <span className="text-red-600">Gupta</span>
          </h1>

          {/* Animated Roles */}
          <div className="text-2xl md:text-3xl mt-4 font-medium text-gray-200">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Next.js Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            I design and build modern, scalable web applications with a focus
            on performance, clean architecture, and great user experiences.
            Specialized in MERN stack and Next.js development.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm">Tailwind</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="/Projects"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1EEWK9dGLdwuitk6D5kTVgC9-6Lg29Wxu/view"
              className="px-6 py-3 border border-gray-400 hover:border-red-500 rounded-lg font-medium transition"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-2xl text-gray-300">
            <a href="https://github.com/yourusername" className="hover:text-red-500">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/yourusername" className="hover:text-red-500">
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >

          <div className="relative w-72 h-72 md:w-80 md:h-80">

            {/* Red Glow */}
            <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-20"></div>

            {/* Border */}
            <div className="absolute -inset-2 rounded-full border-2 border-red-600 animate-pulse"></div>

            <Image
              src="/me.jpg"
              alt="Sagar Gupta"
              fill
              className="rounded-full object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
}