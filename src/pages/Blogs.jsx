import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

const Blogs = () => {
  const posts = [
    { title: "Top 5 Event Trends for 2026", category: "Event Trends", date: "June 12, 2026" },
    { title: "Designing the Ultimate Luxury Wedding", category: "Weddings", date: "May 28, 2026" },
    { title: "How to Maximize ROI at Corporate Exhibitions", category: "Corporate", date: "May 15, 2026" },
    { title: "The Psychology of Stage Lighting", category: "Production", date: "April 30, 2026" },
    { title: "Brand Activations that Actually Work", category: "Marketing", date: "April 18, 2026" },
    { title: "Selecting the Perfect Entertainment", category: "Artist Management", date: "April 05, 2026" },
  ];

  return (
    <div className="bg-brand-dark pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10vw] sm:text-[6rem] md:text-[8rem] font-display font-black leading-none uppercase tracking-tighter"
          >
            Insights & <br/> <span className="text-outline text-outline-hover">Perspectives</span>
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <SpotlightCard key={index} className="group p-8 h-80 flex flex-col justify-between cursor-none">
              <div className="flex justify-between items-start z-10 relative">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-teal border border-brand-teal/30 px-3 py-1 rounded-full group-hover:bg-brand-teal group-hover:text-black transition-colors">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 font-mono">{post.date}</span>
              </div>
              <div className="z-10 relative mt-10">
                <h3 className="text-3xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80 z-0"></div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blogs;
