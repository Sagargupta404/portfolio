"use client";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer/footer";



export default function ContactPage() {
  return ( <>
    <section className="min-h-screen flex h-full py-10 items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-10">
          <Link
        href="/"
        className=" left-6 fixed top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md shadow-lg hover:bg-white/20 hover:shadow-xl transition"
        aria-label="Go back to Home"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back Home</span>
      </Link>
    
      <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-white/20">
        
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-32 h-32 relative">
            <Image
              src="/me.jpg" // put your photo in /public
              alt="Your Name"
              fill
              className="rounded-full object-cover border-4 border-red-400 shadow-lg"
            />
          </div>
        </div>

        {/* Name + Tagline */}
        <h2 className="mt-6 text-3xl px-0 font-bold text-white">SAGAR GUPTA</h2>
        <p className="mt-2  px-2  text-lg text-gray-300 italic">
          Coding for me is not just about solving problems — it is about creating meaning, building experiences, and transforming ideas into reality. Every line of code is a chance to craft something purposeful, something that makes life simpler, smarter, or more enjoyable for someone else.

I believe coding is a form of art where logic meets creativity. It’s not only about algorithms, data structures, or syntax, 
but also about vision, empathy, and clarity of thought. When I write code, I don’t just think 
of how to make it work; I think of how to make it meaningful — meaningful for the people who use it, meaningful for the developers
 who collaborate on it, and meaningful for myself as a lifelong learner.
      
        </p>
        <p className="mt-4 text-gray-500">
          Need my help? Feel free to reach out, I’d love to connect and collaborate 🚀
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://twitter.com/" target="_blank" className="text-gray-400 hover:text-blue-400 text-2xl transition-transform transform hover:scale-125">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="text-gray-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" className="text-gray-400 hover:text-pink-500 text-2xl transition-transform transform hover:scale-125">
            <FaInstagram />
          </a>
          <a href="https://github.com/" target="_blank" className="text-gray-400 hover:text-gray-100 text-2xl transition-transform transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-red-400 text-2xl transition-transform transform hover:scale-125">
            <FaEnvelope />  
          </a>
        </div>

        {/* Location */}
        <p className="mt-6 flex items-center justify-center text-gray-400 text-sm">
          <FaMapMarkerAlt className="mr-2" /> Seepat, Bilaspur, Chhattisgarh  📍India
        </p>

      </div>
    </section>
    
    <Footer/>
   </>
  );
}
