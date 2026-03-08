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
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">

        {/* Back */}
        <Link
          href="/"
          className="fixed top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md hover:bg-white/20 transition"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-5xl font-bold">
              Let's <span className="text-red-500">Connect</span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              Have a project idea, collaboration opportunity, or just want to say hello?
              Feel free to reach out — I’m always open to meaningful conversations.
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 mt-10">

              <div className="relative w-16 h-16">
                <Image
                  src="/me.jpg"
                  alt="Sagar Gupta"
                  fill
                  className="rounded-full object-cover border-2 border-red-500"
                />
              </div>

              <div>
                <h3 className="font-semibold">Sagar Gupta</h3>
                <p className="text-gray-400 text-sm">
                  Full Stack Developer
                </p>
              </div>

            </div>

            {/* Info */}
            <div className="mt-8 space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                vitacatalyst4320@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                India
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-6 mt-8 text-2xl text-gray-400">

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
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-6">
              Send Message
            </h2>

            {success && (
              <p className="text-green-400 mb-4">
                Message sent successfully 🚀
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-lg focus:border-red-500 outline-none"
              />

              <input
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-lg focus:border-red-500 outline-none"
              />

              <textarea
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-lg focus:border-red-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition"
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