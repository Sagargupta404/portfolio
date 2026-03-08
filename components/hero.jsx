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
      className="relative w-full min-h-screen flex items-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-red-900/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-20 text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          <p className="text-red-500 font-semibold tracking-widest mb-2 text-sm md:text-base">
            HELLO, I'M
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Sagar <span className="text-red-600">Gupta</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl mt-3 md:mt-4 font-medium text-gray-200">
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

          <p className="mt-4 md:mt-6 text-gray-300 max-w-xl leading-relaxed text-sm md:text-base mx-auto md:mx-0">
            I design and build modern, scalable web applications with a focus
            on performance, clean architecture, and great user experiences.
            Specialized in MERN stack and Next.js development.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5 md:mt-6">
            {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 md:mt-8">

            <a
              href="/Projects"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg text-sm md:text-base"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1EEWK9dGLdwuitk6D5kTVgC9-6Lg29Wxu/view"
              className="px-5 py-2.5 border border-gray-400 hover:border-red-500 rounded-lg font-medium transition text-sm md:text-base"
            >
              Download Resume
            </a>

          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-xl md:text-2xl text-gray-300">
            <a href="https://github.com/yourusername" className="hover:text-red-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-red-500">
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80">

            <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-20"></div>

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

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 text-sm animate-bounce">
        Scroll ↓
      </div>

    </section>
  );
}