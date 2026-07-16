import { ExternalLink, Code2, Gamepad2, Plane, Wrench, LineChart, Github } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 flex items-center gap-3 md:gap-5">
          <span className="w-8 md:w-12 h-1 bg-purple-500 rounded-full transition-colors"></span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          <TiltCard className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-colors group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <a href="https://europap.pl" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
              Europap.pl
            </h3>
            <p className="text-slate-400 md:text-lg leading-relaxed mb-6">
              My first commercial product. Designed and developed the full website and digital presence for Europap, showcasing practical web development and product delivery skills alongside my core engineering focus.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Web Development</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Commercial Product</span>
            </div>
          </TiltCard>

          <TiltCard className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-colors group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 transition-colors">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <a href="https://github.com/mikickiewicz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              Flappy Bird Clone
            </h3>
            <p className="text-slate-400 md:text-lg leading-relaxed mb-6">
              Built the classic Flappy Bird game entirely from scratch in C++ using Raylib. A great exercise in game loops, memory management, rendering, and low-level application architecture.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">C++</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Raylib</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Game Development</span>
            </div>
          </TiltCard>

          <TiltCard className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 transition-colors">
                <Plane className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              NH90 Fokker Horizontal Stabilizer Analysis
            </h3>
            <p className="text-slate-400 md:text-lg leading-relaxed mb-6">
              Studied the structural integrity and aerodynamic loads of the NH90 helicopter horizontal stabilizer. Analyzed material properties and stress distribution in critical flight regimes.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Structural Design</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Materials</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Aerodynamics</span>
            </div>
          </TiltCard>

          <TiltCard className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-orange-500/50 transition-colors group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400 transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
              Airbus A330 P2F Conversion – Linear Pin
            </h3>
            <p className="text-slate-400 md:text-lg leading-relaxed mb-6">
              Analyzed the mechanical design of a linear pin for Passenger-to-Freighter (P2F) cargo door conversions. Focused heavily on creating rigorous aerospace technical documentation and ensuring compliance with EASA aviation safety standards.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Aerospace Documentation</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">EASA Standards</span>
            </div>
          </TiltCard>

          <TiltCard className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-colors group flex flex-col h-full md:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 transition-colors">
                <LineChart className="w-6 h-6" />
              </div>
              <a href="https://github.com/mikickiewicz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              Flight Physics & Data Tools
            </h3>
            <p className="text-slate-400 md:text-lg leading-relaxed mb-6">
              Developed a lift calculator and data analysis tool for airfoil polar files (.dat) using Python. Automated repetitive aerodynamic calculations to improve engineering workflow efficiency.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Python</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">NumPy & Pandas</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs md:text-sm rounded-md font-mono">Data Analysis</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
