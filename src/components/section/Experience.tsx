'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FlipLink from "../ui/FlipLink";

type ExperienceItemType = {
  role: string
  companyName: string
  date: string
  description: string
}

const experienceItem: ExperienceItemType[] = [
  { 
    role: "Junior FullStack Developer (Internship)", 
    companyName: "PT. Arif Konversi Surya Inovasi Indonesia", 
    date: "July 2025 — Present", 
    description: "FullStack Developer intern for 5 months through a school internship program, developing a Leave Management System with Laravel, Bootstrap, and Tailwind CSS. Focused on building responsive UIs, optimizing component structures, and enhancing usability, application performance, and the efficiency of leave request workflows across devices." 
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className='relative flex flex-col gap-20 my-32 px-8 md:px-16 w-full overflow-hidden'>
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            href="/experience"
            lineHeight={0.85}
            className="text-primary text-4xl md:text-5xl"
          >
            Experience
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
          04
        </motion.span>
      </motion.div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {experienceItem.map((data, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="relative group h-full"
          >
            {/* Glow Effect Background */}
            <motion.div 
              className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
            />
            
            {/* Main Card */}
            <div className="relative h-full flex flex-col p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-secondary/50 via-secondary/30 to-secondary/10 border border-border/50 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/10">
              
              {/* Decorative Corner Accent */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.8 }}
              />

              {/* Animated Border Line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.7 + idx * 0.2, duration: 0.8 }}
              />

              {/* Content */}
              <div className="relative space-y-6 flex-grow">
                {/* Header Section */}
                <div className="space-y-3">
                  {/* Role Title */}
                  <motion.h1 
                    className="text-2xl lg:text-3xl font-extrabold leading-tight text-foreground group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + idx * 0.2 }}
                  >
                    {data.role}
                  </motion.h1>

                  {/* Company Info */}
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + idx * 0.2 }}
                  >
                    <h3 className="font-bold text-muted-foreground/70 text-sm lg:text-base flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {data.companyName}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {data.date}
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                  className="h-px bg-gradient-to-r from-border via-border/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 1.2 + idx * 0.2, duration: 0.6 }}
                />

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 + idx * 0.2 }}
                >
                  <p className="font-semibold text-sm lg:text-base leading-relaxed text-foreground/80">
                    {data.description}
                  </p>
                </motion.div>

                {/* Tech Stack Tags (Optional - can be added to data) */}
                <motion.div 
                  className="flex flex-wrap gap-2 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + idx * 0.2 }}
                >
                  {['Laravel', 'Bootstrap', 'Tailwind CSS'].map((tech, techIdx) => (
                    <motion.span
                      key={techIdx}
                      className="px-3 py-1 rounded-full bg-background/50 border border-border/50 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.5 + idx * 0.2 + techIdx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Decorative Line */}
              <motion.div 
                className="mt-8 pt-6 border-t border-border/30"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6 + idx * 0.2 }}
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                  <span className="font-medium tracking-wider uppercase">Internship Program</span>
                  <motion.div 
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.7 + idx * 0.2 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 rounded-full bg-primary/60"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2 
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Decorative Element */}
              <motion.div 
                className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/40 transition-colors duration-500"
                initial={{ opacity: 0, rotate: 0 }}
                animate={isInView ? { opacity: 1, rotate: 6 } : {}}
                transition={{ delay: 1.8 + idx * 0.2 }}
                whileHover={{ rotate: 12, scale: 1.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-12"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      />
    </section>
  );
};

export default Experience;