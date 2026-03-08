"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">

        {/* Back Button */}
        <Link
          href="/"
          className="fixed top-4 left-4 md:top-6 md:left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 md:px-4 backdrop-blur-md hover:bg-white/20 transition text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Let's <span className="text-red-500">Connect</span>
            </h1>

            <p className="mt-4 md:mt-6 text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
              Have a project idea, collaboration opportunity, or just want to say hello?
              Feel free to reach out — I’m always open to meaningful conversations.
            </p>

            {/* Profile */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-8 md:mt-10">

              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <Image
                  src="/me.jpg"
                  alt="Sagar Gupta"
                  fill
                  className="rounded-full object-cover border-2 border-red-500"
                />
              </div>

              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  Sagar Gupta
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Full Stack Developer
                </p>
              </div>

            </div>

            {/* Info */}
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">

              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-red-500" />
                vitacatalyst4320@gmail.com
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                India
              </div>

            </div>

            {/* Social */}
            <div className="flex justify-center md:justify-start gap-6 mt-6 md:mt-8 text-xl md:text-2xl text-gray-400">

              <a
                href="https://github.com/"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-xl">

            <h2 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6">
              Send Message
            </h2>

            {success && (
              <p className="text-green-400 mb-4 text-sm md:text-base">
                Message sent successfully 🚀
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 px-4 py-2.5 md:py-3 rounded-lg focus:border-red-500 outline-none text-sm md:text-base"
              />

              <input
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 px-4 py-2.5 md:py-3 rounded-lg focus:border-red-500 outline-none text-sm md:text-base"
              />

              <textarea
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows="4"
                placeholder="Your Message"
                className="w-full bg-black/40 border border-white/10 px-4 py-2.5 md:py-3 rounded-lg focus:border-red-500 outline-none text-sm md:text-base"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-2.5 md:py-3 rounded-lg font-medium transition text-sm md:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}