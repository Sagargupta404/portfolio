"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Video Chat App",
    description:
      "A peer-to-peer video calling and chat application using Next.js and WebRTC.",
    image: "/c2.jpg",
    link: "https://github.com/yourusername/video-chat-app",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/c1.jpg",
    link: "https://yourportfolio.com",
  },
  {
    title: "To-Do App",
    description: "Task management app with priority sorting and reminders.",
    image: "/c3.jpg",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    title: "To-Do App",
    description: "Task management app with priority sorting and reminders.",
    image: "/c3.jpg",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    title: "To-Do App",
    description: "Task management app with priority sorting and reminders.",
    image: "/c3.jpg",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    title: "To-Do App",
    description: "Task management app with priority sorting and reminders.",
    image: "/c3.jpg",
    link: "https://github.com/yourusername/todo-app",
  },
];

// Background images for the section
const backgrounds = ["/c1.jpg", "/c2.jpg", "/c3.jpg","/c4.jpg"]; // place in /public

export default function Projects() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-10 px-10 bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 transform transition-transform duration-900 hover:scale-130">
  My <span className="text-red-600">Projects</span>
</h2>


        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative w-full h-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm text-center px-4">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
