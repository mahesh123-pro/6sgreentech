"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, Calendar, Activity, Cpu } from 'lucide-react';

const mockMachines: Record<string, any> = {
  '1': { 
    id: '1', 
    name: 'Garden Shredder / Power Chaff Cutter', 
    category: 'Harvesters', 
    description: 'A revolutionary dual-purpose machine engineered for modern livestock and waste management. It seamlessly transitions between high-precision chaff cutting for fodder and industrial-grade shredding for organic waste reduction.', 
    images: ['/images/WhatsApp Image 2026-04-06 at 9.56.24 PM.jpeg'], 
    specs: { power: '5 HP Electric', capacity: '500kg/hr', blades: 'Hardened Steel' } 
  },
  '2': { 
    id: '2', 
    name: 'Shredder cum pulverizer', 
    category: 'Waste Management', 
    description: 'Designed for heavy-duty agricultural processing, this machine pulverizes crop residue into fine organic mulch, significantly accelerating decomposition and soil enrichment.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.43 AM (1).jpeg'], 
    specs: { power: '30 HP PTO', capacity: '2 Tons/hr', RPM: '2800' } 
  },
  '3': { 
    id: '3', 
    name: 'Multi-Crop Thresher Elite', 
    category: 'Harvesters', 
    description: 'The Elite thresher is the gold standard for grain harvesting. Its advanced multi-stage separation technology ensures 99% grain purity with virtually zero damage to delicate seeds.', 
    images: ['/images/WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg'], 
    specs: { power: '35 HP Plus', purity: '99.9%', drive: 'Belt & Gear' } 
  },
  '4': { 
    id: '4', 
    name: 'Maize Sheller Pro', 
    category: 'Harvesters', 
    description: 'A high-speed shelling unit optimized for large-scale maize production. Features an automated cob-ejection system and precision kernels separation for maximum efficiency.', 
    images: ['/images/Maize sheller.jpeg'], 
    specs: { power: '20 HP', capacity: '1.5 Tons/hr', mobile: 'Yes' } 
  },
  '5': { 
    id: '5', 
    name: 'Reversible Hydraulic Plough', 
    category: 'Tractors / Implements', 
    description: 'Engineered for deep-level soil inversion. The hydraulic reversible mechanism allows for seamless field navigation without the need for manual adjustment, saving time and fuel.', 
    images: ['/images/reversible_hydraulic_plough.jpeg'], 
    specs: { bottoms: '2-3 Furrow', depth: '12-14 inches', hitch: 'Cat II' } 
  },
  '6': { 
    id: '6', 
    name: 'Industrial Chaff Cutter', 
    category: 'Livestock', 
    description: 'The ultimate fodder preparation solution for commercial dairy farms. Built with military-grade durability to handle consistent 24/7 operation with minimal maintenance.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.42 AM.jpeg'], 
    specs: { power: '7.5 HP', rolls: 'Hardened 4-Roll', safety: 'Auto-Stop' } 
  },
  '7': { 
    id: '7', 
    name: 'Multi-Crop Thresher Plus', 
    category: 'Harvesters', 
    description: 'An upgraded version of our standard thresher, the Plus model features an extended separation chamber for higher throughput and better ventilation during processing.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (1).jpeg'], 
    specs: { length: '60 inch', blower: 'Dual Fan', capacity: 'High' } 
  },
  '8': { 
    id: '8', 
    name: 'Power Thresher X1', 
    category: 'Harvesters', 
    description: 'Compact yet powerful, the X1 is designed for mid-sized farms needing reliable threshing power in tight field conditions.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (2).jpeg'], 
    specs: { power: '25 HP', crops: 'Bajara, Wheat, Ragi', weight: '850kg' } 
  },
  '9': { 
    id: '9', 
    name: 'Compact Thresher Unit', 
    category: 'Harvesters', 
    description: 'Specially designed for small-scale farmers, this unit offers the same precision as our industrial models in a highly portable and efficient package.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM (3).jpeg'], 
    specs: { power: '15 HP', drive: 'Electric/Diesel', port: 'Mobile Hitch' } 
  },
  '10': { 
    id: '10', 
    name: 'High-Yield Thresher', 
    category: 'Harvesters', 
    description: 'The High-Yield model is optimized for maximum volume extraction. It features a high-torque engine interface to handle the densest of crop inputs without clogging.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.44 AM.jpeg'], 
    specs: { torque: 'Ultra High', screen: 'Vibration Assist', cleaning: 'Triple Sieve' } 
  },
  '11': { 
    id: '11', 
    name: 'Reversible Plough (SC-25)', 
    category: 'Implements', 
    description: 'A medium-duty reversible plough that provides exceptional control and precision in varied soil types.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM (1).jpeg'], 
    specs: { weight: '450kg', frames: 'Box Pipe', blades: 'Boru Steel' } 
  },
  '12': { 
    id: '12', 
    name: 'Hydraulic Plough Max', 
    category: 'Implements', 
    description: 'The Max model features enhanced hydraulic cylinders for faster response times and deeper penetration in hard soil conditions.', 
    images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM (2).jpeg'], 
    specs: { pressure: '180 Bar', depth: '16 inch', width: 'Adjustable' } 
  },
  '13': { 
    id: '13', 
    name: 'High capacity multi crop thresher', 
    category: 'Harvesters', 
    description: 'Our most powerful threshing solution to date. Engineered for industrial-scale agricultural operations where speed and volume are the primary requirements.', 
    images: ['/images/WhatsApp Image 2026-04-16 at 9.55.05 PM.jpeg'], 
    specs: { power: '60 HP PTO', width: '72 inch', speed: 'Industrial' } 
  }
};

export default function MachineDetails() {
  const { id } = useParams();
  const [machine, setMachine] = useState<any>(null);
  const [showInterest, setShowInterest] = useState(false);

  useEffect(() => {
    if (id) {
       setMachine(mockMachines[id as string]);
    }
  }, [id]);

  if (!machine) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
       <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-24 selection:bg-green-500 selection:text-black">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in">
           <Link href="/machines" className="text-xs font-black tracking-widest uppercase hover:text-green-500 transition-colors py-2 border-b border-white/10 group flex items-center gap-2">
              <Activity size={12} className="text-green-500" /> Back to Fleet
           </Link>
           <div className="w-1 h-1 bg-white/20 rounded-full" />
           <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">UNIT_REF: 6SG-{machine.id.padStart(3, '0')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Image Stage */}
          <div className="relative group perspective-1000">
             <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl bg-neutral-900 group-hover:border-green-500/30 transition-all duration-700">
                <Image 
                  src={machine.images[0]} 
                  alt={machine.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Visual HUD Accents */}
                <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                   <ChevronRight className="text-green-500 animate-pulse" size={20} />
                </div>
                <div className="absolute bottom-8 right-8 text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] -rotate-90 origin-bottom-right">
                   6S GreenTech // Engineering Dept
                </div>
             </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col">
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="px-4 py-1.5 bg-green-500 text-black font-black text-[10px] uppercase tracking-widest rounded-full">
                      {machine.category}
                   </div>
                   <div className="px-4 py-1.5 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-full">
                      High-Performance
                   </div>
                </div>

                <h1 className="text-3xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-8 leading-[0.9] md:leading-none">
                  {machine.name.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-green-500">{machine.name.split(' ').slice(-1)}</span>.
                </h1>

                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 border-l-2 border-green-500/20 pl-6 md:pl-8 italic">
                   "{machine.description}"
                </p>

                {/* Specs Bento */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                   {Object.entries(machine.specs).map(([key, value]: [string, any]) => (
                      <div key={key} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors group">
                         <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-2 block">{key}</span>
                         <span className="text-lg font-black tracking-tight text-white group-hover:text-green-500 transition-colors uppercase italic">{value}</span>
                      </div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                   <button 
                     onClick={() => alert("Interest recorded!")}
                     className="flex-1 bg-green-500 text-black px-12 py-6 rounded-[28px] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] flex items-center justify-center gap-3"
                   >
                      ACQUIRE UNIT <ChevronRight size={20} />
                   </button>
                   <Link href="/#contact" className="flex-1 border border-white/10 bg-white/5 text-white px-12 py-6 rounded-[28px] font-black text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                      SUPPORT <ShieldCheck size={20} />
                   </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 opacity-30">
                   <p className="text-[8px] font-mono tracking-[0.4em] uppercase uppercase">
                      Operational Note: Warranty includes 24 months of on-site precision calibration and gear assembly maintenance.
                   </p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
