import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle, Calculator, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const navigate = useNavigate();

  // Booking inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    guests: 150,
    plateCategory: 'Gold', // Silver (400), Gold (650), Premium (900), Luxury (1200)
    date: '',
    message: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const platePrices = {
    Silver: 400,
    Gold: 650,
    Premium: 900,
    Luxury: 1200
  };

  useEffect(() => {
    const cost = formData.guests * platePrices[formData.plateCategory];
    setEstimatedCost(cost);
  }, [formData.guests, formData.plateCategory]);

  useEffect(() => {
    const handleSyncHeroInquiry = () => {
      const savedInquiry = localStorage.getItem('hero_inquiry');
      if (savedInquiry) {
        try {
          const data = JSON.parse(savedInquiry);
          setFormData(prev => ({
            ...prev,
            guests: data.guests || prev.guests,
            plateCategory: data.plateCategory || prev.plateCategory,
            eventType: data.eventType || prev.eventType
          }));
          localStorage.removeItem('hero_inquiry');
        } catch (e) {
          console.error('Failed to parse hero inquiry data', e);
        }
      }
    };

    handleSyncHeroInquiry();
    window.addEventListener('hero_inquiry_updated', handleSyncHeroInquiry);
    return () => {
      window.removeEventListener('hero_inquiry_updated', handleSyncHeroInquiry);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        eventType: 'Wedding',
        guests: 150,
        plateCategory: 'Gold',
        date: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-6 rounded-full bg-[#E8F8F0] text-[#0DCD6A] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 border border-[#0DCD6A]/20"
          >
            CONNECT WITH US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight font-playfair italic text-[#219C45] mb-4"
          >
            Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-700 text-sm md:text-base max-w-2xl mx-auto font-medium"
          >
            Get a real-time price estimation and reserve your catering package securely with one of India's finest five-star event planners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-zinc-100 flex flex-col gap-10"
          >
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F0] flex items-center justify-center border border-[#0DCD6A]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="text-[#0DCD6A]" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs font-bold text-zinc-600 tracking-[0.2em] uppercase mb-1">Main Call Desk</span>
                <span className="text-sm md:text-base font-black text-zinc-800 tracking-wide">+91 9976379073</span>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F0] flex items-center justify-center border border-[#0DCD6A]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                <FaWhatsapp className="text-[#0DCD6A]" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs font-bold text-zinc-600 tracking-[0.2em] uppercase mb-1">WhatsApp Instant Enquiry</span>
                <a href="https://wa.me/919944769090" target="_blank" rel="noreferrer" className="text-sm md:text-base font-black text-[#0DCD6A] hover:text-[#219C45] transition-colors tracking-wide">
                  Chat With Us Live
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8F0] flex items-center justify-center border border-[#0DCD6A]/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="text-[#0DCD6A]" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs font-bold text-zinc-600 tracking-[0.2em] uppercase mb-1">Email Proposals</span>
                <a href="mailto:info@babucatering.com" className="text-sm md:text-base font-black text-zinc-800 hover:text-[#0DCD6A] transition-colors tracking-wide">
                  info@babucatering.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-zinc-100 relative overflow-hidden"
          >
            {/* Corner Icon */}
            <div className="absolute top-8 left-8">
              <Calculator size={24} className="text-amber-500" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all appearance-none"
                  >
                    <option>Wedding</option>
                    <option>Betrothal</option>
                    <option>Corporate Event</option>
                    <option>House Warming</option>
                    <option>Birthday Party</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Event Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Guests Count</label>
                  <input 
                    type="number" 
                    name="guests"
                    min="50"
                    step="50"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Plate Category</label>
                  <select
                    name="plateCategory"
                    value={formData.plateCategory}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all appearance-none"
                  >
                    <option value="Silver">Silver Package (₹400/plate)</option>
                    <option value="Gold">Gold Package (₹650/plate)</option>
                    <option value="Premium">Premium Package (₹900/plate)</option>
                    <option value="Luxury">Luxury Package (₹1200/plate)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold text-zinc-700 tracking-[0.1em] uppercase">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#0DCD6A] focus:ring-1 focus:ring-[#0DCD6A] transition-all resize-none"
                  placeholder="Any special requirements or notes?"
                ></textarea>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-100 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs font-bold text-zinc-600 tracking-[0.1em] uppercase">Estimated Total</span>
                  <span className="text-2xl font-black text-[#219C45]">₹ {estimatedCost.toLocaleString()}</span>
                </div>
                
                <button 
                  type="submit"
                  disabled={submitted}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg bg-[#0DCD6A] hover:bg-[#219C45] text-white disabled:opacity-70 disabled:cursor-not-allowed font-bold uppercase tracking-wider text-xs md:text-sm"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Request Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Get Free Quote
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
