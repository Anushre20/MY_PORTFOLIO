import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
  bullets?: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    company: "IGDTUW Anveshan Foundation",
    role: "Machine Learning & Generative AI Intern",
    period: "June 2026 – July 2026",
    bullets: [
      "Completed an 8-week internship in Machine Learning and Generative AI using Python, developing an AI-based Traffic Risk and Safe Route Recommendation System.",
      "Built risk prediction using Gradient Boosting, DBSCAN hotspot detection, feature engineering, historical accident data, real-time weather, FastAPI, and React.",
    ],
    tags: ["Gradient Boosting", "DBSCAN", "Feature Engineering", "FastAPI", "React"],
  },
  {
    company: "National Forensic Sciences University (NFSU) – Delhi Campus",
    role: "AI/ML Intern",
    period: "June 2026 – July 2026",
    bullets: [
      "Developed an Agentic AI Framework with tool integration, memory management, task planning, and multi-agent coordination for AI-driven workflows.",
      "Worked with LLMs, Prompt Engineering, Hugging Face, LangChain, and FAISS to build retrieval-based applications, collaborating on practical and responsible AI solutions.",
    ],
    tags: ["Agentic AI", "LLMs", "Prompt Engineering", "Hugging Face", "LangChain", "FAISS"],
  },
  {
    company: "IGDTUW Sansoftech",
    role: "AI/ML Intern",
    period: "June 2025 – July 2025",
    description: "Built a generative AI-powered mental health chatbot leveraging NLP and sentiment analysis.",
    tags: ["Generative AI", "NLP", "Mental Health"],
  },
  {
    company: "Finlatics",
    role: "Business Analyst Intern",
    period: "January 2025 – February 2025",
    description: "Performed data analysis, built interactive dashboards, and contributed to business strategy development.",
    tags: ["Data Analysis", "Dashboards", "Strategy"],
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
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" />
                    <h3 className="font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground code-font">{exp.period}</span>
                </div>
                <p className="text-sm text-primary/80 code-font mb-2">{exp.role}</p>
                {exp.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                )}
                {exp.bullets && (
                  <ul className="text-sm text-muted-foreground leading-relaxed mb-3 space-y-1.5 list-disc ml-4">
                    {exp.bullets.map((b) => (
                      <li key={b.slice(0, 32)}>{b}</li>
                    ))}
                  </ul>
                )}
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
