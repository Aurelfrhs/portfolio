'use client'
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-[#333] dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0077b5]' },
    { name: 'Email', icon: Mail, href: '#', color: 'hover:text-primary' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Experience', href: '/experience' },
  ];

  return (
    <footer ref={ref} className="relative mt-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Decorative Line */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="relative px-8 md:px-16 lg:px-48 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                Aurel Fristian
              </h3>
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.div>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crafting exceptional digital experiences through creative design and modern web development.
            </p>

            {/* Decorative Dots */}
            <div className="flex gap-1 pt-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <motion.div 
                className="w-1 h-4 bg-primary rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.4 }}
              />
              Connect
            </h4>
            
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-12 h-12 rounded-2xl bg-secondary/50 border border-border/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 group ${social.color}`}
                >
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"
                  />
                  
                  <social.icon className="w-5 h-5 relative z-10 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;