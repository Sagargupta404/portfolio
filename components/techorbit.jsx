"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiExpress 
} from "react-icons/si";

// ✅ Orbiting tech icon
function OrbitingIcon({ icon, radius, speed, offset }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    ref.current.position.set(x, 0, z);
  });

  return (
    <group ref={ref}>
      {/* Black stroked sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="black" wireframe={true} />
      </mesh>

      {/* Icon */}
      <Html center>
        <div className="text-2xl">{icon}</div>
      </Html>
    </group>
  );
}

export default function TechOrbit() {
  const icons = [
    <SiJavascript className="text-yellow-400" />,
    <FaReact className="text-blue-400" />,
    <SiNextdotjs className="text-white" />,
    <FaNodeJs className="text-green-500" />,
    <SiMongodb className="text-green-400" />,
    <SiTailwindcss className="text-cyan-400" />,
    <SiTypescript className="text-blue-500" />,
    <FaGitAlt className="text-orange-500" />,
    <FaHtml5 className="text-red-500" />,
    <FaCss3Alt className="text-blue-600" />,
    <SiExpress className="text-gray-300" />,
  ];

  return (
    <section className="w-full h-80 p-1 bg-black">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        {/* Orbiting Icons */}
        {icons.map((icon, i) => (
          <OrbitingIcon 
            key={i}
            icon={icon}
            radius={8}
            speed={1 + i * 0.1}
            offset={i * 0.5}
          />
        ))}

        {/* Center Sentence */}
        <Html center>
          <div className="text-white text-xl md:text-3xl font-bold text-center">
            🚀MyTechStack
          </div>
        </Html>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
