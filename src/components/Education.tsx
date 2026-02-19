import React from "react";
import { PiGraduationCapDuotone,PiBuildingApartmentDuotone,PiChalkboardTeacherDuotone, } from "react-icons/pi";
import ScrollReveal from "./ScrollReveal";

type EducationItem = {
  title: string;
  school: string;
  add:string;
  extra: string;
};

const educationItems: EducationItem[] = [
  {
    title: "B.Tech — Information Technology (2023 - 2027)",
    school: "BIT Sindri",
    add: "Dhanbad (Jharkhand)",
    extra: "CGPA: 8.35 / 10",
  },
  {
    title: "Intermediate — CBSE",
    school: "Loyola Convent School",
    add: "Ormanjhi (Jharkhand)",
    extra: "Percentage: 89%",
  },
  {
    title: "Matriculation — CBSE",
    school: "TATA DAV Public School",
    add: "Chainpur, Ramgarh (Jharkhand)",
    extra: "Percentage: 95.2%",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 flex flex-col items-center">
      <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-12">
        Education
      </h3>

      <ScrollReveal stagger={0.15} className="flex flex-col gap-6 w-full items-center">
        {educationItems.map((item, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-2xl px-6 py-5 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113,39,186,0.25)] hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.40)] transition-all duration-300 flex gap-4 items-start max-w-xl w-full"
          >
            {/* ICON LEFT SIDE */}
            <PiGraduationCapDuotone className="text-purple-400 min-w-10 min-h-10 md:min-w-12 md:min-h-12 mt-1" />

            {/* TEXT RIGHT */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-xl text-white/70 mt-1">{item.school}</p>
              <p className="text-sm text-white/70 mt-1">{item.add}</p>
              <p className="text-xs md:text-sm text-white/50 mt-1">{item.extra}</p>
            </div>
          </article>
        ))}
      </ScrollReveal>
    </section>
  );
};

export default Education;
