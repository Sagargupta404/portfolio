"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiMongoose, SiPostman, SiCplusplus, SiC } from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-yellow-400 text-3xl md:text-5xl" />, title: "JavaScript" },
  { icon: <FaReact className="text-blue-400 text-3xl md:text-5xl" />, title: "React" },
  { icon: <SiNextdotjs className="text-white text-3xl md:text-5xl" />, title: "Next.js" },
  { icon: <FaNodeJs className="text-green-500 text-3xl md:text-5xl" />, title: "Node.js" },
  { icon: <SiMongodb className="text-green-400 text-3xl md:text-5xl" />, title: "MongoDB" },
  { icon: <SiMongoose className="text-red-400 text-3xl md:text-5xl" />, title: "Mongoose" },
  { icon: <SiTailwindcss className="text-cyan-400 text-3xl md:text-5xl" />, title: "TailwindCSS" },
  { icon: <SiTypescript className="text-blue-500 text-3xl md:text-5xl" />, title: "TypeScript" },
  { icon: <FaGitAlt className="text-orange-500 text-3xl md:text-5xl" />, title: "Git" },
  { icon: <FaHtml5 className="text-red-500 text-3xl md:text-5xl" />, title: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600 text-3xl md:text-5xl" />, title: "CSS3" },
  { icon: <SiPostman className="text-orange-400 text-3xl md:text-5xl" />, title: "Postman" },
  { icon: <SiCplusplus className="text-blue-500 text-3xl md:text-5xl" />, title: "C++" },
  { icon: <SiC className="text-gray-400 text-3xl md:text-5xl" />, title: "C" },
  { icon: <FaPython className="text-yellow-400 text-3xl md:text-5xl" />, title: "Python" },
];

export default function SkillCards() {
  return (
    <section className="bg-black py-12 px-6">

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <div key={index} className="group">

            <div className="flex flex-col items-center justify-center bg-black border border-gray-700 rounded-xl p-6 transition duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10">

              {skill.icon}

              <h3 className="mt-3 text-sm md:text-lg font-semibold text-white text-center">
                {skill.title}
              </h3>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}