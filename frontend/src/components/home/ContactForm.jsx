import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Calculator } from 'lucide-react';
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
          // Clean up the storage so it doesn't persist across fresh page reloads
          localStorage.removeItem('hero_inquiry');
        } catch (e) {
          console.error("Failed to parse hero inquiry data:", e);
        }
      }
    };

    // Run once on mount
    handleSyncHeroInquiry();

    // Listen for custom event when user clicks the button on the hero
    window.addEventListener('hero_inquiry_updated', handleSyncHeroInquiry);
    return () => window.removeEventListener('hero_inquiry_updated', handleSyncHeroInquiry);
  }, []);

 const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({ ...prev, [name]: value }));
 };

 const handleSliderChange = (e) => {
 setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }));
 };

  const handleSubmit = (e) => {
  e.preventDefault();
  // Simulate booking query submission
  setSubmitted(true);
  setTimeout(() => {
  // Navigate to booking page with inquiry prefilled
  navigate('/booking', { 
  state: { 
  selectedPlan: {
  name: `${formData.plateCategory} ${formData.eventType} Package`,
  price: platePrices[formData.plateCategory],
  category: formData.eventType === 'Wedding' ? 'Special Event' : formData.eventType
  }
  } 
  });
  }, 2000);
  };

  const getTierTextColor = (tier) => {
    switch(tier) {
      case 'Silver': return 'text-slate-300';
      case 'Gold': return 'text-amber-400';
      case 'Premium': return 'text-orange-400';
      case 'Luxury': return 'text-fuchsia-400';
      default: return 'text-[#0DCD6A]';
    }
  };

  const getTierAccentClass = (tier) => {
    switch(tier) {
      case 'Silver': return 'accent-slate-400';
      case 'Gold': return 'accent-amber-500';
      case 'Premium': return 'accent-orange-500';
      case 'Luxury': return 'accent-fuchsia-500';
      default: return 'accent-green-500';
    }
  };

 return (
 <section id="contact" className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
 {/* Background glow ornaments */}
 <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full pointer-events-none"></div>
 <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full pointer-events-none"></div>

 <div className="max-w-7xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-24">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-500/10 text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-500/20"
 >
 Connect With Us
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 Request A Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Quote</span>
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 viewport={{ once: true }}
 className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mt-4"
 >
 Get a real-time price estimation and reserve your catering package securely with one of India's finest five-star event planners.
 </motion.p>
 </div>

 {/* Split Layout Container */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
 
 {/* Left panel: Info & Map */}
 <div className="lg:col-span-5 flex flex-col justify-between gap-8">
 
 <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col gap-8 flex-1">
 <h3 className="text-white text-2xl font-black font-playfair border-b border-zinc-800 pb-4 tracking-wide">
 Babu Catering HQ
 </h3>
 
 <ul className="space-y-6">
 <li className="flex items-start gap-4">
 <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-green-500 shrink-0 shadow-lg">
 <Phone size={20} />
 </div>
 <div>
 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Main Call Desk</span>
 <a href="tel:9944769090" className="text-white hover:text-green-500 font-extrabold text-base md:text-lg mt-1 block transition-colors">+91 9944769090</a>
 <a href="tel:9976379073" className="text-zinc-400 hover:text-green-500 font-bold text-sm block mt-0.5 transition-colors">+91 9976379073</a>
 </div>
 </li>

 <li className="flex items-start gap-4">
 <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-400 shrink-0 shadow-lg">
 <FaWhatsapp size={20} />
 </div>
 <div>
 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">WhatsApp Instant Enquiry</span>
 <a href="https://wa.me/919944769090" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 font-extrabold text-base md:text-lg mt-1 block transition-colors">Chat With Us Live</a>
 </div>
 </li>

 <li className="flex items-start gap-4">
 <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-green-500 shrink-0 shadow-lg">
 <Mail size={20} />
 </div>
 <div>
 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Email Proposals</span>
 <a href="mailto:info@babucatering.com" className="text-white hover:text-green-500 font-extrabold text-sm md:text-base mt-1 block transition-colors">info@babucatering.com</a>
 </div>
 </li>

 <li className="flex items-start gap-4">
 <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-green-500 shrink-0 shadow-lg">
 <MapPin size={20} />
 </div>
 <div>
 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">Branch Outlets</span>
 <a 
   href="https://maps.app.goo.gl/PWj1eeSYuC1x3NSw7" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="text-white hover:text-green-500 font-bold text-sm block mt-1 leading-relaxed transition-colors"
 >
   Kolathur, Tambaram, Valasarawakkam, Chennai, Tamil Nadu
 </a>
 </div>
 </li>
 </ul>
 </div>

 {/* Google Maps Integration Card */}
 <a 
    href="https://maps.app.goo.gl/PWj1eeSYuC1x3NSw7"
    target="_blank"
    rel="noopener noreferrer"
    title="Open location in Google Maps"
    className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl h-[240px] relative block"
  >
    <iframe
      title="Babu Catering Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6669931885994!2d80.1983023!3d13.1209302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526466f2284cf7%3A0xe5a3bbcf05051722!2sKolathur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717311111111!5m2!1sen!2sin"
      className="w-full h-full border-none pointer-events-none"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
    <div className="absolute bottom-4 right-4 z-10">
      <span className="bg-[#0DCD6A] text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg border border-white/10">
        Get Directions <MapPin size={14} />
      </span>
    </div>
  </a>

 </div>

 {/* Right panel: Calculator Inquiry Form */}
 <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between">
 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/5 to-transparent rounded-bl-[4rem]"></div>
 
 <AnimatePresence mode="wait">
 {!submitted ? (
 <motion.form 
 key="form"
 onSubmit={handleSubmit}
 className="space-y-6"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 >
 <h3 className="text-white text-2xl font-black font-playfair border-b border-zinc-800 pb-4 tracking-wide flex items-center gap-2">
 <Calculator className={getTierTextColor(formData.plateCategory)} size={24} />
 Live Quote Inquiry
 </h3>

 {/* Input Fields */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Your Name</label>
 <input 
 type="text" 
 name="name"
 value={formData.name} 
 onChange={handleInputChange}
 required
 placeholder="John Doe"
 className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-green-500 focus:bg-zinc-900 transition-all font-outfit"
 />
 </div>
 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Phone Number</label>
 <input 
 type="tel" 
 name="phone"
 value={formData.phone} 
 onChange={handleInputChange}
 required
 placeholder="9944769090"
 className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-green-500 focus:bg-zinc-900 transition-all font-outfit"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Event Type</label>
 <select 
 name="eventType"
 value={formData.eventType} 
 onChange={handleInputChange}
 className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-green-500 focus:bg-zinc-900 transition-all font-outfit appearance-none cursor-pointer"
 >
 <option>Wedding</option>
 <option>Corporate</option>
 <option>Birthday</option>
 <option>Engagement</option>
 <option>Reception</option>
 <option>Outdoor</option>
 </select>
 </div>
 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Event Date</label>
 <input 
 type="date" 
 name="date"
 value={formData.date} 
 onChange={handleInputChange}
 required
 className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-green-500 focus:bg-zinc-900 transition-all font-outfit color-scheme-dark"
 />
 </div>
 </div>

 {/* Calculator Widget Grid */}
 <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-6">
 <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
 <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Event Cost Estimation</span>
 <span className={`font-black text-sm uppercase tracking-widest ${getTierTextColor(formData.plateCategory)}`}>Real-time calculator</span>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Plate tier */}
 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Catering Plan Tier</label>
 <div className="flex gap-2">
 {Object.keys(platePrices).map((tier) => {
    const isActive = formData.plateCategory === tier;
    let activeStyles = '';
    if (tier === 'Silver') {
      activeStyles = isActive 
        ? 'bg-slate-100 border-slate-400 text-slate-700 shadow-sm' 
        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white';
    } else if (tier === 'Gold') {
      activeStyles = isActive 
        ? 'bg-amber-100 border-amber-500 text-amber-700 shadow-sm' 
        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white';
    } else if (tier === 'Premium') {
      activeStyles = isActive 
        ? 'bg-orange-100 border-orange-500 text-orange-700 shadow-sm' 
        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white';
    } else if (tier === 'Luxury') {
      activeStyles = isActive 
        ? 'bg-fuchsia-100 border-fuchsia-500 text-fuchsia-700 shadow-sm' 
        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white';
    }
    return (
      <button
        key={tier}
        type="button"
        onClick={() => setFormData(prev => ({ ...prev, plateCategory: tier }))}
        className={`flex-1 py-2 text-center rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeStyles}`}
      >
        {tier}
      </button>
    );
  })}
 </div>
 </div>
 {/* Guests Slider */}
 <div>
 <div className="flex justify-between items-center mb-2">
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Total Guests</label>
 <span className="text-white font-black text-sm bg-zinc-900 px-3 py-1 rounded border border-zinc-800">{formData.guests} people</span>
 </div>
 <input 
 type="range" 
 min="50" 
 max="2000" 
 step="25"
 value={formData.guests} 
 onChange={handleSliderChange}
 className={`w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer ${getTierAccentClass(formData.plateCategory)}`}
 />
 </div>
 </div>

 {/* Calculated estimation */}
 <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
 <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Estimated Total Quote</span>
 <div className="text-right">
 <span className="text-3xl text-white font-black">₹{estimatedCost.toLocaleString()}</span>
 <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-widest mt-1">Starting from ₹{platePrices[formData.plateCategory]}/plate</span>
 </div>
 </div>
 </div>

 <div>
 <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">Custom Culinary Requests / Message</label>
 <textarea 
 name="message"
 value={formData.message} 
 onChange={handleInputChange}
 placeholder="Share details about menu preferences, dessert stations, live counters..."
 className="w-full bg-zinc-950 border-2 border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-green-500 focus:bg-zinc-900 transition-all resize-y min-h-[100px] font-outfit"
 ></textarea>
 </div>

 <button 
 type="submit"
 className="w-full btn-luxury-cta flex items-center justify-center gap-2 p-5 rounded-xl font-black text-base uppercase tracking-widest text-black"
 >
 Send Luxury Inquiry Proposal <Send size={16} className="relative z-10" />
 </button>
 </motion.form>
 ) : (
 <motion.div 
 key="confirmation"
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 className="flex flex-col items-center justify-center text-center py-20 h-full flex-1"
 >
 <div className="w-20 h-20 bg-gradient-to-br from-[#0DCD6A] to-[#39E18B] text-black rounded-full flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,177,79,0.3)]">
 <CheckCircle size={36} className="text-black" />
 </div>
 <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Inquiry Received Successfully!</h3>
 <p className="text-zinc-400 max-w-sm mx-auto text-base mb-8">
 Your luxury estimate is logged. We are redirecting you to our secure pre-booking portal to select final items and locking your date!
 </p>
 <div className="w-10 h-10 border-2 border-[#0DCD6A]/20 border-t-[#0DCD6A] rounded-full animate-spin"></div>
 </motion.div>
 )}
 </AnimatePresence>

 </div>

 </div>

 </div>
 </section>
 );
};

export default ContactForm;


