import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, FileText, Mail, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = ["AI/ML Enthusiast", "Full Stack Developer", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const t = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, roleIndex]);

  const buttons = [
    { label: "Resume", icon: FileText, href: "https://drive.google.com/file/d/1RWMXt70tE0PvrpVDgUPBbkK8nzPY0K7m/view?usp=sharing", variant: "primary" as const },
    { label: "GitHub", icon: Github, href: "https://github.com/Anushre20", variant: "secondary" as const },
    { label: "Codeolio", icon: ExternalLink, href: "https://codolio.com/profile/Anushri20", variant: "secondary" as const },
    { label: "Contact Me", icon: Mail, href: "#contact", variant: "primary" as const },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 pt-20">
        {/* Left content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm code-font text-primary mb-2">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Anupama
          </h1>
          <div className="h-10 mb-6">
            <span className="text-xl sm:text-2xl text-muted-foreground code-font">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-typing-cursor">&nbsp;</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Building intelligent systems at the intersection of AI/ML and modern web development.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {buttons.map((b) => (
              <motion.a
                key={b.label}
                href={b.href}
                target={b.href.startsWith("http") ? "_blank" : undefined}
                rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  b.variant === "primary"
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass-card text-foreground hover:border-primary/50"
                }`}
              >
                <b.icon size={16} />
                {b.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden gradient-border animate-float">
              <img
                src={profilePhoto}
                alt="Anupama - AI/ML Enthusiast & Full Stack Developer"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
