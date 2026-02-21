"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
const journey = [
  {
    title: "📘 The Curious Student",
    subtitle: "10th Grade",
    description:
      "This is where my journey began — full of curiosity, solving small puzzles, and discovering how computers could do magical things.",
    bg: "from-blue-900 to-indigo-900",
  },
  {
    title: "📖 The Explorer",
    subtitle: "12th Grade",
    description:
      "In high school, I started exploring coding seriously. I experimented with basic programs, logical thinking, and developed a love for problem solving.",
    bg: "from-green-900 to-emerald-800",
  },
  {
    title: "🎓 The Builder",
    subtitle: "College Life",
    description:
      "College gave me the chance to expand my skills. I built projects, worked with peers, and explored web development, full-stack coding, and real-world applications.",
    bg: "from-purple-900 to-pink-800",
  },
  {
    title: "🚀 The Dreamer",
    subtitle: "Career Path",
    description:
      "Now I am working on becoming a professional developer, eager to join innovative teams, build meaningful products, and continue learning every day.",
    bg: "from-red-900 to-orange-800",
  },
  {
    title: "🌟 The Vision Ahead",
    subtitle: "Future Goals",
    description:
      "My vision is to contribute to impactful projects, mentor upcoming developers, and grow as a creator who builds technology that makes lives better.",
    bg: "from-gray-900 to-black",
  },
];

export default function About() {
  return (
    <>
    <section className="w-full h-full">
        <Link
        href="/"
        className="fixed left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md shadow-lg hover:bg-white/20 hover:shadow-xl transition"
        aria-label="Go back to Home"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back Home</span>
      </Link>
      {journey.map((step, i) => (
        <div
          key={i}
          className={`min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-r ${step.bg} text-white`}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {step.title}
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl font-semibold mb-6 text-blue-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {step.subtitle}
          </motion.h3>
          <motion.p
            className="max-w-2xl text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {step.description}
          </motion.p>
        </div>
      ))}
    </section>
   
    </>
  );
}
