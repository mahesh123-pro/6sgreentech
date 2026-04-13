"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tractor, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center transition-all duration-500 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl h-14 px-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-transparent h-20 px-4'}`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-green-500 p-2 rounded-xl text-black transform group-hover:rotate-[360deg] transition-transform duration-700 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <Tractor size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl tracking-tighter uppercase">
                6S GreenTech
              </span>
              <span className="text-green-500 text-[8px] font-bold tracking-[0.3em] uppercase">Autonomous Fleet</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-1 md:gap-4 lg:gap-6 items-center hidden md:flex">
            <NavLink href="/#intro">Intro</NavLink>
            <NavLink href="/#gallery">Real Impact</NavLink>
            <NavLink href="/#chaff-cutter">Technology</NavLink>
            <NavLink href="/machines">Fleet</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>

          {/* Action Button Removed */}
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group/link text-gray-400 font-bold hover:text-white transition-colors py-2 px-3 text-[10px] uppercase tracking-[0.2em]">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover/link:w-full"></span>
    </Link>
  );
}
