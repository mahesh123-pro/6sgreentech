"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                times: [0, 0.5, 1]
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-8"
            >
              <Image
                src="/images/logo.jpeg"
                alt="6S GreenTech Logo"
                fill
                className="object-contain filter drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                priority
              />
            </motion.div>

            {/* Loading Text / Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white mb-2">
                6S <span className="text-green-500">GREENTECH</span>
              </h2>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700"
                />
              </div>
            </motion.div>

            {/* Background Ambiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -z-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
