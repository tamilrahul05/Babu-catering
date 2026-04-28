import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ";
  
  const variants = {
    primary: "bg-amber-500 text-black shadow-amber-500/30",
    secondary: "bg-zinc-800 text-white shadow-zinc-900/30",
    outline: "bg-black/40 text-amber-500 border border-amber-500/30",
    ghost: "bg-transparent text-zinc-300 border-2 border-zinc-800 shadow-zinc-900"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
