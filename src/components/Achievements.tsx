import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { resumeData } from '../data/resume';
import { Trophy, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const AnimatedCounter = ({ value }: { value: string }) => {
  const numMatch = value.match(/(\d+)/);
  if (!numMatch) return <span>{value}</span>;

  const num = parseInt(numMatch[0], 10);
  const prefix = value.substring(0, numMatch.index);
  const suffix = value.substring(numMatch.index! + numMatch[0].length);

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / num));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === num) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, num]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function Achievements() {
  const { achievements } = resumeData;

  const icons = [
    <TrendingUp className="w-8 h-8 text-emerald-400" />,
    <Clock className="w-8 h-8 text-blue-400" />,
    <CheckCircle className="w-8 h-8 text-purple-400" />,
    <Trophy className="w-8 h-8 text-amber-400" />,
  ];

  return (
    <section id="achievements" className="py-24 px-6 lg:px-12 relative z-10 bg-slate-950/50 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Impact & Achievements
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block w-fit">
                  {icons[index % icons.length]}
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">
                    <AnimatedCounter value={achievement.metric} />
                  </h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
