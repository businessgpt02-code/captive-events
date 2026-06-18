import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
  return (
    <div className="bg-brand-dark pt-32 pb-32 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-orange/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10vw] sm:text-[6rem] md:text-[8rem] font-display font-black leading-none uppercase tracking-tighter"
          >
            Start a <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-500">Dialogue.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <SpotlightCard className="p-10 md:p-16 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-white z-10 relative">Let's create the unforgettable.</h2>
            
            <div className="space-y-12 z-10 relative">
              <div>
                <p className="text-brand-teal font-bold uppercase tracking-widest text-sm mb-2">Visit Us</p>
                <p className="text-2xl text-gray-300 font-medium">123 Event Street, Premium District<br/>New York, NY 10001</p>
              </div>
              <div>
                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Call Us</p>
                <p className="text-2xl text-gray-300 font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Email Us</p>
                <p className="text-2xl text-gray-300 font-medium">hello@captiveevents.com</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-10 md:p-16">
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600" placeholder="First Name" />
                </div>
                <div className="group">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600" placeholder="Last Name" />
                </div>
              </div>
              <div className="group">
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600" placeholder="Email Address" />
              </div>
              <div className="group">
                <select className="w-full bg-brand-dark/50 border-b border-white/20 pb-4 text-white text-xl focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                  <option className="text-black">Corporate Event</option>
                  <option className="text-black">Wedding</option>
                  <option className="text-black">Exhibition</option>
                  <option className="text-black">Other</option>
                </select>
              </div>
              <div className="group">
                <textarea rows="3" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-xl focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600 resize-none" placeholder="Tell us about your event..."></textarea>
              </div>
              <div className="pt-4">
                <MagneticButton variant="primary" className="w-full py-6 text-xl" type="button">Send Message</MagneticButton>
              </div>
            </form>
          </SpotlightCard>
        </div>

      </div>
    </div>
  );
};

export default Contact;
