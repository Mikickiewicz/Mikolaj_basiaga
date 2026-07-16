import { Cpu, Zap, Activity, Waves, GraduationCap, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Timeline() {
  const experiences = [
    {
      title: 'Embedded Systems Engineer',
      organization: 'TU Delft Hydro Motion Team',
      date: '2026 - 2027',
      icon: <Waves className="w-5 h-5 text-cyan-400 transition-colors" />,
      description: 'Developing mission-critical embedded systems and low-level software for a hydrogen-powered boat. Focusing on hardware-software integration, real-time constraints, and reliability.',
      highlight: true,
    },
    {
      title: 'BSc Computer Science',
      organization: 'Delft University of Technology (TU Delft)',
      date: '2026 - 2029',
      icon: <GraduationCap className="w-5 h-5 text-blue-400 transition-colors" />,
      description: 'Deepening my theoretical knowledge in algorithms, system architecture, and software engineering. Combining rigorous CS fundamentals with hands-on hardware engineering.',
      highlight: false,
    },
    {
      title: 'BSc Aeronautical Engineering (Foundation Year)',
      organization: 'Inholland University of Applied Sciences, Delft',
      date: '2025 - 2026',
      icon: <Activity className="w-5 h-5 text-slate-400 transition-colors" />,
      description: 'A highly valuable year where I discovered my true passion for electronics and low-level programming. This experience pivoted my focus entirely toward embedded systems and hardware.',
      highlight: false,
    },
    {
      title: 'Advanced Mathematics & Physics',
      organization: 'II High School, Nowy Sącz, Poland',
      date: '2021 - 2025',
      icon: <BookOpen className="w-5 h-5 text-slate-400 transition-colors" />,
      description: 'Built a strong foundation in exact sciences and logical problem-solving, paving the way for my engineering and computer science studies.',
      highlight: false,
    }
  ];

  return (
    <section className="pt-32 pb-24 relative" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 flex items-center gap-3 md:gap-5">
          <span className="w-8 md:w-12 h-1 bg-cyan-500 rounded-full transition-colors"></span>
          Journey & Experience
        </h2>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0" style={{ perspective: "1000px" }}>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 md:mb-16 relative pl-8 md:pl-16 group">
              <div className={`absolute -left-[21px] md:-left-[25px] top-1 md:top-2 p-2 md:p-3 rounded-full border border-slate-800 bg-slate-950 transition-all ${exp.highlight ? 'ring-2 ring-cyan-500/30' : 'group-hover:border-cyan-500/50'}`}>
                {exp.icon}
              </div>
              
              <TiltCard className="transition-transform group-hover:scale-[1.02] origin-left">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2 md:mb-4">
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-colors ${exp.highlight ? 'text-white' : 'text-slate-200'}`}>
                    {exp.title}
                  </h3>
                  <span className="text-cyan-400 font-mono text-sm md:text-base transition-colors">{exp.date}</span>
                </div>
                
                <div className="text-slate-400 font-medium md:text-lg mb-3 md:mb-4">{exp.organization}</div>
                
                <p className="text-slate-500 md:text-lg leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
