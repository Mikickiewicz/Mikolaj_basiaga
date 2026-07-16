import { useEffect, useRef } from 'react';

interface OscilloscopeBackgroundProps {
  theme: 'dark' | 'lab';
  enabled: boolean;
}

export default function OscilloscopeBackground({ theme, enabled }: OscilloscopeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let lastFrameTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = (now: number) => {
      const dt = (now - lastFrameTime) / 1000;
      lastFrameTime = now;
      time += Math.min(dt, 0.1); // Cap dt to avoid huge jumps

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLab = theme === 'lab';
      // Cyan for dark theme, Neon Green for lab theme
      const r = isLab ? 34 : 34;
      const g = isLab ? 197 : 211;
      const b = isLab ? 94 : 238;

      // Subtle Grid
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.05)`;
      ctx.lineWidth = 1;
      const gridSize = 100;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      const centerY = canvas.height / 2;
      const sweepSpeed = 150; // Pixels per second
      const trailLength = canvas.width * 0.75; // Trail fades over 75% of screen

      const getSignal = (x: number, cycle: number) => {
          const type = Math.abs(cycle) % 4;
          
          if (type === 0) {
              // Pure Sine
              return Math.sin(x * 0.015) * 100;
          } else if (type === 1) {
              // PWM Square Wave
              return ((x % 300) < 150 ? 1 : -1) * 80;
          } else if (type === 2) {
              // Triangle Wave
              const p = x % 300;
              return p < 150 ? -100 + p * 1.33 : 100 - (p - 150) * 1.33;
          } else {
              // Capacitor Charge/Discharge (RC circuit)
              const p = x % 300;
              if (p < 150) {
                  return -80 + 160 * (1 - Math.exp(-p / 30));
              } else {
                  return 80 - 160 * (1 - Math.exp(-(p - 150) / 30));
              }
          }
      };

      const drawTrace = (startX: number, endX: number, alphaStart: number, alphaEnd: number, cycleOffset: number) => {
          if (startX >= endX) return;
          
          const gradient = ctx.createLinearGradient(startX, 0, endX, 0);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alphaStart})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${alphaEnd})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alphaEnd * 0.8})`;
          
          ctx.beginPath();
          let hasStarted = false;
          let prevY: number | null = null;
          
          for (let x = startX; x <= endX; x += 2) {
              const y = centerY + getSignal(x, cycleOffset);
              if (!hasStarted) {
                  ctx.moveTo(x, y);
                  hasStarted = true;
              } else {
                  // If there's a big jump (PWM), draw a vertical connector
                  if (prevY !== null && Math.abs(y - prevY) > 20) {
                      ctx.lineTo(x, prevY);
                  }
                  ctx.lineTo(x, y);
              }
              prevY = y;
          }
          ctx.stroke();
      };

      const cycle = Math.floor((time * sweepSpeed) / canvas.width);
      const beamX = (time * sweepSpeed) % canvas.width;
      
      // 1. Draw current sweep (left side of beam)
      const startX = Math.max(0, beamX - trailLength);
      const alphaStart = startX > 0 ? 0 : 1 - (beamX / trailLength);
      drawTrace(startX, beamX, alphaStart, 1, cycle);
      
      // 2. Draw previous sweep tail (right side of screen, wrapping around)
      if (beamX < trailLength) {
          const tailLen = trailLength - beamX;
          const tailStartX = canvas.width - tailLen;
          drawTrace(tailStartX, canvas.width, 0, alphaStart, cycle - 1);
      }

      // 3. Draw bright glowing beam head
      const currentY = centerY + getSignal(beamX, cycle);
      ctx.beginPath();
      ctx.arc(beamX, currentY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
      ctx.shadowBlur = 25;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 1)`;
      ctx.fill();

      ctx.shadowBlur = 0; // Reset for next frame

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[0] mix-blend-screen transition-opacity duration-1000 ${enabled ? 'opacity-60' : 'opacity-0'}`}
    />
  );
}
