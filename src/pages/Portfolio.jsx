import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // 4 items, scroll 75% to see last

  const projects = [
    { title: "Global Summit", type: "Corporate", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600" },
    { title: "Royal Gardens", type: "Wedding", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600" },
    { title: "Auto Expo", type: "Exhibition", img: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=1600" },
    { title: "Fashion Gala", type: "Corporate", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600" },
  ];

  return (
    <div className="bg-brand-dark pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-display font-black leading-none uppercase tracking-tighter"
        >
          Selected <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Works.</span>
        </motion.h1>
      </div>

      <section ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-4 md:px-20">
            {projects.map((project, idx) => (
              <div key={idx} className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 relative group rounded-3xl overflow-hidden cursor-none">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-10 md:p-16">
                  <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">{project.type}</span>
                  <h2 className="text-5xl md:text-7xl font-display font-black text-white">{project.title}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
