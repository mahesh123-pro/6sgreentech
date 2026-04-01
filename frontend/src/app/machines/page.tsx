"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Use a mock array if backend is not available, but let's try fetching first.
// I will include mock data as a fallback to ensure the demo is always beautiful and working.

const mockMachines = [
  { _id: '1', name: 'John Deere 8RX', category: 'Tractors', price: 320000, images: ['/images/tractor_main.png'], specs: { power: '410 hp', usage: 'Heavy plowing' } },
  { _id: '2', name: 'Case IH Axial-Flow', category: 'Harvesters', price: 450000, images: ['/images/harvester.png'], specs: { power: '550 hp', usage: 'Wheat, Corn harvesting' } },
  { _id: '3', name: 'Valley Center Pivot', category: 'Irrigation', price: 150000, images: ['/images/irrigation.png'], specs: { power: 'Electric 480V', usage: 'Large scale watering' } },
  { _id: '4', name: 'Massey Ferguson 8S', category: 'Tractors', price: 210000, images: ['/images/tractor_side.png'], specs: { power: '265 hp', usage: 'General farm work' } },
];

export default function MachineryListing() {
  const [machines, setMachines] = useState(mockMachines);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch from backend
    fetch('http://localhost:5000/api/machines')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setMachines(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredMachines = category ? machines.filter(m => m.category === category) : machines;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">All Machinery</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select 
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 shadow-sm focus:ring-green-500 focus:border-green-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Tractors">Tractors</option>
          <option value="Harvesters">Harvesters</option>
          <option value="Irrigation">Irrigation Systems</option>
        </select>
        {/* Additional filters can go here */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredMachines.map(machine => (
          <Link href={`/machines/${machine._id}`} key={machine._id} className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 w-full bg-gray-100">
                <Image 
                  src={machine.images[0] || '/images/tractor_main.png'} 
                  alt={machine.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-green-600 bg-green-50 w-fit px-2 py-1 rounded mb-2">{machine.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{machine.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{machine.specs?.power} • {machine.specs?.usage}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${machine.price?.toLocaleString()}</span>
                  <span className="text-green-600 font-medium text-sm">View Details &rarr;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
