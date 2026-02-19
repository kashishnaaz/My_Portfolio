"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";

import Image from "next/image";


const achievements = [
 {
  title: "Frontend Development Internship",
  issuer: "Edunet Foundation",
  date: "Sep 2025",
  credential: "STU6815873cb65a31746241340",
  image: "/images/edunet.jpg",
  link: "/images/edunet.pdf",
},

  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: " 19 Feb 2026",
    credential: "UC-ec7804e3-e4b2-4597-ae77-a0442254f19e",
    image: "/images/udemy.jpg",
    link: "https://www.udemy.com/certificate/UC-ec7804e3-e4b2-4597-ae77-a0442254f19e/",
  },
  {
    title: "Database Management System (DBMS)",
    issuer: "Scaler",
    date: " feb 2026",
    credential: "",
    image: "/images/dbms.png",
    link: "https://moonshot.scaler.com/s/li/6IuYDkmqvr",
  },
];

export const AchievementSection = () => {
  return (
    <section id="achievements" className="py-24">

      <ScrollReveal>

        {/* Heading */}
        <h3 className="text-3xl font-semibold text-white text-center mb-14">
          Achievements
        </h3>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-2 border-purple-500/60 overflow-hidden bg-white/5 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] transition duration-300 ease-out"

            >

              {/* Certificate Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>

                <p className="text-sm text-white/60">
                  {item.issuer} • {item.date}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  View Credential →
                </a>
              </div>

            </div>
          ))}

        </div>
      </ScrollReveal>
    </section>
  );
};
