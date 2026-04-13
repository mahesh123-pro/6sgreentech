"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveRight, Leaf, Shield, Zap, CircleDashed, Mail, Phone, MapPin, Send, Tractor } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  // Spring animations for maximum "wow" factor
  const springVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      transition: { type: "spring" as const, stiffness: 50, damping: 15, mass: 1 } 
    }
  } satisfies Variants;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  } satisfies Variants;

  const charVariant = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: { opacity: 1, y: 0, rotateY: 0, transition: { type: "spring" as const, stiffness: 100, damping: 10 } }
  } satisfies Variants;

  const titleChars = "6S GREENTECH".split("");

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-white overflow-hidden selection:bg-green-500 selection:text-white scroll-smooth">
      
      {/* 1. CINEMATIC HERO */}
      <section id="intro" className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-black">
        {/* Deep Background Layers */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div 
            animate={{ scale: [1, 1.03, 1], x: [-10, 10, -10] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute inset-0"
          >
            <Image
              src="/images/futuristic_tractor_hero.png"
              alt="Hero Background"
              fill
              className="object-cover object-center opacity-40 mix-blend-lighten scale-110"
              priority
            />
          </motion.div>
          
          {/* Pulsing Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grain-y.com/wp-content/uploads/2023/10/grid.png')] opacity-20 invert mix-blend-overlay pointer-events-none" />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        </motion.div>

        {/* Floating Technical Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent z-20 opacity-30 shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          />
          <div className="absolute top-[10%] left-[5%] text-[25vw] font-black text-white/[0.02] tracking-tighter leading-none select-none z-0">6SG</div>
        </div>

        {/* Ambiance Glows */}
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] z-10" 
        />

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
             <div className="h-[1px] w-12 bg-green-500/50" />
             <span className="text-[10px] font-black tracking-[0.5em] uppercase text-green-500">Industry Protocol 6.0</span>
             <div className="h-[1px] w-12 bg-green-500/50" />
          </motion.div>

          {/* Main Title */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-nowrap justify-center items-baseline mb-8 w-full"
          >
            {titleChars.map((char, index) => (
              <motion.span 
                key={index} 
                variants={charVariant}
                whileHover={{ scale: 1.1, y: -10, color: index < 2 ? "#4ade80" : "#fff" }}
                className={`text-[8.2vw] sm:text-7xl md:text-8xl lg:text-[130px] font-black tracking-tighter cursor-default ${index < 2 ? 'text-green-500' : 'text-white'} drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="relative"
          >
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl text-center leading-tight tracking-tight mb-4">
              Forging the <span className="text-white font-medium">Bionomic Core</span> of tomorrow's harvest.
            </p>
            <div className="flex justify-center gap-4 mt-8 opacity-50">
               {['Autonomous', 'Electric', 'Precision'].map((tag) => (
                 <div key={tag} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{tag}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
        >
           <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">Scroll to Explore</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-green-500 to-transparent" />
        </motion.div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <div className="relative py-6 md:py-10 bg-green-500 overflow-hidden flex whitespace-nowrap -rotate-2 transform scale-110 z-30 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Thresher</span>
              <span className="text-black"><Tractor size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Shredder</span>
              <span className="text-black"><Zap size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Chaff Cutter</span>
              <span className="text-black"><Leaf size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Rotovator</span>
              <span className="text-black"><Shield size={40} /></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. REAL FIELD GALLERY */}
      <section id="gallery" className="py-32 relative px-4 bg-[#050505]">
          <div className="max-w-7xl mx-auto mb-20">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center"
             >
                <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">REAL IMPACT. <span className="text-green-500">REAL RESULTS.</span></h2>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto">Witness our machinery in action across diverse terrains, delivering precision and power to every harvest.</p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
             {[
               { name: "Unit S-TX 400", img: "WhatsApp Image 2026-04-06 at 9.56.24 PM.jpeg" },
               { name: "Neural Plough v2", img: "WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg" },
               { name: "Bio-Harvest Pro", img: "WhatsApp Image 2026-04-09 at 11.50.42 AM.jpeg" },
               { name: "Precision Shredder", img: "WhatsApp Image 2026-04-09 at 11.50.43 AM.jpeg" },
               { name: "Field Commander X1", img: "WhatsApp Image 2026-04-09 at 11.50.43 AM (1).jpeg" },
               { name: "Eco-Tiller Elite", img: "WhatsApp Image 2026-04-09 at 11.50.43 AM (2).jpeg" },
               { name: "Smart Chaff Gen-5", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM.jpeg" },
               { name: "Autonomous Unit 07", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (1).jpeg" },
               { name: "Digital Harvester", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (2).jpeg" },
               { name: "Soil Analyzer v4", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (3).jpeg" },
               { name: "Heavy Duty Thresher", img: "WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg" },
               { name: "Kinetic Rotovator", img: "WhatsApp Image 2026-04-09 at 11.50.46 AM.jpeg" }
             ].map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                   whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                   whileHover={{ 
                      y: -20, 
                      scale: 1.05, 
                      rotateX: idx % 2 === 0 ? 3 : -3,
                      rotateY: idx % 3 === 0 ? 3 : -3,
                      boxShadow: "0px 30px 60px rgba(34, 197, 94, 0.4)",
                      transition: { type: "spring", stiffness: 150, damping: 15 }
                   }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ 
                      opacity: { duration: 1 },
                      y: { duration: 1, ease: "easeOut" }
                   }}
                   className="relative h-[450px] rounded-[40px] overflow-hidden group border border-white/10 bg-[#111]"
                >
                   <Image 
                      src={`/images/${item.img}`} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-all duration-[4s] ease-out group-hover:scale-110 group-hover:rotate-1" 
                   />
                   
                   {/* Gradient Overlays */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 transition-opacity duration-1000 group-hover:opacity-50" />
                   
                   {/* Scanning Light Effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                   
                   {/* Floating Tech Tag */}
                   <div className="absolute bottom-8 left-8 right-8 z-20">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3 w-fit"
                      >
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                         <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{item.name}</span>
                      </motion.div>
                   </div>

                   {/* Corner Accents */}
                   <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
             ))}
          </div>
      </section>

      {/* 4. CHAFF CUTTER */}
      <section id="chaff-cutter" className="py-32 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <Image src="/images/futuristic_drone_hero.png" alt="Drone Background" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={springVariant}
            className="order-2 lg:order-1"
          >
            <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">Livestock Nutrition</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">CHAFF <span className="text-green-500">CUTTER</span></h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Precision cutting for superior fodder. Our electric chaff cutters deliver uniform lengths for better digestion and zero wastage. Designed for safety, speed, and silence.
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-green-500 transition-colors">
               Technical Specs
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden order-1 lg:order-2 group bg-[#111] p-8 border border-white/5"
          >
            <Image src="/images/real_yellow_cutter.png" alt="Chaff Cutter" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-10 right-10 bg-green-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
               <span className="text-green-400 text-sm font-bold">New Gen 4.0</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. ROTOVATOR */}
      <section id="rotovator" className="py-32 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center bg-gradient-to-b from-transparent to-green-950/20 rounded-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, rotateY: -45 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden group"
          >
            <Image src="/images/real_rotavator.png" alt="Rotovator" fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={springVariant}
          >
            <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">Soil Mastery</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">ROTOVATO<span className="text-green-500">R</span></h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              The ultimate seedbed preparation. Our rotovators feature heavy-duty gearboxes and boron steel blades that crumble the toughest soil into a perfect tilth. Prepare your land for greatness.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {['Boron Steel Blades', 'Multi-speed Gearbox', 'Adjustable Trailing Board', 'Oil-immersed Drive'].map((tag, i) => (
                 <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                    {tag}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. ALL IMPLEMENTS */}
      <section id="all-implements" className="py-32 relative border-y border-white/10 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto px-4 mb-20">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col md:flex-row justify-between items-end gap-6"
            >
               <div>
                  <h2 className="text-6xl font-black italic tracking-tighter">ALL <span className="text-green-500">IMPLEMENTS.</span></h2>
                  <p className="text-gray-400 mt-4 max-w-xl text-lg">Explore our full catalog of next-generation agricultural technology solutions.</p>
               </div>
               <Link href="/machines" className="px-8 py-4 bg-green-500 text-black font-black rounded-full hover:bg-white transition-all flex items-center gap-2 group">
                  EXPLORE CATALOG <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20}/>
               </Link>
            </motion.div>
         </div>
         
         <div className="flex flex-col md:flex-row h-auto md:h-[700px] gap-2 px-4 max-w-[100vw] overflow-hidden">
            {[
               { title: 'TRACTOR PLOUGH', img: '/images/WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg', cat: 'Tractors' },
               { title: 'MULTI THRESHER', img: '/images/WhatsApp Image 2026-04-09 at 11.50.46 AM.jpeg', cat: 'Harvesters' },
               { title: 'CHAFF CUTTERS', img: '/images/WhatsApp Image 2026-04-09 at 11.50.47 AM.jpeg', cat: 'Technology' },
               { title: 'ROTOVATORS', img: '/images/WhatsApp Image 2026-04-09 at 11.50.46 AM (1).jpeg', cat: 'Irrigation' }
            ].map((item, idx) => (
               <Link key={idx} href={`/machines?category=${item.cat}`} className="relative h-[400px] md:h-full flex-1 md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[40px] overflow-hidden group">
                  <Image src={item.img} fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                  <div className="absolute bottom-12 left-12 opacity-100 md:opacity-0 md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100 z-20">
                     <h3 className="text-5xl font-black italic tracking-tighter text-white mb-2">{item.title}</h3>
                     <div className="h-[3px] w-0 group-hover:w-full bg-green-500 transition-all duration-700"></div>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* 7. CONTACT US */}
      <section id="contact" className="py-40 relative px-4 flex justify-center items-center overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">GET IN <br /><span className="text-green-500">TOUCH.</span></h2>
               <p className="text-xl text-gray-400 mb-12 max-w-md">Ready to upgrade your harvest? Our experts are standing by to build your custom fleet.</p>
               
               <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                        <Mail size={28} />
                     </div>
                     <div>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Us</span>
                        <p className="text-xl font-bold">6sgreentech@gmail.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                        <Phone size={28} />
                     </div>
                     <div>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call Us</span>
                        <p className="text-xl font-bold">+91 73380 62746</p>
                        <p className="text-sm text-gray-500">K. Venu Gopal</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all shrink-0">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Visit Us</span>
                        <p className="text-xl font-bold text-wrap break-words max-w-sm">Vinayaka Circle, Bypass Road, Gauribidanur – 561208, Karnataka, India</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-[#111] border border-white/10 p-10 md:p-14 rounded-[40px] relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                        <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition-all" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition-all" />
                  </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                     <textarea rows={4} placeholder="How can we help your farm?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-green-500 text-black font-black text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1 group/btn">
                     SEND MESSAGE <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </motion.div>
         </div>
      </section>

      {/* DEALERSHIP CTA */}
      <section className="py-32 bg-green-600 text-black flex flex-col items-center justify-center text-center px-4 mt-20">
         <span className="font-bold tracking-widest uppercase mb-4 block text-green-900 border border-green-900/30 px-4 py-2 rounded-full">Partner With Us</span>
         <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none max-w-5xl">OWN A <br />DEALERSHIP.</h2>
         <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl px-4 text-green-950">
            Secure exclusive territory rights and bring next-generation agricultural machinery to your region. High margins, full technical support, and premium branding.
         </p>
         <Link href="#contact">
            <button className="px-12 py-6 bg-black text-white rounded-full font-black text-xl md:text-2xl hover:scale-110 transition-transform shadow-2xl flex items-center justify-center gap-3 group">
               APPLY NOW <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
         </Link>
         <div className="mt-20 pt-10 border-t border-black/10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-bold">© 2026 6S GREEN TECH. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-8 font-bold">
               <a href="#" className="hover:underline">PRIVACY</a>
               <a href="#" className="hover:underline">TERMS</a>
               <a href="#" className="hover:underline">INSTAGRAM</a>
            </div>
         </div>
      </section>

    </div>
  );
}
