"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { Tractor, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center bg-white/95 backdrop-blur-xl border border-gray-200 shadow-sm transition-all duration-300 ${scrolled ? 'rounded-2xl h-16 px-6 shadow-md' : 'rounded-3xl h-20 px-8'}`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-green-600 p-2 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
              <Tractor size={24} />
            </div>
            <span className="text-gray-900 font-extrabold text-2xl tracking-tight hidden sm:block">
              6S GreenTech
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6 lg:gap-8 items-center hidden lg:flex overflow-x-auto no-scrollbar">
            <NavLink href="/#intro">Intro</NavLink>
            <NavLink href="/#thresher">Thresher</NavLink>
            <NavLink href="/#shredder">Shredder</NavLink>
            <NavLink href="/#chaff-cutter">Chaff Cutter</NavLink>
            <NavLink href="/#rotovator">Rotovator</NavLink>
            <NavLink href="/#all-implements">All Implements</NavLink>
            <NavLink href="/#contact">Contact Us</NavLink>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/admin" className="text-sm font-bold text-green-700 hover:text-green-800 hover:bg-green-50 px-4 py-2.5 rounded-xl transition-all">
                    Dashboard
                  </Link>
                )}
                <div className="hidden sm:flex items-center bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mr-3">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700 font-semibold">{user.name}</span>
                </div>
                <button 
                  onClick={logout} 
                  className="text-sm font-bold text-gray-500 hover:bg-red-50 hover:text-red-600 px-4 py-2.5 rounded-xl transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-gray-900 px-3 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-gray-100 transition-all whitespace-nowrap">
                  Log in
                </Link>
                <Link href="/login?tab=register" className="group flex items-center gap-1 text-sm font-bold bg-green-600 text-white hover:bg-green-700 px-4 md:px-6 py-2 md:py-2.5 rounded-xl shadow-lg shadow-green-600/30 transition-all hover:shadow-green-600/50 hover:-translate-y-0.5 whitespace-nowrap">
                  <span>Sign up</span>
                  <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform hidden sm:block" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-600 font-medium hover:text-green-600 transition-colors py-2 text-sm">
      {children}
    </Link>
  );
}
