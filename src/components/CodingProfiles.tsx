import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Anushre20",
    stat: 50,
    statLabel: "Contributions",
    color: "text-foreground",
  },
  {
    name: "Codeolio",
    icon: ExternalLink,
    url: "https://codolio.com/profile/Anushri20",
    stat: 200,
    statLabel: "Profile Score",
    color: "text-primary",
  },
  {
    name: "LeetCode",
    icon: Trophy,
    url: "https://leetcode.com/u/Guthalee/",
    stat: 150,
    statLabel: "Problems Solved",
    color: "text-accent",
  },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="text-3xl font-bold gradient-text code-font">{count}+</span>;
};

const CodingProfiles = () => (
  <section id="profiles" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300 block"
          >
            <p.icon size={28} className={`mx-auto mb-4 ${p.color} group-hover:text-primary transition-colors`} />
            <h3 className="font-bold mb-3">{p.name}</h3>
            <AnimatedCounter target={p.stat} />
            <p className="text-xs text-muted-foreground mt-1">{p.statLabel}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
