"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaJs, FaNodeJs, FaReact, FaDatabase, FaAws, FaDocker, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostman, SiFirebase, SiRedux, SiSocketdotio, SiExpress, SiMui, SiChakraui, SiFramer, SiNginx, SiJest
} from "react-icons/si";

const skillData = [
  {
    category: "Languages & Core",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "MUI", icon: <SiMui className="text-blue-600" /> },
      { name: "Framer", icon: <SiFramer className="text-pink-500" /> },
    ],
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-zinc-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "AWS EC2", icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  }
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
        >
          My <span className="text-blue-600">Arsenal.</span>
        </motion.h2>
        <p className="text-zinc-500 mt-4 uppercase tracking-[0.3em] text-[10px] font-bold">
          Technical Expertise & Tooling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all group"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-8 border-l-2 border-blue-600 pl-4">
              {group.category}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col items-center gap-2 group/skill">
                  <div className="w-12 h-12 bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover/skill:border-blue-500/50 group-hover/skill:bg-blue-600/10 transition-all duration-300 shadow-inner">
                    <span className="text-2xl group-hover/skill:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/skill:text-white transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Concept Tags */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {[
          "DSA", "Performance Optimization", "UI/UX Principles", "Jest", "CI/CD Pipelines", 
          "JWT", "RBAC", "RESTful APIs", "Nodemailer", "Razorpay", "Socket.IO"
        ].map((concept) => (
          <span key={concept} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
            {concept}
          </span>
        ))}
      </motion.div>
    </section>
  );
}