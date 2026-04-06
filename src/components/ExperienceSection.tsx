import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Finlatics",
    role: "Business Analyst Intern",
    description: "Performed data analysis, built interactive dashboards, and contributed to business strategy development.",
    tags: ["Data Analysis", "Dashboards", "Strategy"],
  },
  {
    company: "IGDTUW Sansoftech",
    role: "AI/ML Intern",
    description: "Built a generative AI-powered mental health chatbot leveraging NLP and sentiment analysis.",
    tags: ["Generative AI", "NLP", "Mental Health"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary" />
                  <h3 className="font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                </div>
                <p className="text-sm text-primary/80 code-font mb-2">{exp.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary code-font">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
