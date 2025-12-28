
import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase">Connection</h2>
              <p className="text-5xl font-bold font-serif">Let's create something inevitable.</p>
            </div>

            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
              Whether you have a vision for a system, a curiosity about education, or simply want to share a thought—the door is always open.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@apo.dev" className="flex items-center space-x-4 group">
                <span className="p-3 rounded-xl glass group-hover:bg-emerald-500/10 transition-all">
                  <Mail className="text-emerald-500" />
                </span>
                <span className="text-lg font-medium group-hover:text-emerald-400 transition-colors">hello@apo.dev</span>
              </a>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: MessageCircle, href: '#' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="p-4 rounded-xl glass hover:bg-emerald-500/10 hover:text-emerald-500 transition-all"
                  >
                    <social.Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold">Message Received</h3>
                <p className="text-slate-400">Thank you, Habeebullah will be in touch soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-500 font-bold hover:underline"
                >
                  Send another?
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500 outline-none p-4 rounded-xl transition-all"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Your Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500 outline-none p-4 rounded-xl transition-all"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Your Inquiry</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project or vision..."
                    className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500 outline-none p-4 rounded-xl transition-all resize-none"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
