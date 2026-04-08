"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { Tractor, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`transition-all duration-500 w-full ${scrolled ? 'max-w-5xl px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`relative flex justify-between items-center transition-all duration-500 overflow-hidden ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-full h-16 px-6' 
            : 'bg-transparent border-transparent h-20 px-2'
        }`}>
          
          {/* Subtle glow effect behind nav when scrolled */}
          {scrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 pointer-events-none" />
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="bg-green-500 p-2 rounded-xl text-black transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <Tractor size={scrolled ? 20 : 24} />
            </div>
            <span className={`font-black tracking-tight uppercase flex items-center transition-all ${scrolled ? 'text-xl text-white' : 'text-2xl text-white drop-shadow-lg'} hidden sm:block`}>
              6S<span className="text-green-500">GreenTech</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-4 lg:gap-8 items-center hidden lg:flex overflow-x-auto no-scrollbar relative z-10">
            <NavLink href="/#intro">Intro</NavLink>
            <NavLink href="/#thresher">Thresher</NavLink>
            <NavLink href="/#shredder">Shredder</NavLink>
            <NavLink href="/#chaff-cutter">Chaff Cutter</NavLink>
            <NavLink href="/#rotovator">Rotovator</NavLink>
            <NavLink href="/#all-implements">All Implements</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3 relative z-10">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/admin" className="text-xs font-bold uppercase tracking-widest text-green-400 hover:text-green-300 transition-colors">
                    Dashboard
                  </Link>
                )}
                <div className="hidden sm:flex items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-black flex items-center justify-center font-bold mr-2 text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-xs text-gray-300 font-semibold">{user.name}</span>
                </div>
                <button 
                  onClick={logout} 
                  className="text-xs font-bold uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors ml-2"
                >
                  Exit
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-xs font-bold tracking-widest uppercase text-gray-300 hover:text-white px-3 md:px-5 py-2 transition-colors whitespace-nowrap">
                  Login
                </Link>
                <Link href="/login?tab=register" className="group flex items-center gap-2 text-xs font-black tracking-widest uppercase bg-white text-black hover:bg-green-500 hover:text-black px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all whitespace-nowrap">
                  <span>Sign Up</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform hidden sm:block" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// Custom NavLink component with sleek underline effect
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group text-gray-300 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors py-2">
      {children}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </Link>
  );
}
