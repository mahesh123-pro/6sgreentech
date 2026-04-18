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
          {/* Background image and grid removed */}
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        </motion.div>



        {/* Ambiance Glows */}
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] z-10" 
        />

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">


          {/* Main Title */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center items-baseline mb-8 w-full gap-x-1 sm:gap-x-2"
          >
            {titleChars.map((char, index) => (
              <motion.span 
                key={index} 
                variants={charVariant}
                whileHover={{ scale: 1.1, y: -10 }}
                className={`text-[8.2vw] sm:text-7xl md:text-8xl lg:text-[130px] font-black tracking-tighter cursor-default ${index >= 3 ? 'text-green-500' : 'text-white'} drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Vision & Mission Statements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center max-w-4xl text-center gap-10 px-4"
          >
            <div className="flex flex-col items-center">
              <span className="text-green-500 font-bold text-[10px] tracking-[0.5em] uppercase mb-4 opacity-80">Our Vision</span>
              <h2 className="text-2xl md:text-4xl font-light italic text-white/90 tracking-tight leading-tight">
                "To make every field, every day, productive for <span className="text-green-500 font-semibold not-italic">all farmers</span>"
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col items-center">
              <span className="text-green-500 font-bold text-[10px] tracking-[0.5em] uppercase mb-4 opacity-80">Our Mission</span>
              <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                All kind of machinery for all kind of purpose with <br className="hidden md:block"/>
                <span className="text-white">best sales, spares and service</span>
              </p>
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
      <div className="relative py-6 md:py-10 bg-gradient-to-r from-green-600 to-green-800 overflow-hidden flex whitespace-nowrap -rotate-1 transform scale-110 z-30 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex gap-16 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Thresher</span>
              <span className="text-black"><Tractor size={40} /></span>
              <span className="text-4xl font-black text-black uppercase tracking-tighter">Shredder cum Pulverizer</span>
              <span className="text-black"><Zap size={40} /></span>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto h-auto">
               {[
                { id: '1', name: "Garden Shredder / Power Chaff Cutter", img: "WhatsApp Image 2026-04-06 at 9.56.24 PM.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '2', name: "Shredder cum pulverizer", img: "WhatsApp Image 2026-04-09 at 11.50.43 AM (1).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '3', name: "Multi-Crop Thresher Elite", img: "WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '4', name: "Maize Sheller Pro", img: "Maize sheller.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '5', name: "Reversible Hydraulic Plough", img: "Reversible hydraulic plough.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '6', name: "Industrial Chaff Cutter", img: "WhatsApp Image 2026-04-09 at 11.50.42 AM.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '7', name: "Multi-Crop Thresher Plus", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (1).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '8', name: "Power Thresher X1", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (2).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '9', name: "Compact Thresher Unit", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM (3).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '10', name: "High-Yield Thresher", img: "WhatsApp Image 2026-04-09 at 11.50.44 AM.jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '11', name: "Reversible Plough (SC-25)", img: "WhatsApp Image 2026-04-09 at 11.50.45 AM (1).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '12', name: "Hydraulic Plough Max", img: "WhatsApp Image 2026-04-09 at 11.50.45 AM (2).jpeg", span: "md:col-span-2 md:row-span-2" },
                { id: '13', name: "High capacity multi crop thresher", img: "WhatsApp Image 2026-04-16 at 9.55.05 PM.jpeg", span: "md:col-span-2 md:row-span-2" }
              ].map((item, idx) => (
                <Link key={idx} href={`/machines/${item.id}`} className={item.span}>
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
                     className="relative group overflow-hidden bg-black border border-white/5 h-full min-h-[350px]"
                  >
                   {/* Industrial Outer Frame */}
                   <div className="absolute inset-0 border-[0.5px] border-white/10 group-hover:border-green-500/50 transition-colors duration-700 z-20 pointer-events-none" />
                   
                   {/* Corner Accents */}
                   <div className="absolute top-0 left-0 w-6 h-6 border-t-[1px] border-l-[1px] border-white/0 group-hover:border-green-500 transition-all duration-500 z-30" />
                   <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1px] border-r-[1px] border-white/0 group-hover:border-green-500 transition-all duration-500 z-30" />

                   {/* Image Stage */}
                    <div className="absolute inset-0 bg-[#080808] group-hover:bg-[#0c0c0c] transition-colors duration-500" />
                    <div className="relative w-full h-full p-4 lg:p-8">
                      <div className="relative w-full h-full">
                        <Image 
                          src={`/images/${item.img}`}
                          alt={item.name}
                          fill
                          className="object-contain transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 filter brightness-[0.95] group-hover:brightness-110"
                        />
                      </div>
                      {/* Technical Grid Overlay */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    </div>

                   {/* Tech HUD Information - Enhanced for readability */}
                   <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Heavy gradient for text safety */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent h-[150%] -bottom-0 pointer-events-none" />
                      
                      <div className="relative p-8 pb-10 flex flex-col gap-1">
                         <div className="flex items-center gap-3 mb-1">
                            <motion.div 
                              animate={{ opacity: [0.4, 1, 0.4] }} 
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" 
                            />
                            <span className="text-[8px] font-mono text-green-500/60 tracking-[0.4em] font-black uppercase">REF_ID: 6SG/{idx + 100}</span>
                         </div>
                         <h3 className="text-sm md:text-base font-black tracking-[0.1em] text-white uppercase leading-tight drop-shadow-2xl mb-2">
                           {item.name}
                         </h3>
                         
                         {/* Minimal status revealed on hover */}
                         <div className="flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex items-center gap-2">
                               <span className="text-[7px] text-gray-500 uppercase font-black tracking-[0.2em]">Efficiency</span>
                               <span className="text-[8px] text-green-500 font-black">98.2%</span>
                            </div>
                            <div className="w-[1px] h-3 bg-white/10" />
                            <div className="flex items-center gap-2">
                               <span className="text-[7px] text-gray-500 uppercase font-black tracking-[0.2em]">Status</span>
                               <span className="text-[8px] text-white font-black">OPR_ACTIVE</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Background Scanning Line Effect */}
                   <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
                      <div className="w-full h-[0.5px] bg-green-500/20 absolute shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-scan" style={{ animationDuration: '4s' }} />
                   </div>
                 </motion.div>
               </Link>
              ))}
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
         
          <div className="flex flex-col md:flex-row h-auto md:h-[700px] gap-4 px-4 max-w-[100vw] overflow-hidden">
            {[
               { title: 'REVERSIBLE PLOUGH', img: '/images/WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg', cat: 'TRACTORS' },
               { title: 'MULTICROP THRESHER', img: '/images/WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg', cat: 'HARVESTERS' }
            ].map((item, idx) => (
               <Link key={idx} href={`/machines?category=${item.cat}`} className="relative h-[400px] md:h-full flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group overflow-hidden">
                  <Image src={item.img} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                  
                  <div className="absolute bottom-12 left-12 z-20 w-3/4">
                     <span className="text-green-500 text-[10px] font-black tracking-[0.5em] mb-2 block uppercase">{item.cat}</span>
                     <h3 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-white mb-4 leading-none">{item.title}</h3>
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
