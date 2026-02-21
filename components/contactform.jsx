"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">💬 Contact Me</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows="5"
        className="w-full p-3 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition"
      >
        Send Message
      </button>

      {status && <p className="mt-3 text-center">{status}</p>}
    </form>
  );
}
