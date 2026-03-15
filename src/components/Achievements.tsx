import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const outcomes = [
  {
    metric: '20%',
    context: 'reduction in recurring reconciliation discrepancies',
  },
  {
    metric: '6–8 hrs',
    context: 'of manual reporting effort eliminated weekly',
  },
  {
    metric: 'Zero',
    context: 'critical post-deployment issues across 6 consecutive releases',
  },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const simpleNum = value.match(/^(\d+)(%?)$/);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!simpleNum || !isInView) return;
    const num = parseInt(simpleNum[1], 10);
    if (num <= 100) {
      let start = 0;
      const step = Math.max(1, Math.floor(num / 12));
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(start, num));
        if (start >= num) clearInterval(timer);
      }, 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (simpleNum && parseInt(simpleNum[1], 10) <= 100) {
    const suffix = simpleNum[2] || '';
    return <span ref={ref}>{count}{suffix}</span>;
  }
  return <span ref={ref}>{value}</span>;
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Reporting Outcomes
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Selective proof of impact on reporting quality and delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
                <AnimatedCounter value={outcome.metric} />
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">{outcome.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
