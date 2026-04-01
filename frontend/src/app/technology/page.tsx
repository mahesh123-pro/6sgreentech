"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Wind, Satellite, ShieldCheck } from "lucide-react";

export default function TechnologyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#050505] text-white min-h-screen pt-20 selection:bg-green-500 selection:text-black">
      
      {/* 1. Hero Title */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-[#050505] to-[#050505] z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <p className="text-green-500 font-bold tracking-[0.2em] mb-6 uppercase text-sm md:text-base">Pioneering the impossible</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            INTELLIGENCE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-600">UNLEASHED.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Discover the hyper-advanced systems powering the fleet of tomorrow. From millimeter-precision GPS to fully autonomous neural drives.
          </p>
        </motion.div>
      </section>

      {/* 2. Feature 1: Autonomous Drive (Sticky Parallax) */}
      <ParallaxSection 
        title="Autonomous Neural Drive"
        desc="Our proprietary AI core allows vehicles to autonomously map, navigate, and harvest entirely unassisted. Deep learning algorithms adapt to soil conditions and weather events in real-time, operating 24/7 without fatigue."
        imageSrc="/images/autonomous_tractor.png"
        icon={<Cpu size={40} className="text-green-400" />}
        align="left"
      />

      {/* 3. Feature 2: Precision Ag Sensors */}
      <ParallaxSection 
        title="Micro-Precision Sensors"
        desc="At the heart of every machine lies a dense network of glowing data nodes. Scanning foliage health, moisture latency, and nitrogen levels cell by cell, we guarantee every drop of water and inch of fertilizer is perfectly deployed."
        imageSrc="/images/precision_ag.png"
        icon={<Satellite size={40} className="text-blue-400" />}
        align="right"
      />

      {/* 4. Feature 3: Drone Fleet Coordination */}
      <ParallaxSection 
        title="Aerial Fleet Coordination"
        desc="A symphony in the sky. Swarms of intelligent drones fly in seamless formation to execute aerial seeding, hyper-targeted spraying, and thermal topology scans, streaming 8k agricultural data directly to your dashboard."
        imageSrc="/images/drone_fleet.png"
        icon={<ShieldCheck size={40} className="text-yellow-400" />}
        align="left"
      />

      {/* 5. Feature 4: Deep Sustainability */}
      <ParallaxSection 
        title="Total Ecosystem Harmony"
        desc="High-yield farming no longer costs the earth. By pairing fully electric powertrains with our precision ecosystem, we dramatically slash carbon output, paving the way for complete agricultural sustainability."
        imageSrc="/images/sustainability.png"
        icon={<Wind size={40} className="text-teal-400" />}
        align="right"
      />

      {/* 6. Footer CTA */}
      <section className="py-40 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 blur-[150px] rounded-full w-[800px] h-[800px] -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-0" />
        <h2 className="text-5xl md:text-7xl font-black mb-10 relative z-10">THE FUTURE IS NOW.</h2>
        <button className="relative z-10 bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
          UPGRADE YOUR FLEET
        </button>
      </section>

    </div>
  );
}

function ParallaxSection({ title, desc, imageSrc, icon, align }: { title: string, desc: string, imageSrc: string, icon: React.ReactNode, align: "left" | "right" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className={`max-w-7xl mx-auto w-full flex flex-col gap-12 lg:gap-24 items-center ${align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        
        {/* Text Block */}
        <motion.div 
          style={{ opacity }}
          className="lg:w-5/12 z-20 flex flex-col items-start"
        >
          <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            {icon}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            {desc}
          </p>
        </motion.div>

        {/* Image Block with Parallax */}
        <div className="lg:w-7/12 w-full h-[50vh] lg:h-[80vh] relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
          <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
            <Image 
              src={imageSrc} 
              alt={title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
