import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const About = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-brand-dark pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="mb-32 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10vw] sm:text-[6rem] md:text-[8rem] font-display font-black leading-none uppercase tracking-tighter"
          >
            We Are <br/> <span className="text-gradient">Captive</span>
          </motion.h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3">
            <p className="text-xl text-gray-400 font-medium">
              We orchestrate the impossible, transforming bold visions into cinematic reality.
            </p>
          </div>
        </div>

        {/* Parallax Image Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="h-[600px] rounded-3xl overflow-hidden relative">
            <motion.div 
              style={{ y: yImage }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000')] bg-cover bg-center h-[120%]"
            ></motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
          </div>
          
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">The Standard of <span className="text-brand-orange">Excellence.</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Founded with a vision to redefine the event landscape, Captive Events has grown into a premier agency recognized for delivering high-impact, immersive experiences. 
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                We blend creativity with logistical mastery to bring bold ideas to life. From luxury weddings to high-stakes corporate summits, our team brings passion and precision to every project.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Values Bento */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotlightCard className="p-10 h-64 flex flex-col justify-between group">
            <h3 className="text-brand-orange text-sm font-bold tracking-widest uppercase z-10 relative">01 / Mission</h3>
            <p className="text-2xl font-display font-bold text-white group-hover:text-brand-orange transition-colors z-10 relative">To deliver extraordinary experiences that captivate audiences.</p>
          </SpotlightCard>
          
          <SpotlightCard className="p-10 h-64 flex flex-col justify-between group">
            <h3 className="text-brand-teal text-sm font-bold tracking-widest uppercase z-10 relative">02 / Vision</h3>
            <p className="text-2xl font-display font-bold text-white group-hover:text-brand-teal transition-colors z-10 relative">To be the globally recognized leader in premium event design.</p>
          </SpotlightCard>

          <SpotlightCard className="p-10 h-64 flex flex-col justify-between md:col-span-2 lg:col-span-1 group">
            <h3 className="text-brand-red text-sm font-bold tracking-widest uppercase z-10 relative">03 / Values</h3>
            <p className="text-2xl font-display font-bold text-white group-hover:text-brand-red transition-colors z-10 relative">Creativity, Precision, Excellence, Integrity.</p>
          </SpotlightCard>
        </div>

      </div>
    </div>
  );
};

export default About;
