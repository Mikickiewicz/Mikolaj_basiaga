import { Wrench, Zap, Activity, Cpu, Code2, Binary, Waves } from 'lucide-react';

export default function LabAndSkills() {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800/50" id="lab">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Hardware Lab Section */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-5">
              <span className="w-8 md:w-12 h-1 bg-blue-500 rounded-full"></span>
              The Home Lab
            </h2>
            <p className="text-slate-400 md:text-lg mb-8 md:mb-12 leading-relaxed">
              Theory is good, but hands-on practice is where true engineering happens. 
              I am actively building out my personal hardware laboratory to design, test, and debug embedded systems from the ground up.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-slate-900 border border-slate-800 p-5 lg:p-7 rounded-xl hover:border-cyan-500/50 transition-colors group">
                <Activity className="w-6 h-6 lg:w-8 lg:h-8 text-slate-500 group-hover:text-cyan-400 mb-4 transition-colors" />
                <h3 className="text-white font-medium text-lg lg:text-xl mb-2">Oscilloscope</h3>
                <p className="text-sm lg:text-base text-slate-500">Real-time hardware debugging and analog signal analysis.</p>
              </div>
              
              <div className="bg-slate-900 border border-slate-800 p-5 lg:p-7 rounded-xl hover:border-blue-500/50 transition-colors group">
                <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-slate-500 group-hover:text-blue-400 mb-4 transition-colors" />
                <h3 className="text-white font-medium text-lg lg:text-xl mb-2">Bench Power Supply</h3>
                <p className="text-sm lg:text-base text-slate-500">Delivering reliable, adjustable power for custom PCB prototypes and embedded components.</p>
              </div>
              
              <div className="bg-slate-900 border border-slate-800 p-5 lg:p-7 rounded-xl hover:border-indigo-500/50 transition-colors group">
                <Waves className="w-6 h-6 lg:w-8 lg:h-8 text-slate-500 group-hover:text-indigo-400 mb-4 transition-colors" />
                <h3 className="text-white font-medium text-lg lg:text-xl mb-2">Function Generator</h3>
                <p className="text-sm lg:text-base text-slate-500">Generating standard and custom waveforms to test circuit responses and validate designs.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 lg:p-7 rounded-xl hover:border-emerald-500/50 transition-colors group">
                <Cpu className="w-6 h-6 lg:w-8 lg:h-8 text-slate-500 group-hover:text-emerald-400 mb-4 transition-colors" />
                <h3 className="text-white font-medium text-lg lg:text-xl mb-2">Logic Analyzer</h3>
                <p className="text-sm lg:text-base text-slate-500">Inspecting digital signals, communication protocols (I2C, SPI, UART, CAN), and timing verification.</p>
              </div>
              
              <div className="bg-slate-900 border border-slate-800 p-5 lg:p-7 rounded-xl hover:border-orange-500/50 transition-colors group md:col-span-2">
                <Wrench className="w-6 h-6 lg:w-8 lg:h-8 text-slate-500 group-hover:text-orange-400 mb-4 transition-colors" />
                <h3 className="text-white font-medium text-lg lg:text-xl mb-2">Manufacturing & Prototyping</h3>
                <p className="text-sm lg:text-base text-slate-500">3D printing (FDM), metalwork, Arduino sensor integration, and structural assembly.</p>
              </div>
            </div>
          </div>


          {/* Software Skills Section */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-5">
              <span className="w-8 md:w-12 h-1 bg-emerald-500 rounded-full"></span>
              Core Stack
            </h2>
            <p className="text-slate-400 md:text-lg mb-8 md:mb-12 leading-relaxed">
              My software stack revolves around performance optimization, robust memory management, and integrating hardware with advanced data analysis tools.
            </p>

            <div className="space-y-6 lg:space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 p-6 lg:p-8 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-4 lg:mb-6">
                  <Code2 className="w-5 h-5 lg:w-7 lg:h-7 text-cyan-400" />
                  <h3 className="text-lg lg:text-2xl font-medium text-white">Low-Level & Embedded</h3>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">C/C++</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-cyan-950 text-cyan-400 border border-cyan-800/50 text-sm lg:text-base rounded-md font-mono">Assembly</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Memory Management</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Microcontrollers</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Arduino / ESP</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Linux/Bash</span>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 lg:p-8 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-4 lg:mb-6">
                  <Binary className="w-5 h-5 lg:w-7 lg:h-7 text-blue-400" />
                  <h3 className="text-lg lg:text-2xl font-medium text-white">High-Level & Data</h3>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-blue-950 text-blue-400 border border-blue-800/50 text-sm lg:text-base rounded-md font-mono">Python</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Java</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">React + Vite</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">NumPy & Pandas</span>
                </div>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 p-6 lg:p-8 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-4 lg:mb-6">
                  <Wrench className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400" />
                  <h3 className="text-lg lg:text-2xl font-medium text-white">Engineering Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Git/GitHub</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">LaTeX</span>
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-slate-800 text-slate-300 text-sm lg:text-base rounded-md font-mono">Siemens NX</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
