import { motion } from "framer-motion";
import { Code, Database, Cpu, Wrench } from "lucide-react";

const skillGroups = [
  { title: "Languages", icon: Code, items: ["Python", "C++", "JavaScript", "SQL"] },
  { title: "Tools", icon: Wrench, items: ["Git", "MySQL", "React", "Node.js"] },
  { title: "Concepts", icon: Cpu, items: ["DSA", "OOP", "DBMS", "APIs"] },
  { title: "Interests", icon: Database, items: ["Generative AI", "LLMs", "NLP", "Web Dev"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          I'm a B.Tech student in AI & ML at IGDTUW, New Delhi, with a strong foundation
          in Data Structures, Object-Oriented Programming, and Database Management Systems.
          I'm passionate about Generative AI, Large Language Models, and building intelligent
          systems that create real-world impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <group.icon size={20} />
              </div>
              <h3 className="font-semibold text-sm">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground code-font"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
