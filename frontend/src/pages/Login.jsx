import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { authAPI } from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await authAPI.login(formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#18181b_0%,#09090b_100%)] p-10 font-inter">
      <div className="bg-zinc-900 p-10 md:p-14 rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.5)] w-full max-w-[480px] border border-white/5 relative transition-transform duration-300">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-amber-500/10 rounded-[20px] flex items-center justify-center mx-auto mb-5 text-amber-500 shadow-[0_10px_20px_rgba(212,175,55,0.1)] border border-amber-500/20">
            <LogIn size={32} />
          </div>
          <h2 className="text-4xl md:text-[2.5rem] font-extrabold text-white tracking-tight mb-2">Welcome <span className="text-amber-500">Back</span></h2>
          <p className="text-zinc-400 text-base">Login to track your bookings and history.</p>
        </div>

        {error && <div className="bg-red-500/10 text-red-400 p-3.5 rounded-xl mb-6 text-center text-sm font-semibold border border-red-200/20 animate-[shake_0.4s_ease-in-out]">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="flex items-center gap-2 text-[0.85rem] font-bold text-slate-300 mb-2.5 uppercase tracking-wide"><Mail size={14} /> Email Address</label>
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full p-4 bg-slate-900 border-2 border-slate-700 rounded-xl text-base text-white transition-all duration-200 focus:bg-slate-800 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-[0.85rem] font-bold text-slate-300 mb-2.5 uppercase tracking-wide"><Lock size={14} /> Password</label>
            <div className="relative flex items-center">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                className="w-full p-4 bg-slate-900 border-2 border-slate-700 rounded-xl text-base text-white transition-all duration-200 focus:bg-slate-800 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10"
              />
              <button 
                type="button" 
                className="absolute right-4 bg-transparent text-slate-400 p-1 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <label className="flex items-center gap-2.5 text-[0.9rem] text-zinc-400 cursor-pointer select-none">
              <input type="checkbox" className="w-[18px] h-[18px] accent-amber-500" /> Remember me
            </label>
            <Link to="/forgot-password" data-ignore className="text-[0.9rem] font-bold text-amber-500 no-underline">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full p-4 bg-gradient-to-br from-amber-400 to-amber-600 text-black rounded-xl font-extrabold text-[1.1rem] flex items-center justify-center gap-3 transition-all duration-300 border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none" disabled={loading}>
            {loading ? 'Authenticating...' : 'Login to Account'}
          </button>
        </form>

        <div className="mt-10 text-center text-[0.95rem] text-zinc-400">
          <p>Don't have an account? <Link to="/signup" className="text-amber-500 font-extrabold no-underline ml-1">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
