
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-900 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xl font-bold font-serif italic text-emerald-500">APO</p>
          <p className="text-xs font-mono tracking-widest text-slate-600 uppercase">Habeebullah — Software Developer & Educator</p>
        </div>

        <div className="text-center italic text-slate-500 text-sm max-w-xs">
          "The code we write today is the archaeology of tomorrow."
        </div>

        <div className="text-xs text-slate-700 font-mono">
          &copy; {new Date().getFullYear()} Centered for Excellence. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
