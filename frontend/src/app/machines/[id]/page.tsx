"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, Calendar, Activity, Cpu } from 'lucide-react';

const mockMachines = {
  '1': { _id: '1', name: 'Double Bottom Reversible Plough (SC-45)', category: 'Tractors', price: 85000, description: 'High-performance double bottom reversible plough designed for heavy-duty soil inversion.', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg'], specs: { power: '45-60 hp', usage: 'Soil preparation', engine: 'N/A' } },
  '2': { _id: '2', name: 'Multi-Crop Thresher (Labeled Diagram)', category: 'Harvesters', price: 120000, description: 'Versatile multicrop thresher with labeled components for easy operation and maintenance.', images: ['/images/WhatsApp Image 2026-04-07 at 6.43.56 PM.jpeg'], specs: { power: '35 hp', usage: 'Multi-grain threshing', engine: 'Tractor PTO' } },
  '3': { _id: '3', name: 'HD Plus Rotovator', category: 'Technology', price: 95000, description: 'Premium HD Plus rotovator for superior seedbed preparation.', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.47 AM.jpeg'], specs: { power: '40-50 hp', usage: 'Soil tilling', length: '7 ft' } },
  '4': { _id: '4', name: 'Heavy Duty Multi-Crop Thresher', category: 'Livestock', price: 45000, description: 'Robust multi-crop thresher designed for heavy-duty commercial use.', images: ['/images/WhatsApp Image 2026-04-09 at 11.50.46 AM.jpeg'], specs: { power: '5-10 hp', usage: 'Commercial threshing', transmission: 'Belt driven' } }
};

export default function MachineDetails() {
  const { id } = useParams();
  const [machine, setMachine] = useState<any>(null);
  const [showInterest, setShowInterest] = useState(false);
  useEffect(() => {
    setMachine(mockMachines[id as keyof typeof mockMachines]);
  }, [id]);

  const handleInterest = () => {
    alert("Interest recorded! Our dealers will contact you soon.");
    setShowInterest(true);
  };

  if (!machine) return <div className="min-h-screen pt-20 text-center text-gray-500 font-medium">Loading details...</div>;

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500 gap-2">
          <a href="/" className="hover:text-green-600">Home</a> &gt; 
          <a href="/machines" className="hover:text-green-600">Machinery</a> &gt; 
          <span className="text-gray-900 font-medium">{machine.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          {/* Image Gallery */}
          <div className="lg:w-1/2 p-6 lg:p-10 bg-gray-50 relative">
            <div className="relative h-96 sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-inner bg-gray-200 group">
              {machine.images?.[0] && (
                <Image 
                  src={machine.images[0]} 
                  alt={machine.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              )}
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-6">
              {machine.category}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              {machine.name}
            </h1>
            
            <p className="text-3xl font-light text-green-600 mb-8">
              ${machine.price?.toLocaleString()}
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-justify">
              {machine.description}
            </p>
            
            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><Activity size={20}/></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Power</p>
                  <p className="font-bold text-gray-900">{machine.specs?.power || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Cpu size={20}/></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Usage</p>
                  <p className="font-bold text-gray-900 text-sm">{machine.specs?.usage || 'N/A'}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleInterest}
              disabled={showInterest}
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${showInterest ? 'bg-gray-100 text-green-600 border-2 border-green-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-600/30'}`}
            >
              {showInterest ? <><ShieldCheck size={24}/> Interest Recorded</> : 'Show Interest'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">Record your interest and our dealers will follow up.</p>

          </div>
        </div>

      </div>
    </div>
  );
}
