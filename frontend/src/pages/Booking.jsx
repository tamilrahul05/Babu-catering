import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, ArrowRight, ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';
import { bookingAPI } from '../services/api';
import './Booking.css';

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

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(formData.guests * formData.basePrice);
  }, [formData.guests, formData.basePrice]);

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
      await bookingAPI.createBooking({
        event_date: formData.date,
        time_slot: formData.timeSlot,
        guests: formData.guests,
        location: formData.location,
        event_type: formData.eventType,
        total_price: totalCost
      });
      
      // WhatsApp Integration
      const whatsappNumber = '9025237677';
      const orderId = `BC-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const message = `*NEW BOOKING REQUEST* 🍛\n---\n*Order ID:* ${orderId}\n*Plan:* ${formData.selectedMenu}\n*Date:* ${formData.date}\n*Slot:* ${formData.timeSlot}\n*Guests:* ${formData.guests}\n*Location:* ${formData.location}\n---\n*Total:* ₹${totalCost.toLocaleString()}\n*Advance (20%):* ₹${(totalCost * 0.2).toLocaleString()}\n\nPlease confirm availability!`;
      
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      setStep(3); // Move to success/summary final view
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create booking.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page-v2">
      <header className="booking-header">
        <div className="container">
          <h1>Finalize your <span className="highlight">Booking</span></h1>
          <p>Complete the details below to reserve your date.</p>
        </div>
      </header>

      <div className="booking-main container">
        <div className="booking-grid">
          {/* Left Side: Form */}
          <div className="booking-form-side">
            <div className="step-indicator">
              <span className={step >= 1 ? 'active' : ''}>1. Event Details</span>
              <span className={step >= 2 ? 'active' : ''}>2. Review</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="booking-card-v2"
                >
                  <div className="form-section-v2">
                    <div className="input-row">
                      <div className="input-group-v2">
                        <label><Calendar size={16} /> Event Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div className="input-group-v2">
                        <label><Users size={16} /> Number of Guests</label>
                        <input type="number" name="guests" value={formData.guests} onChange={handleInputChange} min="50" />
                      </div>
                    </div>

                    <div className="input-group-v2">
                      <label><MapPin size={16} /> Event Location</label>
                      <textarea name="location" value={formData.location} onChange={handleInputChange} placeholder="Venue address or area name..."></textarea>
                    </div>

                    <div className="input-row">
                      <div className="input-group-v2">
                        <label><Clock size={16} /> Time Slot</label>
                        <select name="timeSlot" value={formData.timeSlot} onChange={handleInputChange}>
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                        </select>
                      </div>
                      <div className="input-group-v2">
                        <label>Event Type</label>
                        <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
                          <option>Wedding</option>
                          <option>Birthday</option>
                          <option>Corporate</option>
                          <option>House Warming</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="btn-next-step" 
                    disabled={!formData.date || !formData.location || formData.guests < 50}
                    onClick={() => setStep(2)}
                  >
                    Review Summary <ArrowRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="booking-card-v2"
                >
                  <div className="summary-list-v2">
                    <div className="summary-item"><span>Plan:</span> <strong>{formData.selectedMenu}</strong></div>
                    <div className="summary-item"><span>Date:</span> <strong>{formData.date} ({formData.timeSlot})</strong></div>
                    <div className="summary-item"><span>Guests:</span> <strong>{formData.guests} People</strong></div>
                    <div className="summary-item"><span>Location:</span> <strong>{formData.location}</strong></div>
                  </div>
                  
                  <div className="cost-breakdown">
                    <div className="cost-row"><span>Base Price:</span> <span>₹{formData.basePrice}/plate</span></div>
                    <div className="cost-row total"><span>Total Estimated:</span> <span>₹{totalCost.toLocaleString()}</span></div>
                  </div>

                  <div className="action-buttons-v2">
                    <button className="btn-back" onClick={() => setStep(1)}><ArrowLeft size={18} /> Back</button>
                    <button className="btn-confirm-final" onClick={handleConfirm} disabled={loading}>
                      {loading ? 'Processing...' : 'Confirm & WhatsApp'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Selection Preview */}
          <div className="selection-preview-side">
            <div className="preview-card">
              <h3>Selected Package</h3>
              <div className="preview-plan">
                <div className="plan-name-badge">{preSelectedPlan?.type || 'Plate Selection'}</div>
                <h4>{formData.selectedMenu}</h4>
                <p className="plan-price-tag">₹{formData.basePrice} <span>/ plate</span></p>
              </div>
              <ul className="preview-features">
                {preSelectedPlan?.description.split(',').slice(0, 5).map((f, i) => (
                  <li key={i}><CheckCircle size={14} /> {f.trim()}</li>
                ))}
                <li>+ and more...</li>
              </ul>
              <div className="trust-badge">
                <ShieldCheck size={18} />
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
