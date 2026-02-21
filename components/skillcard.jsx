"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiMongoose, SiPostman, SiCplusplus, SiC } from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-yellow-400 text-5xl" />, title: "JavaScript", desc: "Core programming language I use for web development." },
  { icon: <FaReact className="text-blue-400 text-5xl" />, title: "React", desc: "Building interactive UIs with components and hooks." },
  { icon: <SiNextdotjs className="text-white text-5xl" />, title: "Next.js", desc: "Fullstack framework for SSR and modern apps." },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, title: "Node.js", desc: "Backend JavaScript runtime for APIs and servers." },
  { icon: <SiMongodb className="text-green-400 text-5xl" />, title: "MongoDB", desc: "NoSQL database for storing app data flexibly." },
  { icon: <SiMongoose className="text-red-400 text-5xl" />, title: "Mongoose", desc: "Elegant ODM for MongoDB and Node.js." },
  { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, title: "TailwindCSS", desc: "Utility-first CSS framework for styling fast." },
  { icon: <SiTypescript className="text-blue-500 text-5xl" />, title: "TypeScript", desc: "Typed superset of JS for scalable apps." },
  { icon: <FaGitAlt className="text-orange-500 text-5xl" />, title: "Git", desc: "Version control to manage and track changes." },
  { icon: <FaHtml5 className="text-red-500 text-5xl" />, title: "HTML5", desc: "Markup language to structure the web." },
  { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, title: "CSS3", desc: "For styling, animations, and layouts." },
  { icon: <SiPostman className="text-orange-400 text-5xl" />, title: "Postman", desc: "API testing and development tool." },
  { icon: <SiCplusplus className="text-blue-500 text-5xl" />, title: "C++", desc: "High-performance programming language." },
  { icon: <SiC className="text-gray-400 text-5xl" />, title: "C", desc: "Foundation of programming, system-level language." },
  { icon: <FaPython className="text-yellow-400 text-5xl" />, title: "Python", desc: "Versatile language for AI, ML, and backend." },
];

export default function SkillCards() {
  return (
    <section className="bg-black py-8 px-11">
      

      <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group [perspective:1000px]"
          >
            <div className="relative w-50 h-30 rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(50deg)]">
              
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-950 rounded-xl border border-gray-700 [backface-visibility:hidden]">
                {skill.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">{skill.title}</h3>
              </div>

            
             

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
