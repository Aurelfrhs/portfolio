'use client'
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/Aurelfrhs', 
      color: 'hover:text-[#333] dark:hover:text-white',
      description: 'View my code'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/aurel-fristian', 
      color: 'hover:text-[#0077b5]',
      description: 'Connect with me'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:aurelfristian10@gmail.com', 
      color: 'hover:text-primary',
      description: 'Send me a message'
    },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Bandung, West Java, ID' },
    { icon: Mail, text: 'aurelfristian10@gmail.com' },
    { icon: Phone, text: '+62 xxx xxxx xxxx' },
  ];

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setEmail('');
  };

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
      
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - Spans 4 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:col-span-4"
          >
            {/* Logo/Name */}
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
                Aurel Fristian
              </h3>
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.div>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Junior Frontend Developer specializing in creating exceptional digital experiences through creative design and modern web development.
            </p>

            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Available for Work
              </span>
            </motion.div>
          </motion.div>

          {/* Quick Links - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 lg:col-span-2"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <motion.div 
                className="w-1 h-4 bg-primary rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.4 }}
              />
              Quick Links
            </h4>
            
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1 h-1 rounded-full bg-border group-hover:bg-primary transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 lg:col-span-3"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <motion.div 
                className="w-1 h-4 bg-primary rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.4 }}
              />
              Contact
            </h4>
            
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground group cursor-default"
                >
                  <info.icon className="w-4 h-4 mt-0.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-foreground transition-colors duration-300">
                    {info.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 lg:col-span-3"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <motion.div 
                className="w-1 h-4 bg-primary rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.4 }}
              />
              Stay Updated
            </h4>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              Subscribe to get notified about new projects and updates.
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-secondary/50 border border-border/50 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <motion.button
                  onClick={handleSubscribe}
                  disabled={isSubmitting || !email}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + idx * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group`}
              >
                <div className={`relative w-14 h-14 rounded-2xl bg-secondary/50 border border-border/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${social.color}`}>
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"
                  />
                  
                  <social.icon className="w-6 h-6 relative z-10 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    <div className="text-center">
                      <div className="font-bold">{social.name}</div>
                      <div className="text-[10px] opacity-80">{social.description}</div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Aurel Fristian.</span>
            <span className="hidden md:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>

          {/* Made with love badge */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ♥
            </motion.span>
            <span>in Bandung</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;