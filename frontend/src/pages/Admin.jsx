import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Search, Edit2 } from 'lucide-react';
import api from '../services/api';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await api.get('/bookings/all');
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, navigate]);

  if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-amber-500 font-bold text-2xl">Loading Admin Dashboard...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs block mb-4">Command Center</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 italic">Dashboard</span></h1>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input type="text" placeholder="Search Bookings..." className="bg-zinc-900 border border-zinc-800 text-white rounded-full py-3 pl-12 pr-6 focus:border-amber-500 focus:outline-none w-64 md:w-80" />
          </div>
        </div>

        <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 overflow-hidden ">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 text-sm uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-5">Order ID</th>
                  <th className="px-6 py-5">Client</th>
                  <th className="px-6 py-5">Event Date</th>
                  <th className="px-6 py-5">Details</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Payment</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {bookings.map((booking) => (
                  <motion.tr key={booking.id} className="transition-colors">
                    <td className="px-6 py-6 font-bold text-white">BC-{booking.id.toString().padStart(4, '0')}</td>
                    <td className="px-6 py-6">
                      <div className="text-white font-bold">{booking.User?.name || 'Guest'}</div>
                      <div className="text-zinc-500 text-sm">{booking.User?.phone}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-amber-500 font-bold">{new Date(booking.event_date).toLocaleDateString()}</div>
                      <div className="text-zinc-500 text-sm">{booking.time_slot}</div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-white font-medium">{booking.event_type}</div>
                      <div className="text-zinc-500 text-sm">{booking.guests} Guests</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        booking.status === 'confirmed' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                        booking.status === 'pending' ? 'bg-zinc-800 text-white border border-zinc-700' : 
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {booking.status === 'confirmed' && <CheckCircle size={12} />}
                        {booking.status === 'cancelled' && <XCircle size={12} />}
                        {booking.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                        booking.payment_status === 'partial' || booking.payment_status === 'paid' ? 'text-green-500' : 'text-zinc-500'
                      }`}>
                        {booking.payment_status === 'partial' ? '20% ADVANCE' : booking.payment_status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <button className="p-2 text-zinc-400 transition-colors bg-zinc-800 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {bookings.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-bold text-lg">
              No bookings found in the system.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
