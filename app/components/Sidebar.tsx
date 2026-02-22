"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope
} from "react-icons/fa6";

const Sidebar = () => {
  const iconStyle = "text-zinc-500 hover:text-blue-500 transition-all duration-300 cursor-pointer hover:scale-125";
  
  return (
    <aside className="fixed left-0 top-0 h-full w-20 z-[100] hidden lg:flex flex-col items-center justify-between py-8 border-r border-white/5 bg-[#050505]/50 backdrop-blur-md">
      
    
      <motion.div 
        whileHover={{ rotate: 180 }}
        className="w-10 h-10 border-2 border-blue-600 rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(37,99,235,0.3)]"
      >
        MF
      </motion.div>

    
      <div className="flex flex-col items-center gap-7">
        
     
        <div className="group relative flex flex-col items-center">
          <FaLocationDot className={iconStyle} size={18} />
          <div className="absolute left-12 px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
            UAE 
          </div>
        </div>

        
        <div className="group relative flex flex-col items-center">
          <FaPhone className={iconStyle} size={16} />
          <div className="absolute left-12 px-3 py-1 bg-zinc-800 border border-white/10 text-zinc-300 text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
            +971 567271058
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />

        {/* Social Icons with Tooltips */}
        <div className="flex flex-col gap-6">
          <SocialIcon icon={<FaGithub size={20} />} label="Github" link="https://github.com/mashidafarsha" />
          <SocialIcon icon={<FaLinkedin size={20} />} label="LinkedIn" link="https://www.linkedin.com/in/mashida-farsha-tk-0145611a5/" />
          {/* <SocialIcon icon={<FaWhatsapp size={20} />} label="WhatsApp" link="" /> */}
          {/* <SocialIcon icon={<FaInstagram size={20} />} label="Instagram" link="#" /> */}
          <SocialIcon icon={<FaEnvelope size={19} />} label="Email" link="mashidafarshadev@gmail.com" />
        </div>

      </div>

      {/* 3. BOTTOM: VERTICAL TEXT */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[1px] h-10 bg-blue-600/50" />
        <p className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-black uppercase tracking-[0.5em] text-zinc-600 py-4">
          Protocol // 2026
        </p>
      </div>
    </aside>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ icon, label, link }: { icon: React.ReactNode, label: string, link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center">
    <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <span className="absolute left-10 bg-white text-black text-[8px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 uppercase tracking-tighter">
      {label}
    </span>
  </a>
);

export default Sidebar;