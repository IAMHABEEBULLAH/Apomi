
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase">Expertise</h2>
            <p className="text-5xl font-bold font-serif">Tools & Crafts</p>
          </div>
          <p className="text-slate-400 max-w-sm">
            A curated stack of technologies I've mastered to build, scale, and teach modern systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="glass p-8 rounded-2xl group hover:border-emerald-500/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-400 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
