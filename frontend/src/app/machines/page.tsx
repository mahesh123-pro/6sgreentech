"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Use a mock array if backend is not available, but let's try fetching first.
// I will include mock data as a fallback to ensure the demo is always beautiful and working.

const mockMachines = [
  { _id: '1', name: 'Garden Shredder / Power Chaff Cutter', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-06 at 9.56.24 PM.jpeg'], specs: { power: '5 HP' } },
  { _id: '2', name: 'Shredder cum pulverizer', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.43 AM (1).jpeg'], specs: { power: '30 HP' } },
  { _id: '3', name: 'Multi-Crop Thresher Elite', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg'], specs: { power: '35 HP' } },
  { _id: '4', name: 'Maize Sheller Pro', category: 'Harvesters', images: ['/images/Maize sheller.jpeg'], specs: { power: '20 HP' } },
  { _id: '5', name: 'Reversible Hydraulic Plough', category: 'Tractors', images: ['/images/Reversible hydraulic plough.jpeg'], specs: { power: '45+ HP' } },
  { _id: '6', name: 'Industrial Chaff Cutter', category: 'Livestock', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.42 AM.jpeg'], specs: { power: '7.5 HP' } },
  { _id: '7', name: 'Multi-Crop Thresher Plus', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (1).jpeg'], specs: { power: '35 HP' } },
  { _id: '8', name: 'Power Thresher X1', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (2).jpeg'], specs: { power: '25 HP' } },
  { _id: '9', name: 'Compact Thresher Unit', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (3).jpeg'], specs: { power: '15 HP' } },
  { _id: '10', name: 'High-Yield Thresher', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM.jpeg'], specs: { power: '40 HP' } },
  { _id: '11', name: 'Reversible Plough (SC-25)', category: 'Tractors', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM (1).jpeg'], specs: { power: '35 HP' } },
  { _id: '12', name: 'Hydraulic Plough Max', category: 'Tractors', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM (2).jpeg'], specs: { power: '50 HP' } },
  { _id: '13', name: 'High capacity multi crop thresher', category: 'Harvesters', images: ['/images/WhatsApp Image 2026-04-16 at 9.55.05 PM.jpeg'], specs: { power: '60 HP' } },
];

export default function MachineryListing() {
  const [machines, setMachines] = useState(mockMachines);
  const [category, setCategory] = useState('');

  const filteredMachines = category ? machines.filter(m => m.category === category) : machines;

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white pt-32 pb-24 selection:bg-green-500 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6">
              FLEET <span className="text-green-500">CATALOG.</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Precision-engineered implements designed for maximum productivity and long-term durability in the toughest field conditions.
            </p>
          </div>
          
          {/* Filters */}
          <div className="w-full md:w-auto">
            <div className="relative group">
              <select 
                className="w-full md:w-64 appearance-none bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all cursor-pointer hover:bg-white/10"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" className="bg-black">All Categories</option>
                <option value="Tractors" className="bg-black">Tractors</option>
                <option value="Harvesters" className="bg-black">Harvesters</option>
                <option value="Irrigation" className="bg-black">Irrigation Systems</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-green-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMachines.map((machine, idx) => (
            <Link href={`/machines/${machine._id}`} key={machine._id} className="group relative block h-[400px] sm:h-[500px] overflow-hidden rounded-[40px] border border-white/5 bg-neutral-900/50">
              {/* Background Decoration */}
              <div className="absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] font-mono text-white tracking-[0.3em]">6SG-MOD_{idx+1}</span>
              </div>

              {/* Image Container */}
              <div className="absolute inset-0 p-8 pt-16 flex flex-col">
                <div className="relative flex-grow w-full mb-8 overflow-hidden rounded-3xl">
                  {machine.images?.[0] && (
                    <Image 
                      src={machine.images[0]} 
                      alt={machine.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000"
                    />
                  )}
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">{machine.category}</span>
                  </div>
                  <h3 className="text-3xl font-black italic tracking-tighter text-white uppercase mb-2 leading-none">
                    {machine.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{machine.specs?.power}</span>
                    <span className="flex items-center gap-2 text-green-500 font-black text-xs uppercase tracking-widest">
                      Detail <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
