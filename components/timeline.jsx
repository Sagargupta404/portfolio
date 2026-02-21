"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

const techTimeline = [
  {
    year: "2021",
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    desc: "Started my coding journey with JavaScript — building small projects & exploring logic.",
  },
  {
    year: "2022",
    name: "React",
    icon: <FaReact className="text-blue-400 text-3xl" />,
    desc: "Learned React to build modern UI components and single-page apps.",
  },
  {
    year: "2022",
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-3xl" />,
    desc: "Moved into full-stack development with Next.js for SSR & API routes.",
  },
  {
    year: "2023",
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    desc: "Mastered backend skills, APIs, and real-time apps using Node.js.",
  },
  {
    year: "2023",
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    desc: "Explored databases with MongoDB — making apps more dynamic & scalable.",
  },
  {
    year: "2024",
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    desc: "Polished my design skills with Tailwind for rapid, responsive UI styling.",
  },
];

export default function TechTimeline() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-400">Tech Journey</span>
        </h2>

        <div className="relative border-l border-gray-700">
          {techTimeline.map((tech, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot with icon */}
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-800 border-2 border-blue-400 rounded-full -left-5 ring-4 ring-gray-900">
                {tech.icon}
              </span>

              {/* Content */}
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow">
                <h3 className="text-xl font-semibold text-red-600">
                  {tech.year} • {tech.name}
                </h3>
                <p className="mt-2 text-gray-300 text-sm">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
