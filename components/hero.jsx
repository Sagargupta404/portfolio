"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const backgrounds = ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg", "/b6.jpg"];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 text-white">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi! I’m <span className="text-red-600">SAGAR</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            💻 "Coding for me is not just about solving problems — it’s about
            creating something meaningful, turning ideas into reality, and
            constantly learning."
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition"
          >
            View My Work
          </a>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72">
            {/* Circular Border Stroke */}
            <div className="absolute -inset-2 rounded-full border-2 border-red-600 animate-pulse shadow-lg"></div>

            {/* Profile Image */}
            <Image
              src="/me.jpg"
              alt="Sagar Gupta"
              fill
              className="object-cover rounded-full shadow-8xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
