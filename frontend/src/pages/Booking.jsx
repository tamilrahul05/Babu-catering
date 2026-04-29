import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, ArrowRight, ArrowLeft, CheckCircle, ShieldCheck, Download, Coffee, Sparkles } from 'lucide-react';
import { bookingAPI, paymentAPI } from '../services/api';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preSelectedPlan = location.state?.selectedPlan;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: 'Lunch',
    guests: 100,
    location: '',
    eventType: preSelectedPlan?.category || 'Wedding',
    selectedMenu: preSelectedPlan?.name || 'Standard Veg Plate',
    basePrice: parseFloat(preSelectedPlan?.price) || 250
  });

  const [addons, setAddons] = useState({ liveCounter: false, premiumDesserts: false, VIPService: false });
  const [totalCost, setTotalCost] = useState(0);

  const addOnPrices = {
    liveCounter: 15000, 
    premiumDesserts: 50, 
    VIPService: 8000 
  };

  useEffect(() => {
    let perPlateCost = formData.basePrice;
    if (addons.premiumDesserts) perPlateCost += addOnPrices.premiumDesserts;
    
    let base = formData.guests * perPlateCost;
    if (addons.liveCounter) base += addOnPrices.liveCounter;
    if (addons.VIPService) base += addOnPrices.VIPService;
    
    setTotalCost(base);
  }, [formData.guests, formData.basePrice, addons]);

  const toggleAddon = (addon) => {
    setAddons(prev => ({ ...prev, [addon]: !prev[addon] }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async () => {
    if (!user) {
      alert('Please login to confirm your booking.');
      navigate('/login', { state: { from: '/booking', selectedPlan: preSelectedPlan } });
      return;
    }

    setLoading(true);
    try {
      const bookingRes = await bookingAPI.createBooking({
        event_date: formData.date,
        time_slot: formData.timeSlot,
        guests: formData.guests,
        location: formData.location,
        event_type: formData.eventType,
        total_price: totalCost
      });
      const bookingId = bookingRes.data.booking.id;
      
      const res = await loadRazorpayScript();
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?');
        return;
      }

      const advanceAmount = Math.round(totalCost * 0.2);
      const orderRes = await paymentAPI.createOrder({ amount: advanceAmount, bookingId });

      const options = {
        key: 'rzp_test_dummyKeyId', 
        amount: orderRes.data.amount,
        currency: 'INR',
        name: 'BABU Catering',
        description: 'Advance Booking Payment',
        order_id: orderRes.data.id,
        handler: async function (response) {
          try {
            await paymentAPI.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId: bookingId
            });
            setStep(3); 
          } catch (error) {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone || ''
        },
        theme: { color: '#D4AF37' }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create booking.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-zinc-950 text-white font-inter pb-20">
      <header className="text-center pt-24 md:pt-32 pb-12 md:pb-16 mb-4 md:mb-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-amber-500/10 rounded-full -[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4">Finalize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 italic">Booking</span></h1>
          <p className="text-zinc-400 text-base md:text-lg">Complete the details below to reserve your date.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          
          <div className="w-full">
            <div className="flex gap-4 md:gap-8 mb-8 text-xs md:text-sm font-bold text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-4">
              <span className={`transition-colors ${step >= 1 ? 'text-amber-500' : ''}`}>1. Event Details</span>
              <span className={`transition-colors ${step >= 2 ? 'text-amber-500' : ''}`}>2. Review & Add-ons</span>
              <span className={`transition-colors ${step >= 3 ? 'text-amber-500' : ''}`}>3. Confirmed</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-10 "
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3"><Calendar size={16} className="text-amber-500" /> Event Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-amber-500 focus:bg-zinc-900 transition-all color-scheme-dark" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3"><Users size={16} className="text-amber-500" /> Number of Guests</label>
                        <input type="number" name="guests" value={formData.guests} onChange={handleInputChange} min="50" className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-amber-500 focus:bg-zinc-900 transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3"><MapPin size={16} className="text-amber-500" /> Event Location</label>
                      <textarea name="location" value={formData.location} onChange={handleInputChange} placeholder="Venue address or area name..." className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-amber-500 focus:bg-zinc-900 transition-all resize-y min-h-[120px]"></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3"><Clock size={16} className="text-amber-500" /> Time Slot</label>
                        <select name="timeSlot" value={formData.timeSlot} onChange={handleInputChange} className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-amber-500 focus:bg-zinc-900 transition-all appearance-none cursor-pointer">
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                        </select>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Event Type</label>
                        <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-amber-500 focus:bg-zinc-900 transition-all appearance-none cursor-pointer">
                          <option>Wedding</option>
                          <option>Birthday</option>
                          <option>Corporate</option>
                          <option>House Warming</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="w-full mt-10 p-5 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none cursor-pointer"
                    disabled={!formData.date || !formData.location || formData.guests < 50}
                    onClick={() => setStep(2)}
                  >
                    Select Add-ons & Review <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-10 "
                >
                  <div className="mb-8 pb-8 border-b border-zinc-800">
                    <h4 className="text-white font-bold mb-5 text-xl tracking-wide">Enhance Your Experience</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <label className={`flex items-center gap-4 border p-4 rounded-sm cursor-pointer transition-all duration-300 ${addons.liveCounter ? 'border-amber-500 bg-amber-500/5 shadow-[inset_0_0_0_1px_#D4AF37]' : 'bg-zinc-900/50 border-zinc-800'}`}>
                        <input type="checkbox" checked={addons.liveCounter} onChange={() => toggleAddon('liveCounter')} className="w-5 h-5 accent-amber-500 cursor-pointer" />
                        <Coffee className="text-amber-500" />
                        <div className="flex-1">
                          <h5 className="text-white font-bold text-sm">Live Dosa & Appam Counter</h5>
                          <p className="text-zinc-400 text-xs mt-1">Freshly made hot items during the event</p>
                        </div>
                        <span className="text-amber-500 font-bold">+₹15,000</span>
                      </label>
                      
                      <label className={`flex items-center gap-4 border p-4 rounded-sm cursor-pointer transition-all duration-300 ${addons.premiumDesserts ? 'border-amber-500 bg-amber-500/5 shadow-[inset_0_0_0_1px_#D4AF37]' : 'bg-zinc-900/50 border-zinc-800'}`}>
                        <input type="checkbox" checked={addons.premiumDesserts} onChange={() => toggleAddon('premiumDesserts')} className="w-5 h-5 accent-amber-500 cursor-pointer" />
                        <Sparkles className="text-amber-500" />
                        <div className="flex-1">
                          <h5 className="text-white font-bold text-sm">Premium Dessert Bar</h5>
                          <p className="text-zinc-400 text-xs mt-1">Imported chocolates and exotic Indian sweets</p>
                        </div>
                        <span className="text-amber-500 font-bold">+₹50/plate</span>
                      </label>
                      
                      <label className={`flex items-center gap-4 border p-4 rounded-sm cursor-pointer transition-all duration-300 ${addons.VIPService ? 'border-amber-500 bg-amber-500/5 shadow-[inset_0_0_0_1px_#D4AF37]' : 'bg-zinc-900/50 border-zinc-800'}`}>
                        <input type="checkbox" checked={addons.VIPService} onChange={() => toggleAddon('VIPService')} className="w-5 h-5 accent-amber-500 cursor-pointer" />
                        <Users className="text-amber-500" />
                        <div className="flex-1">
                          <h5 className="text-white font-bold text-sm">VIP Waiter Service</h5>
                          <p className="text-zinc-400 text-xs mt-1">Dedicated staff in traditional attire</p>
                        </div>
                        <span className="text-amber-500 font-bold">+₹8,000</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-0">
                    <div className="flex justify-between items-center py-4 border-b border-zinc-800/50 text-zinc-400 text-sm md:text-base"><span className="uppercase tracking-wider text-xs font-bold">Plan:</span> <strong className="text-white">{formData.selectedMenu}</strong></div>
                    <div className="flex justify-between items-center py-4 border-b border-zinc-800/50 text-zinc-400 text-sm md:text-base"><span className="uppercase tracking-wider text-xs font-bold">Date:</span> <strong className="text-white">{formData.date} ({formData.timeSlot})</strong></div>
                    <div className="flex justify-between items-center py-4 border-b border-zinc-800/50 text-zinc-400 text-sm md:text-base"><span className="uppercase tracking-wider text-xs font-bold">Guests:</span> <strong className="text-white">{formData.guests} People</strong></div>
                    <div className="flex justify-between items-center py-4 border-b border-zinc-800/50 text-zinc-400 text-sm md:text-base"><span className="uppercase tracking-wider text-xs font-bold">Location:</span> <strong className="text-white text-right max-w-[200px] md:max-w-[300px] truncate">{formData.location}</strong></div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-zinc-950 rounded-sm border border-zinc-800">
                    <div className="flex justify-between mb-4 text-zinc-400 font-bold"><span className="uppercase tracking-wider text-xs">Base Price:</span> <span className="text-white">₹{formData.basePrice}/plate</span></div>
                    <div className="flex justify-between pt-4 mt-4 border-t border-zinc-800 items-center"><span className="uppercase tracking-wider text-xs text-zinc-400 font-bold">Total Estimated:</span> <span className="text-3xl text-white font-black">₹{totalCost.toLocaleString()}</span></div>
                    <div className="flex justify-between mt-4 items-center"><span className="uppercase tracking-wider text-xs text-amber-500 font-bold">Advance to Pay (20%):</span> <span className="text-amber-500 font-bold text-xl">₹{(totalCost * 0.2).toLocaleString()}</span></div>
                  </div>

                  <div className="flex gap-4 mt-8 flex-col sm:flex-row">
                    <button className="flex-1 py-4 bg-zinc-800 text-zinc-300 font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer" onClick={() => setStep(1)}><ArrowLeft size={18} /> Back</button>
                    <button className="flex-[2] py-4 bg-amber-500 text-black font-black rounded-xl transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none cursor-pointer" onClick={handleConfirm} disabled={loading}>
                      {loading ? 'Processing...' : 'Pay Advance (Razorpay)'}
                    </button>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-10  text-center py-16"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_10px_30px_rgba(212,175,55,0.4)]">
                    <CheckCircle size={48} className="text-black" />
                  </div>
                  <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Booking Confirmed!</h2>
                  <p className="text-zinc-400 mb-10 max-w-md mx-auto text-lg">Your advance payment was successful. Our team will contact you shortly to finalize the menu tasting and arrangements.</p>
                  
                  <div className="bg-zinc-950 p-8 rounded-sm border border-zinc-800 mb-10 inline-block text-left w-full max-w-sm ">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800/50"><span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Date</span> <span className="text-white font-bold">{formData.date}</span></div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800/50"><span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Guests</span> <span className="text-white font-bold">{formData.guests}</span></div>
                    <div className="flex justify-between items-center"><span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Paid Advance</span> <span className="text-amber-500 font-bold text-xl">₹{(totalCost * 0.2).toLocaleString()}</span></div>
                  </div>

                  <div className="flex gap-4 justify-center flex-col sm:flex-row">
                    <button className="py-4 px-8 bg-zinc-800 text-zinc-300 font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer" onClick={() => window.print()}><Download size={18} /> Invoice</button>
                    <button className="py-4 px-8 bg-amber-500 text-black font-black rounded-xl transition-all cursor-pointer" onClick={() => navigate('/my-bookings')}>View Bookings</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full hidden lg:block sticky top-28">
            <div className="bg-zinc-900/80 border border-amber-500/20 rounded-[2rem] p-8  relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest font-playfair border-b border-zinc-800 pb-4">Selected Package</h3>
              
              <div className="mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-black tracking-widest uppercase mb-4 border border-amber-500/20">{preSelectedPlan?.type || 'Plate Selection'}</div>
                <h4 className="text-2xl font-black text-white leading-tight">{formData.selectedMenu}</h4>
                <p className="text-4xl font-black text-amber-500 mt-3 tracking-tighter">₹{formData.basePrice} <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">/ plate</span></p>
              </div>
              
              <ul className="space-y-4 my-8 text-zinc-400 border-t border-b border-zinc-800/50 py-8">
                {(preSelectedPlan?.desc || preSelectedPlan?.description || 'Standard items included, Custom live counters available, Premium service options').split(',').slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle size={16} className="text-amber-500 flex-shrink-0" /> <span className="text-sm font-medium">{f.trim()}</span></li>
                ))}
                <li className="flex items-center gap-3 pl-7 text-sm font-bold text-zinc-500">+ and more...</li>
              </ul>
              
              <div className="flex items-center gap-3 text-amber-500 bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 font-bold text-sm">
                <ShieldCheck size={20} className="flex-shrink-0" />
                <span>Secure Booking with BABU Catering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
