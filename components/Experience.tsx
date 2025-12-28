
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase">Trajectory</h2>
          <p className="text-5xl font-bold font-serif">History & Growth</p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0a0a0a] -translate-x-1/2 z-10 hidden md:block" />

              <div className={`w-full md:w-1/2 p-8 rounded-2xl glass ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className={`flex items-center mb-4 gap-3 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                    {exp.type === 'development' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                  </span>
                  <span className="text-emerald-400 font-mono text-sm uppercase tracking-wider">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg text-slate-300 font-medium mb-4">{exp.organization}</p>
                <p className="text-slate-400 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              {/* Empty space for grid alignment on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
