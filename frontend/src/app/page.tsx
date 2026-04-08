"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveRight, Leaf, Shield, Zap, CircleDashed, Mail, Phone, MapPin, Send } from "lucide-react";
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

  const titleChars = "AGRICULTURE".split("");

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-white overflow-hidden selection:bg-green-500 selection:text-white scroll-smooth">
      
      {/* 1. INTRO / HERO */}
      <section id="intro" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
          <Image
            src="/images/img1.jpeg"
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
            className="flex justify-center overflow-hidden mb-6 w-full"
          >
            {titleChars.map((char, index) => (
              <motion.span 
                key={index} 
                variants={charVariant}
                className="text-[10vw] sm:text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center px-4"
          >
            <Link href="/machines" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative px-6 py-4 md:px-10 md:py-5 bg-green-500 text-black rounded-full font-black text-base md:text-lg overflow-hidden flex items-center justify-center gap-3">
                 <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                 <span className="relative z-10 flex items-center gap-2">Explore Fleet <MoveRight className="group-hover:translate-x-2 transition-transform duration-300"/></span>
              </button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group px-6 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 text-white rounded-full font-medium text-base md:text-lg hover:border-white transition-all flex items-center justify-center gap-3 relative overflow-hidden">
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

      {/* 2. THRESHER */}
      <section id="thresher" className="py-32 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={springVariant}
            className="order-2 lg:order-1"
          >
            <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">Engineered for Efficiency</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">THRESHE<span className="text-green-500">R</span></h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Our advanced threshers redefine grain separation. With high-speed centrifugal technology and precision airflow, achieve 99.9% purity in half the time. Built for heavy-duty harvests and minimal grain loss.
            </p>
            <div className="flex gap-6">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">99%</span>
                  <span className="text-sm text-gray-500 uppercase tracking-tighter">Purity Rate</span>
               </div>
               <div className="w-[1px] h-12 bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">2.5x</span>
                  <span className="text-sm text-gray-500 uppercase tracking-tighter">Faster Processing</span>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden order-1 lg:order-2 group"
          >
            <Image src="/images/img2.jpeg" alt="Thresher" fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 3. SHREDDER */}
      <section id="shredder" className="py-32 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center bg-[#0d0d0d] rounded-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden group"
          >
            <Image src="/images/img3.jpeg" alt="Shredder" fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={springVariant}
          >
            <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">Waste to Wealth</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">SHREDDE<span className="text-green-500">R</span></h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Tackle crop residue with industrial power. Our shredders pulverize stalks and biomass into fine mulch, enriching your soil instantly. High-torque engines ensure nothing stands in your way.
            </p>
            <ul className="space-y-4">
               {['Military-grade blades', 'Adjustable cutting height', 'Eco-friendly mulch production'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {item}
                 </li>
               ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. CHAFF CUTTER */}
      <section id="chaff-cutter" className="py-32 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <Image src="/images/img4.jpeg" alt="Chaff Cutter" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-700" />
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
            <Image src="/images/img5.jpeg" alt="Rotovator" fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
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
         
         <div className="flex flex-col md:flex-row h-[700px] gap-2 px-4 max-w-[100vw] overflow-hidden">
            {[
               { title: 'TRACTORS', img: '/images/img6.jpeg', cat: 'Tractors' },
               { title: 'HARVESTERS', img: '/images/img7.jpeg', cat: 'Harvesters' },
               { title: 'PRECISION AG', img: '/images/img8.jpeg', cat: 'Technology' },
               { title: 'IRRIGATION', img: '/images/img9.jpeg', cat: 'Irrigation' }
            ].map((item, idx) => (
               <Link key={idx} href={`/machines?category=${item.cat}`} className="relative flex-1 md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[40px] overflow-hidden group">
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
                        <p className="text-xl font-bold">contact@6sgreentech.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                        <Phone size={28} />
                     </div>
                     <div>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call Us</span>
                        <p className="text-xl font-bold">+91 98765 43210</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Visit Us</span>
                        <p className="text-xl font-bold">Innovation Hub, Agritech Park, Hyderabad</p>
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

      {/* FOOTER CTA REPLACEMENT */}
      <section className="py-32 bg-green-600 text-black flex flex-col items-center justify-center text-center px-4 mt-20">
         <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">JOIN THE <br />REVOLUTION.</h2>
         <Link href="/login?tab=register">
            <button className="px-12 py-6 bg-black text-white rounded-full font-black text-xl md:text-2xl hover:scale-110 transition-transform shadow-2xl">
               START COMMANDING NOW
            </button>
         </Link>
         <div className="mt-20 pt-10 border-t border-black/10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-bold">© 2026 6S GREENTECH. ALL RIGHTS RESERVED.</span>
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
