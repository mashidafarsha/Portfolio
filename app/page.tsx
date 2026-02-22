"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaBolt,
  FaEnvelope,
  FaLayerGroup
} from "react-icons/fa6";

// Components (ഇവ നിന്റെ components ഫോൾഡറിൽ ഉണ്ടെന്ന് ഉറപ്പുവരുത്തുക)
import Sidebar from "./components/Sidebar";
import SkillsSection from "./components/SkillsSection";
import SelectedWorks from "./components/SelectedWorks";

// --- DYNAMIC GEOMETRIC MESH BACKGROUND ---
const AnimatedMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.12)";
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    createParticles();
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-[#050505]" />;
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const ySpring = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]));

  return (
    <div className="min-h-screen text-white selection:bg-blue-600/30 font-sans relative overflow-x-hidden bg-[#050505]">
      {/* Background & Sidebar */}
      <AnimatedMesh />
      <Sidebar />
      
      {/* Ambient Glows */}
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center lg:pl-32">
          <div className="text-xl font-black tracking-tighter">
            MASHIDA <span className="text-blue-500"> FARSHA</span>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            <a href="#work" className="hover:text-blue-500 transition-colors">Work</a>
            <a href="#stack" className="hover:text-blue-500 transition-colors">Stack</a>
            {/* <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a> */}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-44 pb-20 lg:pl-32">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[70vh]">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6 text-blue-500">
                <FaLayerGroup className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Available for New Projects</span>
              </div>
              <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter uppercase mb-8">
  Code <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-white">Create</span> <br />
  Deploy<span className="text-blue-500">.</span>
</h1>

              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              Transforming ideas into powerful web applications. Specialized in MERN stack, React, and Node.js. <span className="text-white">Available for freelance projects.</span> 
              </p>

              <a 
  href="https://wa.me/+971567271058?text=Hi Mashida, I'm interested in starting a project with you!" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-wrap gap-5"
>
  <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-3 shadow-xl shadow-white/5 group">
    Start a Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
  </button>
</a>
            </motion.div>
          </div>

          {/* PROFILE CARD */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: ySpring }}
              className="relative p-6 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square border border-white/10 group">
                <img 
                  src="/profile.jpeg" 
                  alt="Mashida" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="mt-6 p-6 bg-black/40 rounded-[2rem] border border-white/5 backdrop-blur-md relative overflow-hidden group">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight uppercase">MASHIDA FARSHA </h3>
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Full Stack Developer</p>
                  </div>
                  {/* <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <FaEnvelope className="text-blue-500" />
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BENTO GRID STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          <div className="md:col-span-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] group hover:bg-blue-600/5 transition-all">
            <FaCode className="text-3xl text-blue-500 mb-6" />
            <h3 className="text-xl font-black mb-3 italic">CLEAN CODE</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Writing maintainable, scalable, and efficient code for modern web architectures.</p>
          </div>
          <div className="md:col-span-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] group hover:bg-yellow-500/5 transition-all">
            <FaBolt className="text-3xl text-yellow-500 mb-6" />
            <h3 className="text-xl font-black mb-3 italic">PERFORMANCE</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Optimizing assets and server response times for a flawless user experience.</p>
          </div>
          <a href="#work" className="md:col-span-1 block"> 
  <div className="h-full bg-blue-600 p-10 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-2xl shadow-blue-600/20 transition-transform active:scale-95">
    <h3 className="text-2xl font-black leading-tight z-10 uppercase tracking-tighter italic text-white">
      Explore <br /> Projects
    </h3>
    <FaArrowRight className="text-3xl z-10 -rotate-45 group-hover:rotate-0 transition-transform text-white" />
    
    {/* Background Glow Animation */}
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
  </div>
</a>
        </div>

        {/* IMPORTED SECTIONS */}
        <div id="stack" className="mt-20">
          <SkillsSection />
        </div>
        
        <div id="work" className="mt-20">
          <SelectedWorks />
        </div>

      </main>

      <footer className="relative z-10 py-16 text-center border-t border-white/5 lg:pl-32">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-600">
          Designed & Engineered by Mashida Farsha © 2026
        </p>
      </footer>
    </div>
  );
}