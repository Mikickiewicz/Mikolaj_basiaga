/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import LabAndSkills from './components/LabAndSkills';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import Controls from './components/Controls';
import OscilloscopeBackground from './components/OscilloscopeBackground';

import { Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'lab'>('dark');
  const [showOscilloscope, setShowOscilloscope] = useState(true);
  const [emailRevealed, setEmailRevealed] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'lab' : 'dark');
  };

  const toggleOscilloscope = () => {
    setShowOscilloscope(prev => !prev);
  };

  return (
    <main className={`min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-700 ${theme === 'lab' ? 'theme-lab' : ''}`}>
      <OscilloscopeBackground theme={theme} enabled={showOscilloscope} />
      <CustomCursor />
      <Controls 
        theme={theme} 
        toggleTheme={toggleTheme} 
        showOscilloscope={showOscilloscope}
        toggleOscilloscope={toggleOscilloscope}
      />
      <Hero />
      <Timeline />
      <Projects />
      <LabAndSkills />
      
      {/* Contact & Footer */}
      <footer id="contact" className="py-24 text-center border-t border-slate-900 mt-12 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setEmailRevealed(true)}
              className="inline-flex items-center gap-2 bg-slate-900 border border-cyan-900/50 hover:bg-slate-800 hover:border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              {emailRevealed ? 'mikibass321@gmail.com' : 'Email Me'}
            </button>
            <a href="https://www.linkedin.com/in/miko%C5%82aj-basiaga-58b235384/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 border border-blue-900/50 hover:bg-slate-800 hover:border-blue-500/50 text-blue-400 px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 w-full sm:w-auto justify-center">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900/50 text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} M. Basiaga. Building the embedded future.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
