'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FlipLink from "../ui/FlipLink";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className='relative flex flex-col gap-20 my-32 px-8 md:px-16 lg:px-48 w-full max-sm:px-8 overflow-hidden'>
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Section Header */}
      <motion.div 
        className='relative flex items-baseline gap-3 w-full'
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline gap-2">
          <FlipLink
            href="/about"
            lineHeight={0.85}
            className="text-primary text-4xl md:text-5xl"
          >
            About
          </FlipLink>
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mb-2"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
        <motion.span 
          className='text-xs font-light text-muted-foreground/60 tracking-wider'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          02
        </motion.span>
      </motion.div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
        {/* Left Column - Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='lg:col-span-5 relative group'
        >
          <motion.div 
            className='absolute -left-6 top-0 w-1.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full'
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          />
          
          <div className='relative space-y-6'>
            <motion.div 
              className="text-6xl font-bold text-primary/10 absolute -top-8 -left-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              &ldquo;
            </motion.div>
            
            <p className='relative font-semibold text-2xl md:text-3xl text-foreground/90 leading-relaxed tracking-tight max-sm:text-justify'>
              My passion lies in the{' '}
              <span className="relative inline-block">
                <span className="relative z-10">intersection</span>
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              {' '}of creativity and technology, focusing on{' '}
              <span className="text-primary font-bold">Front-End Development</span>
              {' '}and{' '}
              <span className="text-primary font-bold">UI/UX Design</span>
              {' '}to craft engaging and user-friendly digital experiences.
            </p>

            <motion.div 
              className="flex items-center gap-3 pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 tracking-wider uppercase">
                Philosophy
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Details Card */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className='relative group'>
            {/* Glassmorphism Card */}
            <div className='relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-secondary/40 via-secondary/20 to-transparent border border-border/40 backdrop-blur-xl shadow-2xl overflow-hidden'>
              {/* Card Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Animated Corner Accent */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              />

              <div className="relative space-y-6">
                {/* Label */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    About Me
                  </span>
                </motion.div>

                {/* Main Content */}
                <p className="text-base lg:text-lg leading-relaxed text-foreground/80 font-medium">
                  I am currently pursuing education in{' '}
                  <span className="font-bold text-foreground">Software Development</span>
                  , where I have gained hands-on experience in modern web development practices. With a strong foundation in problem-solving and an eagerness to learn, I am ready to contribute as a{' '}
                  <span className="relative inline-block font-bold text-foreground">
                    Front-End Developer
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    />
                  </span>
                  —bringing fresh ideas, dedication, and a drive to create impactful digital solutions.
                </p>

                {/* Stats or Highlights */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  {[
                    { label: "Focus", value: "Frontend" },
                    { label: "Design", value: "UI/UX" },
                    { label: "Status", value: "Learning" },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="text-center space-y-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.1 + idx * 0.1 }}
                    >
                      <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10"
              initial={{ opacity: 0, rotate: 0 }}
              animate={isInView ? { opacity: 1, rotate: 6 } : {}}
              transition={{ delay: 1.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
};

export default About;