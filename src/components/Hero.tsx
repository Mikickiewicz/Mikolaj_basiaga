import { Terminal, Cpu, Zap, Code2, Wrench, Activity, ChevronRight, Github, Linkedin, Mail, ArrowDown, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      "> _BOOT_SEQUENCE_INITIATED",
      "> LOADING KERNEL...",
      "> [OK] CORE_SYS MOUNTED",
      "> INITIALIZING HARDWARE MODULES... [CPU, MEM, I/O]",
      "> [OK] HARDWARE_SYNC_COMPLETE",
      "> COMPILING SOURCE...",
      "> _SYSTEM_ONLINE"
    ];
    
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIntroFinished(true), 800);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6"
          >
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span className="text-slate-500">root@sys-boot:~</span>
              </div>
              <div className="space-y-2 h-[220px]">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={line?.includes('[OK]') ? 'text-green-400' : line?.includes('_SYSTEM_ONLINE') ? 'text-cyan-400 font-bold' : 'text-slate-300'}
                  >
                    {line}
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-3 h-4 bg-cyan-400 mt-2"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Moving grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full mt-10 md:mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 md:px-5 md:py-2 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-cyan-400 font-mono text-sm md:text-base mb-8 md:mb-12 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          <span className="relative flex h-2 w-2 md:h-3 md:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-cyan-500"></span>
          </span>
          System Online
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-[80px] lg:text-[110px] font-bold tracking-tight text-white mb-6 md:mb-8 md:leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400">
            Mikołaj Basiaga
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-xl md:text-[28px] lg:text-[32px] text-slate-300 mb-10 md:mb-14 font-light"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <Terminal className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cyan-400" />
            <span>Computer Science @ <strong className="text-white font-medium">TU Delft</strong></span>
          </div>
          <span className="hidden md:block text-slate-700 md:text-4xl">•</span>
          <div className="flex items-center gap-2 md:gap-4">
            <Cpu className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-400" />
            <span>Embedded Systems @ <strong className="text-white font-medium">Hydro Motion</strong></span>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl lg:max-w-4xl text-lg md:text-[22px] lg:text-[26px] text-slate-400 leading-relaxed md:leading-relaxed lg:leading-relaxed mb-12 md:mb-16"
        >
          Bridging the gap between hardware and software. Building a solid foundation in electronics, 
          low-level programming, and embedded systems to create the next generation of efficient, 
          hardware-accelerated solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          <a href="#contact" className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-semibold md:text-xl lg:text-2xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2 md:gap-3">
              Contact Me
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
          <div className="flex items-center gap-3 md:gap-5 ml-4 md:ml-6">
            <a href="https://github.com/mikickiewicz" target="_blank" rel="noreferrer" className="p-4 md:p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:scale-110 shadow-lg">
              <Github className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/miko%C5%82aj-basiaga-58b235384/" target="_blank" rel="noreferrer" className="p-4 md:p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110 shadow-lg">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase font-mono text-cyan-400/80">Scroll</span>
        <div className="relative w-[32px] h-[52px] rounded-full border-2 border-cyan-500/30 flex justify-center p-1 shadow-[0_0_15px_rgba(6,182,212,0.2)] bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            animate={{ 
              y: [0, 16], 
              opacity: [1, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeOut" 
            }}
            className="w-1.5 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}

