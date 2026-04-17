"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-center px-6 pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Logo Icon */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-32 h-32 mx-auto mb-10"
        >
          <Image src="/images/logo.jpeg" alt="6S GreenTech Logo" fill className="object-contain filter drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
          ABOUT <span className="text-green-500">US.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 font-light">
          6S GreenTech is dedicated to revolutionizing agriculture through high-performance machinery and sustainable innovation. Our mission is to empower farmers with the world&apos;s most reliable and efficient technological tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl"
          >
            <ShieldCheck className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Reliability</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Built to withstand the toughest terrains and the longest harvest days.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl"
          >
            <Target className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Precision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Millimeter-perfect execution for maximum yield and zero wastage.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl"
          >
            <Sparkles className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Innovation</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Leading the charge in autonomous and eco-friendly farming tech.</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 pt-10 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs font-mono text-gray-600 tracking-[0.5em] uppercase italic">
            Engineered for Growth // Establishing the New Standard
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
