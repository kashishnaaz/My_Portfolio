"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

import Image from "next/image";
import React from "react";


import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-10 pb-16">
      <div className="mt-0 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
                <Image
  src="/images/me.jpeg"
  alt="avatar image"
  width={240}
  height={240}
  className="rounded-2xl object-cover border-4 border-black"
/>

            </div>
          </div>

          {/* headline */}
          <div className="md:pl-12 text-center md:text-left">
            <p className="text-base md:text-lg text-white/60 mb-2">
              Hey there, welcome to my portfolio ✦
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15] mt-6">
              
              <span className="relative z-10 text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide"> Kashish Naaz</span>
            </h1>
            <br></br>
             <p className="text-2xl flex gap-4 text-4xl justify-center">
    <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-2xl  cursor-pointer hover:text-purple-400">
  ➡ See My Resume 📑
</a>
    </p>
    <br/>
  <div className="flex gap-4 text-4xl justify-center">
    <a href="https://github.com/kashishnaaz" target="_blank" className="transition-transform hover:-translate-y-1"><FaGithub color="#7c3aed"  /></a>
    <a href="https://www.geeksforgeeks.org/profile/kashafnaaz1kz" target="_blank" className="transition-transform hover:-translate-y-1"><SiGeeksforgeeks color=" text-white/60" /></a>
    <a href="https://leetcode.com/u/kashishnaaz79/" target="_blank" className="transition-transform hover:-translate-y-1"><SiLeetcode color="#7c3aed" /></a>
    <a href="https://www.linkedin.com/in/kashish-naaz-854b07215/" target="_blank" className="transition-transform hover:-translate-y-1"><FaLinkedin color=" text-white/60" /></a>
    <a href="https://www.codechef.com/users/kashsf_naaz" target="_blank" className="transition-transform hover:-translate-y-1"><SiCodechef color="#7c3aed" /></a>
  </div>
          </div>
        </ScrollReveal>

        {/* role and description */}
<ScrollReveal delay={0.15} className="mt-0 text-center">
 <br/>
  <h2 className="text-2xl sm:text-3xl md:text-3xl font-normal tracking-tight">
    <Typewriter
      words={[" Full Stack Developer | C++ DSA | IT Undergraduate"]}
      typeSpeed={65}
      deleteSpeed={0}
      delaySpeed={600}
      cursor
      cursorStyle="|"
      loop={1}
    />
  </h2>
  <p>Curiosity for how things work led me into web development and problem-solving.
     I enjoy building full-stack web applications that are responsive, functional, and user-focused. 
     From crafting clean UIs to working with APIs and databases, I like exploring how every layer of a web product works together.
      Alongside development, I practice DSA in C++ to strengthen my logic and problem-solving skills.</p>
</ScrollReveal>

      </div>
    </section>
  );
};

export default HereSection;
