
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-widest uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available for high-impact projects</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] font-bold">
            Building systems that <span className="italic text-emerald-500">endure</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            I am <span className="text-white font-medium">Habeebullah</span>, a Software Developer and Educator. 
            I synthesize complexity into clarity, building digital architecture that bridges the present with the possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center transition-all group"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-slate-700 hover:border-emerald-500 rounded-lg font-semibold flex items-center justify-center transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
