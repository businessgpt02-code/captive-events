import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: "Corporate Events", num: "01", desc: "Conferences, galas, and product launches designed for maximum brand impact.", bg: "bg-brand-red/10" },
    { title: "Weddings", num: "02", desc: "Bespoke luxury weddings tailored to your unique love story and style.", bg: "bg-brand-orange/10" },
    { title: "Exhibitions", num: "03", desc: "Immersive brand activations and exhibition stands that draw crowds.", bg: "bg-brand-teal/10" },
    { title: "Production", num: "04", desc: "Cutting-edge stage design and flawless execution for live shows.", bg: "bg-brand-yellow/10" }
  ];

  return (
    <div className="bg-brand-dark pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[10vw] sm:text-[6rem] md:text-[8rem] font-display font-black leading-none uppercase tracking-tighter"
        >
          Our <br/> <span className="text-outline text-outline-hover">Expertise</span>
        </motion.h1>
      </div>

      <div className="relative">
        {services.map((service, idx) => {
          return (
            <div 
              key={idx} 
              className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-8"
              style={{ top: `calc(${idx * 40}px)` }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className={`w-full max-w-6xl h-[70vh] rounded-[3rem] ${service.bg} backdrop-blur-3xl border border-white/10 p-10 md:p-20 shadow-2xl flex flex-col justify-between overflow-hidden relative group`}
              >
                <div className="absolute top-0 right-0 p-10">
                   <span className="text-[10rem] md:text-[15rem] font-display font-black text-white/5 leading-none group-hover:text-white/10 transition-colors duration-500">
                     {service.num}
                   </span>
                </div>
                
                <div>
                  <h3 className="text-xl text-brand-orange font-bold uppercase tracking-widest mb-4 z-10 relative">Service {service.num}</h3>
                  <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-none tracking-tight w-full md:w-2/3 z-10 relative">
                    {service.title}
                  </h2>
                </div>

                <div className="flex justify-end mt-10">
                  <p className="text-2xl md:text-4xl font-sans text-gray-300 w-full md:w-1/2 leading-tight z-10 relative">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
