"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "TRUE CARE",
    description: "Advanced Hospital Management System with MERN. Features real-time doctor-patient chat, integrated Razorpay for plan purchases, and an automated slot booking system for seamless scheduling.",

    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop", 
    tags: ["MERN Stack", "Socket.io", "Razorpay", "Redux"],
    features: ["Online Slot Booking", "Live Chat", "Payment Gateway"],
    github: "#",
    live: "#"
  },
  {
    title: "FreshShop Organic",
    description: "A premium farm-to-table e-commerce solution focused on organic produce. Built with a robust cart system, secure checkout flow, and detailed order tracking for a seamless shopping experience.",
   
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop", 
    tags: ["Next.js", "Redux Toolkit", "Node.js", "Razorpay"],
    features: ["Dynamic Cart & Wishlist", "Razorpay Payment", "Real-time Order History"],
    github: "#",
    live: "#"
  },
  {
    title: "Home service",
    description: "A multi-vendor home service platform with specialized flows for Admins, Service Providers, and Users. Features a robust verification system, real-time booking management, and tiered service categorization.",
   
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop", 
    tags: ["Node.js", "Express","Typscript", "MongoDB"],
    features: ["Multi-Role Dashboards", "Provider Verification Flow", "Real-time Notifications"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather tracking application with interactive maps, detailed forecasts, and location-based updates.",
    
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop", 
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    features: ["Interactive Maps", "Live Forecasts", "Location Updates"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart Todo List",
    description: "A clean, efficient task management tool with drag-and-drop organization, categories, and local storage persistence.",
   
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop", 
    tags: ["React", "TypeScript", "Local Storage"],
    features: ["Drag-and-Drop", "Categorization", "Local Persistence"],
    github: "#",
    live: "#"
  }
];

export default function SelectedWorks() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
   
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          className="text-3xl md:text-4xl font-black uppercase tracking-[0.3em] text-white"
        >
          Selected Works
        </motion.h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col"
          >
            
            <div className="relative aspect-video overflow-hidden border-b border-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="text-zinc-400 hover:text-white transition-colors">
                    <FaArrowUpRightFromSquare size={18} />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6 italic">
                {project.description}
              </p>

             
              <div className="mb-8 space-y-2">
                {project.features?.map((feat, fidx) => (
                   <div key={fidx} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                      <div className="w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                      {feat}
                   </div>
                ))}
              </div>

        
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-md bg-blue-600/5 border border-blue-600/20 text-[8px] font-black uppercase tracking-widest text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}