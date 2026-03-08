"use client";

import Image from "next/image";

const projects = [
  {
    title: "FreelanceFlow",
    description:
      "A freelance management platform that helps freelancers organize projects, track tasks, and manage client workflows efficiently.",
    image: "/f1.png",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    github: "#",
    live: "https://freelance-flow-pg.vercel.app/",
  },
  {
    title: "Gym Website",
    description:
      "A modern gym landing website built using React + Vite with smooth animations, routing, and responsive UI design.",
    image: "/g1.png",
    tech: ["React", "Vite", "React Router", "CSS Animations"],
    github: "#",
    live: "https://sagargupta404.github.io/gym/",
  },
  {
    title: "CarWale Clone (In Progress)",
    description:
      "A car listing and comparison website inspired by CarWale. This project will include car browsing, filtering, and detailed vehicle pages.",
    image: "/cw1.png",
    tech: ["Next.js", "API Integration", "TailwindCSS"],
    github: "#",
    live: "#",
  },
  {
    title: "LoveVerse",
    description:
      "An interactive romantic website featuring countdown timers, memory galleries, and personalized storytelling built with modern web animations.",
    image: "/l1.png",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    github: "#",
    live: "https://love-verse-ten.vercel.app/",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application with active user tracking and instant message delivery using modern web technologies.",
    image: "/ch1.png",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-red-500">Projects</span>
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Projects showcasing my skills in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-500 transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm px-3 py-1.5 border border-white/20 rounded hover:border-red-500 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm px-3 py-1.5 bg-red-600 rounded hover:bg-red-700 transition"
                  >
                    Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}