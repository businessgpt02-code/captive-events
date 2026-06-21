import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "relative px-8 py-4 rounded-full font-sans font-bold tracking-wide transition-colors duration-300 overflow-hidden group inline-block text-center cursor-none";
  
  const variants = {
    primary: "bg-brand-orange text-black",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    gradient: "bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white border border-white/20",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
      )}
    </motion.button>
  );
};

export default MagneticButton;
