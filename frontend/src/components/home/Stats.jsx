import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ endValue, duration = 1.6 }) => {
 const [count, setCount] = useState(0);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-50px" });

 useEffect(() => {
 if (!isInView) return;
 
 const cleanNumber = parseFloat(endValue.replace(/[^0-9.]/g, ''));
 if (isNaN(cleanNumber)) return;
 
 let startTimestamp = null;
 const step = (timestamp) => {
 if (!startTimestamp) startTimestamp = timestamp;
 const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
 setCount(progress * cleanNumber);
 if (progress < 1) {
 window.requestAnimationFrame(step);
 }
 };
 window.requestAnimationFrame(step);
 }, [isInView, endValue, duration]);

 const formatValue = (val) => {
 let formatted;
 if (endValue.includes('.')) {
 formatted = val.toFixed(1);
 } else {
 formatted = Math.floor(val).toLocaleString();
 }
 
 if (endValue.includes('LPA')) return `${formatted} LPA`;
 if (endValue.includes('+')) return `${formatted}+`;
 return formatted;
 };

 return <span ref={ref}>{formatValue(count)}</span>;
};

const Stats = () => {
 const stats = [
 { count: '1,500+', label: 'EVENTS' },
 { count: '50,000+', label: 'GUESTS' },
 { count: '15+', label: 'YEARS EXP' },
 { count: '4.9', label: 'RATING IN' }
 ];

 return (
 <section className="relative z-20 px-4 md:px-6 max-w-6xl mx-auto my-12">
 <style>
 {`
 .ticket-container {
 display: flex;
 flex-direction: column;
 gap: 4px;
 width: 100%;
 }
 
 .ticket-block {
 background-color: #17345b;
 position: relative;
 padding: 1.75rem 1rem;
 display: flex;
 flex: 1;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-height: 110px;
 }
 
 @media (min-width: 768px) {
 .ticket-container {
 flex-direction: row;
 }
 .ticket-first {
 border-top-left-radius: 12px;
 border-bottom-left-radius: 12px;
 mask-image: radial-gradient(circle at 100% 50%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 100% 50%, transparent 14px, black 14.5px);
 }
 .ticket-middle {
 mask-image: radial-gradient(circle at 0% 50%, transparent 14px, black 14.5px), radial-gradient(circle at 100% 50%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 0% 50%, transparent 14px, black 14.5px), radial-gradient(circle at 100% 50%, transparent 14px, black 14.5px);
 mask-size: 51% 100%;
 -webkit-mask-size: 51% 100%;
 mask-repeat: no-repeat;
 -webkit-mask-repeat: no-repeat;
 mask-position: left, right;
 -webkit-mask-position: left, right;
 }
 .ticket-last {
 border-top-right-radius: 12px;
 border-bottom-right-radius: 12px;
 mask-image: radial-gradient(circle at 0% 50%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 0% 50%, transparent 14px, black 14.5px);
 }
 }
 
 @media (max-width: 767px) {
 .ticket-first {
 border-top-left-radius: 12px;
 border-top-right-radius: 12px;
 mask-image: radial-gradient(circle at 50% 100%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 50% 100%, transparent 14px, black 14.5px);
 }
 .ticket-middle {
 mask-image: radial-gradient(circle at 50% 0%, transparent 14px, black 14.5px), radial-gradient(circle at 50% 100%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 50% 0%, transparent 14px, black 14.5px), radial-gradient(circle at 50% 100%, transparent 14px, black 14.5px);
 mask-size: 100% 51%;
 -webkit-mask-size: 100% 51%;
 mask-repeat: no-repeat;
 -webkit-mask-repeat: no-repeat;
 mask-position: top, bottom;
 -webkit-mask-position: top, bottom;
 }
 .ticket-last {
 border-bottom-left-radius: 12px;
 border-bottom-right-radius: 12px;
 mask-image: radial-gradient(circle at 50% 0%, transparent 14px, black 14.5px);
 -webkit-mask-image: radial-gradient(circle at 50% 0%, transparent 14px, black 14.5px);
 }
 }
 `}
 </style>

 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="ticket-container drop-shadow-xl"
 >
 {stats.map((stat, i) => {
 const isFirst = i === 0;
 const isLast = i === stats.length - 1;
 const positionClass = isFirst ? 'ticket-first' : isLast ? 'ticket-last' : 'ticket-middle';
 
 return (
 <div key={i} className={`ticket-block ${positionClass}`}>
 <h3 className="font-sans font-bold text-[32px] md:text-4xl text-white tracking-tight leading-none mb-1 text-center">
 <AnimatedCounter endValue={stat.count} />
 </h3>
 <p className="font-sans text-[11px] md:text-xs text-white font-medium uppercase tracking-wider text-center mt-1">
 {stat.label}
 </p>
 </div>
 );
 })}
 </motion.div>
 </section>
 );
};

export default Stats;


