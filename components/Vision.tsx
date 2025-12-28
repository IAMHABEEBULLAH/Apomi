
import React from 'react';
import { Feather } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-emerald-500/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <Feather className="mx-auto text-emerald-500 opacity-50" size={48} />
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold italic">
          The Philosophy of Permanence
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed italic">
          <p>
            "In an industry obsessed with the next six months, I choose to focus on the next sixty years."
          </p>
          <p>
            "I build because creation is the only way to answer entropy. 
            I teach because knowledge is the only thing that grows when shared. 
            Impact is not measured in lines of code, but in the silence of a system that just works."
          </p>
        </div>
        
        <div className="pt-8">
          <p className="text-emerald-500 font-mono tracking-widest uppercase text-sm">Vision 2024 — ∞</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
