"use client";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer/footer";

const projects = [
  {
    title: "Video Chat App",
    description: "Peer-to-peer video calling and chat app with Next.js + WebRTC.",
    image: "/c2.jpg",
    link: "https://github.com/yourusername/video-chat-app",
    tech: ["Next.js", "WebRTC", "Socket.io", "TailwindCSS"],
    features: ["1-to-1 video calling", "Real-time chat", "Responsive UI"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects & skills.",
    image: "/c1.jpg",
    link: "https://yourportfolio.com",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    features: ["Hero section", "Projects timeline", "Contact form"],
  },
  {
    title: "To-Do App",
    description: "Task manager with priority sorting & reminders.",
    image: "/c3.jpg",
    link: "https://github.com/yourusername/todo-app",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: ["CRUD tasks", "Priority sorting", "Deadline reminders"],
  },
];

export default function ProjectsTimeline() {
  return (<>
    <section className="relative bg-black py-20 px-6">
         <Link
        href="/"
        className=" left-6 fixed top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md shadow-lg hover:bg-white/20 hover:shadow-xl transition"
        aria-label="Go back to Home"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back Home</span>
      </Link>

      <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        🚀 My <span className="text-red-600">Projects</span>
      </h2>

      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 to-purple-600 h-full"></div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="group w-[45%] bg-gradient-to-r from-red-600 to-red-900 rounded-xl shadow-lg overflow-hidden relative z-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>

                  {/* Hover Reveal */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-96 mt-4">
                    <h4 className="text-lg font-semibold text-black">
                      🛠 Tech Stack:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-green-400 mt-4">
                      ✨ Features:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <Link
                      href={project.link}
                      target="_blank"
                      className="mt-4 inline-block px-4 py-2 bg-red-900 rounded-lg hover:bg-red-800 transition"
                    >
                      🔗 View Project
                    </Link>
                  </div>
                </div>
              </div>

              {/* Connector Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-black"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
