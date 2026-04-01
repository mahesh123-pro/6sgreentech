"use client"
import { useState, useEffect } from 'react';
import { useStore } from '../../lib/store';
import { useRouter } from 'next/navigation';
import { Users, LogIn, Eye, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const { user, token } = useStore();
  const router = useRouter();
  
  const [stats, setStats] = useState({ totalUsers: 120, totalLogins: 450, totalViews: 1200 }); // Mock stats
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, router]);

  useEffect(() => {
    // Attempt to fetch stats
    fetch('http://localhost:5000/api/admin/stats', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if(data && data.totalUsers) setStats(data);
      })
      .catch(console.error);

    fetch('http://localhost:5000/api/admin/popular-machines', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if(data && Array.isArray(data)) setPopular(data as any);
      })
      .catch(console.error);
  }, [token]);

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-500 mb-10">Overview, metrics, and management tools.</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Stat Cards */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
               <Users size={28}/>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalUsers}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
               <LogIn size={28}/>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Logins</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalLogins}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
               <Eye size={28}/>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Views</p>
              <h3 className="text-2xl font-bold text-gray-900">{stats.totalViews}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
               <Activity size={28}/>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Platform Health</p>
              <h3 className="text-2xl font-bold text-gray-900">Good</h3>
            </div>
          </div>
        </div>

        {/* Machinery Management section stub */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12 flex flex-col items-start lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Machinery Management</h2>
            <p className="text-gray-500 max-w-lg">Add, edit, or delete existing machinery from the database, and update specifications or high-quality imagery.</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-600/30 transition-all whitespace-nowrap">
            + Add New Machine
          </button>
        </div>

      </div>
    </div>
  );
}
