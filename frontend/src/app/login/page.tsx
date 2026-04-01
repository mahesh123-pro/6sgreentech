"use client"
import { useState } from 'react';
import { useStore } from '../../lib/store';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const { login } = useStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Switch between real and mock mode based on backend availability
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const body = isLogin ? { email, password } : { name, email, password, role };
      
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      const data = await res.json();
      if (res.ok) {
        login(data.user, data.token);
        router.push(data.user.role === 'admin' ? '/admin' : '/');
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      console.log('Backend not available, using mock auth');
      // Mock auth
      login({ id: '1', name: name || 'Demo User', email, role: role }, 'mock-jwt-token');
      router.push(role === 'admin' ? '/admin' : '/');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm font-medium">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {!isLogin && (
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
               <input 
                 type="text" required 
                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                 value={name} onChange={e => setName(e.target.value)} 
               />
             </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" required 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
              value={email} onChange={e => setEmail(e.target.value)} 
            />
          </div>
          
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
             <input 
               type="password" required 
               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
               value={password} onChange={e => setPassword(e.target.value)} 
             />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                value={role} onChange={e => setRole(e.target.value)}
              >
                <option value="user">Farmer / Buyer</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
          )}

          <button type="submit" className="w-full py-4 mt-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 transition-all text-lg">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-green-600 font-bold hover:underline">
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}
