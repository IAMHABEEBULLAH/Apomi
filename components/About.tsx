
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold italic text-emerald-500 tracking-wide">The Narrative</h2>
            <p className="text-4xl md:text-5xl font-bold leading-tight">
              Software is not just code. It is an act of service.
            </p>
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
            <p>
              I began my journey not by wanting to build apps, but by wanting to understand systems. 
              As a software developer, I focus on the structural integrity of digital worlds. 
              As an educator, I focus on the cognitive load of learning.
            </p>
            <p>
              My work exists at the intersection of high-performance engineering and human-centric design. 
              I believe that the best technologies are invisible—they feel like natural extensions 
              of our intent.
            </p>
            <p className="italic font-normal text-slate-300">
              "Great architecture whispers its inevitability. I strive to write code that feels like it was always meant to be there."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
