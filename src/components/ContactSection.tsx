"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send ❌");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <ScrollReveal stagger={0.08}>

        {/* Heading */}
        <h3 className="text-3xl font-semibold text-white text-center mb-10">
          Contact
        </h3>

        {/* Contact Info */}
        <div className="space-y-4 text-white/80 max-w-xl mx-auto">

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400" />
            <span>kashishnaaz79@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-400" />
            <span>8210724997</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-400" />
            <span>Dhanbad, India</span>
          </div>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-xl mx-auto space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
            required
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
