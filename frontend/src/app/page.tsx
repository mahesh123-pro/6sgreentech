"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveRight, Leaf, Shield, Zap, CircleDashed } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Spring animations for maximum "wow" factor
  const springVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15, mass: 1 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const charVariant = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: { opacity: 1, y: 0, rotateY: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  const titleChars = "AGRICULTURE".split("");

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-white overflow-hidden selection:bg-green-500 selection:text-white pb-32">
      
      {/* 1. IMMERSIVE HERO */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
          <Image
            src="/images/tractor_main.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Floating Glowing Orbs for ambiance */}
        <motion.div 
          animate={{ y: [0, -50, 0], x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] z-10" 
        />
        <motion.div 
          animate={{ y: [0, 50, 0], x: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] z-10" 
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Sparkles className="text-green-400" size={18} />
            <span className="text-sm font-bold tracking-widest uppercase text-gray-300">The Next Frontier of</span>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center overflow-hidden mb-6"
          >
            {titleChars.map((char, index) => (
              <motion.span 
                key={index} 
                variants={charVariant}
                className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mb-12 leading-relaxed"
          >
            We don't just build machinery. We forge the biomechanical heart of tomorrow’s harvest.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/machines">
              <button className="group relative px-10 py-5 bg-green-500 text-black rounded-full font-black text-lg overflow-hidden flex items-center gap-3">
                 <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                 <span className="relative z-10 flex items-center gap-2">Explore Fleet <MoveRight className="group-hover:translate-x-2 transition-transform duration-300"/></span>
              </button>
            </Link>
            <Link href="/about">
              <button className="group px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg hover:border-white transition-all flex items-center gap-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                Play Showreel <CircleDashed className="animate-[spin_4s_linear_infinite]" size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="relative py-10 bg-green-500 overflow-hidden flex whitespace-nowrap -rotate-2 transform scale-110 z-30 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Zero Emissions</span>
              <span className="text-black"><Leaf size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Maximum Yield</span>
              <span className="text-black"><Zap size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Autonomous Drive</span>
              <span className="text-black"><Shield size={40} /></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. PARALLAX BENTO GRID FEATURES */}
      <section className="py-40 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.h2 variants={springVariant} className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white leading-none">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Dominance.</span>
          </motion.h2>
          <motion.p variants={springVariant} className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Interactive intelligent systems encased in military-grade exo-skeletons. 
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]"
        >
          {/* Bento Box 1 */}
          <motion.div 
             variants={springVariant}
             className="md:col-span-8 relative rounded-[40px] overflow-hidden group border border-white/10"
          >
            <Image src="/images/tech_engine.png" alt="Engine" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <div className="w-14 h-14 bg-green-500 text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                <Zap size={28} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">Hyper-Torque Engines</h3>
              <p className="text-gray-300 text-lg max-w-md">Unleash thousands of pounds of torque instantly with our hybrid electric core, slicing through the toughest terrain.</p>
            </div>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div 
             variants={springVariant}
             className="md:col-span-4 bg-[#111] rounded-[40px] p-10 flex flex-col justify-between border border-white/10 group hover:bg-[#151515] transition-colors"
          >
            <div>
               <div className="flex justify-between items-start mb-8">
                  <Shield size={40} className="text-green-400" />
                  <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full text-green-300">Protected</span>
               </div>
               <h3 className="text-3xl font-bold text-white mb-4">Carbon Armor</h3>
               <p className="text-gray-400">Lightweight but impenetrable. Extensively tested in extreme weather to guarantee zero rust.</p>
            </div>
          </motion.div>

          {/* Bento Box 3 */}
          <motion.div 
             variants={springVariant}
             className="md:col-span-4 bg-[#111] rounded-[40px] p-10 flex flex-col justify-end border border-white/10 group hover:border-green-500/50 transition-colors relative overflow-hidden"
          >
             <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-green-500/10 transition-colors duration-500">
                <Leaf size={200} />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Zero Emissions</h3>
             <p className="text-gray-400 relative z-10">Fully electric models available. Harvest the land while saving the Earth.</p>
          </motion.div>

           {/* Bento Box 4 */}
           <motion.div 
             variants={springVariant}
             className="md:col-span-8 relative rounded-[40px] overflow-hidden group border border-white/10"
          >
            <Image src="/images/tech_drone.png" alt="Drone" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 z-0" />
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-1000 z-0" />
            <div className="absolute bottom-0 left-0 p-10 z-10 w-full flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-bold text-white mb-3">Aerial Intelligence</h3>
                <p className="text-gray-300 text-lg max-w-sm">Scan topography and moisture levels daily with autonomous drones.</p>
              </div>
              <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                 <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 4. IMMERSIVE GALLERY (Hover Expansion) */}
      <section className="py-20 relative border-y border-white/10 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto px-4 mb-16 flex justify-between items-end">
            <h2 className="text-4xl font-bold">The Fleet.</h2>
            <Link href="/machines" className="text-green-400 hover:text-green-300 flex items-center gap-2 group">
              View Catalog <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16}/>
            </Link>
         </div>
         
         <div className="flex flex-col md:flex-row h-[600px] gap-2 px-4 max-w-[100vw] overflow-hidden">
            {/* Gallery Item 1 */}
            <Link href="/machines?category=Tractors" className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[30px] overflow-hidden group">
               <Image src="/images/tractor_side.png" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Tractor" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-0" />
               <div className="absolute bottom-10 left-10 opacity-100 md:opacity-0 md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100 z-10">
                  <h3 className="text-4xl font-black italic tracking-tighter text-white mb-2">TRACTORS</h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-green-500 transition-all duration-700"></div>
               </div>
            </Link>
            {/* Gallery Item 2 */}
            <Link href="/machines?category=Harvesters" className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[30px] overflow-hidden group">
               <Image src="/images/harvester.png" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Harvester" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-0" />
               <div className="absolute bottom-10 left-10 opacity-100 md:opacity-0 md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100 z-10">
                  <h3 className="text-4xl font-black italic tracking-tighter text-white mb-2">HARVESTERS</h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-green-500 transition-all duration-700"></div>
               </div>
            </Link>
            {/* Gallery Item 3 */}
            <Link href="/machines?category=Irrigation" className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[30px] overflow-hidden group">
               <Image src="/images/irrigation.png" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Irrigation" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-0" />
               <div className="absolute bottom-10 left-10 opacity-100 md:opacity-0 md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100 z-10">
                  <h3 className="text-4xl font-black italic tracking-tighter text-white mb-2">IRRIGATION</h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-green-500 transition-all duration-700"></div>
               </div>
            </Link>
         </div>
      </section>

      {/* 5. GIGANTIC CTA */}
      <section className="py-40 flex justify-center items-center text-center px-4">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={springVariant}
           className="relative group"
         >
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-green-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
           
           <h2 className="relative z-10 text-6xl md:text-[100px] font-black tracking-tighter text-white mb-10 leading-none">
             START <br className="md:hidden"/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">COMMANDING.</span>
           </h2>
           
           <Link href="/login?tab=register">
             <button className="relative z-10 px-12 py-6 bg-white text-black rounded-full font-black text-xl md:text-2xl hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
               BECOME A PARTNER
             </button>
           </Link>
         </motion.div>
      </section>

    </div>
  );
}
