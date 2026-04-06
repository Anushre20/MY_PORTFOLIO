import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const links = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/anupama-336335322/" },
  { label: "GitHub", icon: Github, href: "https://github.com/Anushre20" },
  { label: "Email", icon: Mail, href: "mailto:anupama200603@gmail.com" },
];

const ContactSection = () => (
  <section id="contact" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 gradient-border">
          <img
            src={profilePhoto}
            alt="Anupama"
            loading="lazy"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Let's build something impactful together.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card rounded-xl px-6 py-3 inline-flex items-center gap-3 hover:border-primary/40 transition-all duration-300"
            >
              <l.icon size={18} className="text-primary" />
              <span className="text-sm font-medium">{l.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground code-font">
          © 2026 Anupama. Crafted with 💙
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
