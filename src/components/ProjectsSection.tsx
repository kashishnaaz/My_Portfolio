import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'
import { FaCode } from "react-icons/fa";
import { TbServer2 } from "react-icons/tb";
import { PiDatabaseDuotone } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";


const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24'>
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <section id="tech-stack" className="relative py-16">
  <h3 className="text-xl md:text-2xl font-semibold text-white/90 text-center mb-10">
    Tech Stack
  </h3>

  {/* GRID: 2x2 for main sections */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

    {/* FRONTEND */}
    <div className="flex items-center gap-2 bg-[#140a26] border border-[#2f1c55] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(113,39,186,0.25)]">
      <FaCode className="text-purple-400 text-lg" />
      <span className="text-white/90 font-semibold text-sm md:text-base">
        Frontend:
      </span>
      <span className="text-white/70 text-sm md:text-base">
        HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
      </span>
    </div>

    {/* BACKEND */}
    <div className="flex items-center gap-2 bg-[#140a26] border border-[#2f1c55] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(113,39,186,0.25)]">
      <TbServer2 className="text-blue-400 text-lg" />
      <span className="text-white/90 font-semibold text-sm md:text-base">
        Backend:
      </span>
      <span className="text-white/70 text-sm md:text-base">
        Node.js, Express.js, Authentication
      </span>
    </div>

    {/* DATABASE */}
    <div className="flex items-center gap-2 bg-[#140a26] border border-[#2f1c55] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(113,39,186,0.25)]">
      <PiDatabaseDuotone className="text-green-400 text-lg" />
      <span className="text-white/90 font-semibold text-sm md:text-base">
        Database:
      </span>
      <span className="text-white/70 text-sm md:text-base">
        MongoDB, NeonDB, PostgreSQL
      </span>
    </div>

    {/* TOOLS */}
    <div className="flex items-center gap-2 bg-[#140a26] border border-[#2f1c55] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(113,39,186,0.25)]">
      <AiOutlineTool className="text-yellow-400 text-lg" />
      <span className="text-white/90 font-semibold text-sm md:text-base">
        Tools:
      </span>
      <span className="text-white/70 text-sm md:text-base">
        GitHub, VS Code, Postman
      </span>
    </div>

  </div>

  {/* OTHERS SECTION */}
  <div className="flex justify-center mt-5 md:mt-6">
    <div className="flex items-center gap-2 bg-[#140a26] border border-[#2f1c55] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(113,39,186,0.25)]">
      <MdMiscellaneousServices className="text-pink-400 text-lg" />
      <span className="text-white/90 font-semibold text-sm md:text-base">
        Others:
      </span>
      <span className="text-white/70 text-sm md:text-base">
        C++, DBMS, MySQL, OS, OOPs, CN
      </span>
    </div>
  </div>

</section>

            <p className="text-3xl font-semibold tracking-tight text-white text-center mb-6">
  Projects
</p>
<br/>
<br/>
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    {/* heading */}
                    <div className='mb-12'>
                        {/* <p className='text-xs text-[#a48cc9]'>Cloudinary Saas</p> */}
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Cloudinary Saas</h3>
                    </div>
{/* description */}
<div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 pl-10 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>

  {/* desc text */}
  <p className='text-sm text-white/75 mb-3'>
    A Cloudinary-powered web app that allows users to upload and compress videos and generate social-media-ready image previews for platforms like Instagram and Twitter.
  </p>

  {/* Technologies */}
  <div className='mb-3'>
    <p className='text-xs text-white/50 uppercase tracking-wide mb-1'>Tech Used-</p>
    
    <div className="flex flex-wrap gap-2">
      {["Next.js 14", "Cloudinary", "Prisma", "NeonDB", "Clerk", "Framer Motion"].map((tech) => (
        <span 
          key={tech}
          className="px-2 py-[2px] text-xs rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Live Demo */}
  <a 
    href="https://saasapp-r5xdjq0z9-naazs-projects-76e5b93f.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className='inline-block mt-2 px-3 py-1 text-sm font-medium rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all'
  >
    🚀 Live Demo
  </a>

  {/* gradient border */}
  <div 
    className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
    style={{
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
    }}
  />
</div>

                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                {/* project image */}
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px]'>
                            <Image src="/images/saas.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* text content */}
                <div className='relative md:order-2 z-10'>
                    {/* heading */}
                    <div className='mb-12 text-right'>
                        {/* <p className='text-xs text-[#a48cc9]'>Featured Project</p> */}
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Nova Code Editor</h3>
                    </div>

                   <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 pl-10 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>

  {/* Description */}
  <p className='text-sm text-white/75 mb-3'>
    Nova Code Editor is a browser-based coding playground where users can choose templates, edit code, preview live output, and use AI-assisted features.
  </p>

  {/* Technologies */}
  <div className='mb-3'>
    <p className='text-xs text-white/50 uppercase tracking-wide mb-1'>Tech Used-</p>
    
    <div className="flex flex-wrap gap-2">
      {["Next.js", "WebContainers", "Prisma", "NeonDB", "Monaco Editor", "xTerm.js"].map((tech) => (
        <span 
          key={tech}
          className="px-2 py-[2px] text-xs rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Live Demo */}
  <a 
    href="https://saasapp-r5xdjq0z9-naazs-projects-76e5b93f.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className='inline-block mt-2 px-3 py-1 text-sm font-medium rounded-md bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all'
  >
    🚀 Live Demo
  </a>

  {/* Gradient Border Overlay */}
  <div 
    className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
    style={{
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
    }}
  />
</div>

                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                {/* project image */}
                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px]'>
                            <Image src="/images/novace.jpg" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default ProjectsSection