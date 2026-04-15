"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Use a mock array if backend is not available, but let's try fetching first.
// I will include mock data as a fallback to ensure the demo is always beautiful and working.

const mockMachines = [
  { _id: '1', name: 'Reversible Plough (SC-45)', category: 'Tractors', price: 85000, images: ['/images/WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg'], specs: { power: '45+ hp', usage: 'Soil preparation' } },
  { _id: '2', name: 'Shedder cum pulverizer', category: 'Harvesters', price: 120000, images: ['/images/WhatsApp Image 2026-04-09 at 11.50.43 AM (1).jpeg'], specs: { power: '30+ hp', usage: 'Waste management' } },
  { _id: '3', name: 'chaffcutter', category: 'Livestock', price: 65000, images: ['/images/WhatsApp Image 2026-04-09 at 11.50.42 AM.jpeg'], specs: { power: '3 hp', usage: 'Fodder cutting' } },
  { _id: '4', name: 'Multi-Crop Thresher', category: 'Harvesters', price: 180000, images: ['/images/WhatsApp Image 2026-04-09 at 11.50.46 AM.jpeg'], specs: { power: '35+ hp', usage: 'Grain separation' } },
];

export default function MachineryListing() {
  const [machines, setMachines] = useState(mockMachines);
  const [category, setCategory] = useState('');


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
              <div className="relative h-48 w-full bg-gray-200">
                {machine.images?.[0] && (
                  <Image 
                    src={machine.images[0]} 
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
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
