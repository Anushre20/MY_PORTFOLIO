import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Smart India Hackathon",
    description: "Qualified the Internal Round — competed among top student teams.",
  },
  {
    icon: Trophy,
    title: "Snowscript Winter of Code",
    description: "Top 10 Contributor — recognized for impactful open-source contributions.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-xl p-6 flex items-start gap-4 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <a.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
