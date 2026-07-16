import { FlaskConical, Moon, ActivitySquare, Ban } from 'lucide-react';
import { motion } from 'motion/react';

interface ControlsProps {
  theme: 'dark' | 'lab';
  toggleTheme: () => void;
  showOscilloscope: boolean;
  toggleOscilloscope: () => void;
}

export default function Controls({ theme, toggleTheme, showOscilloscope, toggleOscilloscope }: ControlsProps) {
  return (
    <div className="fixed top-6 right-6 z-[100] flex items-center gap-3">
      {/* Oscilloscope Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={toggleOscilloscope}
        className="p-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all overflow-hidden group relative"
        aria-label="Toggle Oscilloscope"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div
            animate={{
              y: showOscilloscope ? 0 : -30,
              opacity: showOscilloscope ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
          >
            <ActivitySquare className="w-5 h-5" />
          </motion.div>
          
          <motion.div
            animate={{
              y: !showOscilloscope ? 0 : 30,
              opacity: !showOscilloscope ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
          >
            <Ban className="w-5 h-5" />
          </motion.div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-xs font-mono rounded text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {showOscilloscope ? 'Disable Oscilloscope' : 'Enable Oscilloscope'}
        </div>
      </motion.button>

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        onClick={toggleTheme}
        className="p-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all overflow-hidden group relative"
        aria-label="Toggle Theme"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div
            animate={{
              y: theme === 'dark' ? 0 : -30,
              opacity: theme === 'dark' ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
          >
            <FlaskConical className="w-5 h-5" />
          </motion.div>
          
          <motion.div
            animate={{
              y: theme === 'lab' ? 0 : 30,
              opacity: theme === 'lab' ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-xs font-mono rounded text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {theme === 'dark' ? 'Enable Lab Mode' : 'Enable Dark Mode'}
        </div>
      </motion.button>
    </div>
  );
}
