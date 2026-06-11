import React from 'react';
import { motion } from 'framer-motion';

const ClientLogo = ({ name, svgPath, viewBox = "0 0 24 24" }) => {
 return (
 <div className="flex items-center justify-center px-8 py-4 bg-zinc-100 border border-zinc-200 rounded-2xl transition-all duration-500 hover:border-green-500 hover:bg-zinc-200 group select-none shrink-0 w-[180px]">
 <svg
 viewBox={viewBox}
 className="w-24 h-12 fill-zinc-500 transition-all duration-500 group-hover:fill-[#0DCD6A] group-hover:scale-105"
 xmlns="http://www.w3.org/2000/svg"
 >
 {svgPath}
 </svg>
 </div>
 );
};

const Clients = () => {
 const corporateClients = [
 { 
 name: 'TCS', 
 viewBox: "0 0 100 40",
 svgPath: <path d="M10 15h12v4H16v12h-4V19H10v-4zm24 0h8v4h-4v4h4v4h-4v4h4v4h-8V15zm20 4c0-2.2 1.8-4 4-4h6v4h-6v4h6v4h-6v4h6v4h-6c-2.2 0-4-1.8-4-4V19zm20-4h4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8h4v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8z" /> 
 },
 { 
 name: 'Infosys', 
 viewBox: "0 0 120 40",
 svgPath: <path d="M10 15h4v16h-4V15zm10 0h4v4c2-2.7 5-4 8-4 5.5 0 10 4.5 10 10v6h-4v-6c0-3.3-2.7-6-6-6s-6 2.7-6 6v6h-4V15zm28 0h4v16h-4V15zm10 8c0-4.4 3.6-8 8-8s8 3.6 8 8v8h-4v-8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8h-4v-8zm24-8h4v16h-4V15z" /> 
 },
 { 
 name: 'Wipro', 
 viewBox: "0 0 100 40",
 svgPath: <path d="M15 15h6l4 8 4-8h6l-7 16h-6l-7-16zm25 0h4v16h-4V15zm10 0h4v4c2-2.7 5-4 8-4 5.5 0 10 4.5 10 10v6h-4v-6c0-3.3-2.7-6-6-6s-6 2.7-6 6v6h-4V15z" /> 
 },
 { 
 name: 'Zoho', 
 viewBox: "0 0 100 40",
 svgPath: <path d="M10 15h16v4h-6v12h-4V19h-6v-4zm20 0h12v4H36v4h6v4h-6v4h6v4h-12V15zm20 0h4v6c1-2.7 4-4 7-4 5 0 9 4 9 9v9h-4v-9c0-2.7-2.3-5-5-5s-5 2.3-5 5v9h-4v-19z" /> 
 },
 { 
 name: 'Cognizant', 
 viewBox: "0 0 140 40",
 svgPath: <path d="M10 23c0-4.4 3.6-8 8-8h10v4H18c-2.2 0-4 1.8-4 4v2c0 2.2 1.8 4 4 4h10v4H18c-4.4 0-8-3.6-8-8v-2zm22-8h16v4H36v4h8v4h-8v4h12v4H32V15zm24 0h10c4.4 0 8 3.6 8 8v2c0 4.4-3.6 8-8 8H56V15zm10 12c2.2 0 4-1.8 4-4v-2c0-2.2-1.8-4-4-4h-6v10h6z" /> 
 },
 { 
 name: 'Accenture', 
 viewBox: "0 0 120 40",
 svgPath: <path d="M15 15h6l5 10 5-10h6v16h-4v-10l-5 10h-4l-5-10v10h-4V15zm32 0h12v4h-8v2h8v4h-8v2h8v4H47V15zm18 0h4v16h-4V15z" /> 
 }
 ];

 return (
 <section className="py-12 bg-zinc-900 relative overflow-hidden border-t border-zinc-900 border-b border-zinc-900">
 <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
 <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">
 Trusted by Industry Leaders & Corporate Partners
 </p>
 </div>

 {/* Endless Auto-scrolling Slider Container */}
 <div className="flex w-full overflow-hidden relative">
 {/* Left & Right Faders */}
 <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
 <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

 {/* Endless scrolling animation wrapper */}
 <div className="flex gap-8 animate-infinite-slide py-2 w-max">
 {/* Double display for seamless loop scrolling */}
 {[...corporateClients, ...corporateClients, ...corporateClients].map((client, idx) => (
 <ClientLogo 
 key={`${client.name}-${idx}`} 
 name={client.name} 
 svgPath={client.svgPath} 
 viewBox={client.viewBox}
 />
 ))}
 </div>
 </div>
 </section>
 );
};

export default Clients;


