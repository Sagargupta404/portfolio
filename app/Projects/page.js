"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer/footer";

const projects = [
  {
    title: "FreelanceFlow",
    description:
      "A freelance management platform to organize projects, manage clients, and track work efficiently.",
    image: "/f1.png",
    link: "https://freelance-flow-pg.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    features: [
      "Project management dashboard",
      "Client workflow tracking",
      "Responsive modern UI",
    ],
  },
  {
    title: "Gym Website",
    description:
      "A modern gym landing website built using React + Vite with animations and page routing.",
    image: "/g1.png",
    link: "https://sagargupta404.github.io/gym/",
    tech: ["React", "Vite", "React Router", "CSS Animations"],
    features: [
      "Animated landing sections",
      "Responsive design",
      "Multiple routed pages",
    ],
  },
  {
    title: "CarWale Clone (Updating Soon)",
    description:
      "A car listing and comparison website inspired by CarWale. More features will be added soon.",
    image: "/cw1.png",
    link: "#",
    tech: ["Next.js", "API Integration", "TailwindCSS"],
    features: [
      "Car browsing interface",
      "Vehicle detail pages",
      "Future comparison features",
    ],
  },
  {
    title: "LoveVerse",
    description:
      "An interactive romantic website with countdowns, story sections, and animated UI.",
    image: "/l1.png",
    link: "https://love-verse-ten.vercel.app/",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    features: [
      "Countdown timer to special day",
      "Memory gallery sections",
      "Smooth page animations",
    ],
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application supporting instant communication between users.",
    image: "/ch1.png",
    link: "#",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    features: [
      "Real-time messaging",
      "Active user tracking",
      "Instant message updates",
    ],
  },
];

export default function ProjectsTimeline() {
  return (
    <>
      <section className="relative bg-black py-20 px-6">

        <Link
          href="/"
          className="fixed top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20 transition"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back Home</span>
        </Link>

        <div className="relative text-center mb-20">

  {/* subtle glow behind heading */}
  <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-72 h-72 bg-red-600/10 blur-3xl rounded-full"></div>

  <h2 className="relative text-3xl md:text-4xl font-extrabold text-white tracking-wide">
    🚀 My <span className="text-red-500">Projects</span>
  </h2>

  {/* subtle divider */}
  <div className="mt-6 flex justify-center">
    <div className="w-24 h-[2px] bg-red-500/70 rounded-full"></div>
  </div>

</div>

        <div className="relative max-w-5xl mx-auto">

          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-white/10 h-full"></div>

          <div className="space-y-20">

            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >

                {/* Card */}
                <div className="group w-[45%] bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-lg hover:border-red-500/40 transition duration-300">

                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-white">

                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mt-2 text-sm">
                      {project.description}
                    </p>

                    {/* Reveal Section */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 mt-4">

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/10 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>

                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-block mt-4 text-sm px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
                      >
                        View Project
                      </Link>

                    </div>

                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}