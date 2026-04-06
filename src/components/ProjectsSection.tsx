import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "BeforeYouEat",
    description: "AI-powered food awareness platform that helps users understand what's in their food before they consume it.",
    tech: ["React", "TypeScript", "APIs"],
    github: "https://github.com/Anushre20/BeforeYouEat",
    live: "https://before-you-eat.vercel.app",
    featured: true,
  },
  {
    title: "MannMitra",
    description: "Emotion-aware AI chatbot for mental health support using sentiment analysis and conversational AI.",
    tech: ["Gemini API", "HuggingFace", "Flask"],
    github: "https://github.com/anoushka1405/MannMitra-new",
    featured: false,
  },
  {
    title: "AI Quiz Generator",
    description: "Platform that automatically generates quizzes from text or PDF documents using LLM APIs.",
    tech: ["React", "Node.js", "MySQL", "LLM APIs"],
    github: "https://github.com/Anushre20/intelliquiz",
    featured: false,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary mb-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`glass-card rounded-xl p-6 flex flex-col group hover:border-primary/30 transition-all duration-300 ${
              p.featured ? "md:col-span-2 lg:col-span-1 ring-1 ring-primary/20" : ""
            }`}
          >
            {p.featured && (
              <div className="flex items-center gap-1.5 mb-3">
                <Star size={14} className="text-primary fill-primary" />
                <span className="text-xs font-medium text-primary code-font">Featured</span>
              </div>
            )}
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary code-font">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} /> Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
