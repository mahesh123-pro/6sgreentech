"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tractor, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-500">
               <Image 
                 src="/images/new_logo.png" 
                 alt="6S GreenTech Logo" 
                 fill 
                 className="object-contain" 
               />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-2xl tracking-tighter uppercase leading-tight">
                6S <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">GREENTECH</span>
              </span>
              <span className="text-blue-400 text-[9px] font-black tracking-[0.4em] uppercase opacity-70">Agricultural Innovation</span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="flex gap-1 md:gap-4 lg:gap-6 items-center hidden md:flex">
            <NavLink href="/#intro">Intro</NavLink>
            <NavLink href="/#gallery">Real Impact</NavLink>
            <NavLink href="/#chaff-cutter">Technology</NavLink>
            <NavLink href="/machines">Fleet</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <MobileNavLink href="/#intro" onClick={() => setIsMobileMenuOpen(false)}>Intro</MobileNavLink>
              <MobileNavLink href="/#gallery" onClick={() => setIsMobileMenuOpen(false)}>Real Impact</MobileNavLink>
              <MobileNavLink href="/#chaff-cutter" onClick={() => setIsMobileMenuOpen(false)}>Technology</MobileNavLink>
              <MobileNavLink href="/machines" onClick={() => setIsMobileMenuOpen(false)}>Fleet Catalog</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Custom NavLink component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group/link text-gray-400 font-bold hover:text-white transition-colors py-2 px-3 text-[10px] uppercase tracking-[0.2em]">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 group-hover/link:w-full"></span>
    </Link>
  );
}
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode, onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-gray-300 font-black text-2xl tracking-tighter uppercase hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}
