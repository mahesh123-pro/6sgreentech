"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, Calendar, Activity, Cpu } from 'lucide-react';
import { useStore } from '../../../lib/store';

const mockMachines = {
  '1': { _id: '1', name: 'John Deere 8RX', category: 'Tractors', price: 320000, description: 'The 8RX is designed to minimize soil compaction and maximize power. Experience a smooth ride and advanced precision ag technology.', images: ['/images/tractor_main.png'], specs: { power: '410 hp', usage: 'Heavy plowing, large scale operations', engine: '9.0L 6-Cylinder' } },
  '2': { _id: '2', name: 'Case IH Axial-Flow', category: 'Harvesters', price: 450000, description: 'Ultimate harvesting efficiency with minimal grain loss. Automated settings adjust to conditions on-the-go.', images: ['/images/harvester.png'], specs: { power: '550 hp', usage: 'Wheat, Corn harvesting', engine: '12.9L FPT' } },
  '3': { _id: '3', name: 'Valley Center Pivot', category: 'Irrigation', price: 150000, description: 'The most reliable center pivot system in the industry, featuring smart telemetry for remote water management.', images: ['/images/irrigation.png'], specs: { power: 'Electric 480V', usage: 'Large scale watering', length: 'Up to 2,800 ft' } },
  '4': { _id: '4', name: 'Massey Ferguson 8S', category: 'Tractors', price: 210000, description: 'Award-winning design featuring the Protect-U cab installation for superior comfort and visibility.', images: ['/images/tractor_side.png'], specs: { power: '265 hp', usage: 'General farm work', transmission: 'Dyna-E-Power' } }
};

export default function MachineDetails() {
  const { id } = useParams();
  const [machine, setMachine] = useState<any>(null);
  const [showInterest, setShowInterest] = useState(false);
  const { token } = useStore();

  useEffect(() => {
    // Attempt fetch
    fetch(`http://localhost:5000/api/machines/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data._id) setMachine(data);
        else setMachine(mockMachines[id as keyof typeof mockMachines]);
      })
      .catch((err) => {
        setMachine(mockMachines[id as keyof typeof mockMachines]);
      });
  }, [id]);

  const handleInterest = async () => {
    if (!token) {
      alert("Please log in to show interest");
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ machineryId: id })
      });
      if (res.ok) {
        setShowInterest(true);
        alert("Interest recorded! Our dealers will contact you soon.");
      } else {
        const error = await res.json();
        alert(error.message || "Failed to record interest");
      }
    } catch (e) {
      alert("Simulated interest success. (Backend offline)");
      setShowInterest(true);
    }
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
            <div className="relative h-96 sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-inner">
              <Image 
                src={machine.images[0] || '/images/tractor_main.png'} 
                alt={machine.name}
                fill
                className="object-cover"
              />
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
