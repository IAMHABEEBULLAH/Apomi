
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase">Portfolio</h2>
          <p className="text-5xl font-bold font-serif">Selected Works</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-[#121212] rounded-3xl overflow-hidden border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-500 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8 flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-slate-800 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center space-x-4">
                  <a href="#" className="flex items-center text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors">
                    Case Study <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/10 rounded-3xl pointer-events-none transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-lg italic">
            "We build not just for the user, but for the future developer who will inherit the mission."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
