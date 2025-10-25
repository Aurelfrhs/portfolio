'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FlipLink from "../ui/FlipLink";

type projectItemType = {
  title: string
  status: string[]
  description: string
  image: string
  link: string
}

const projectItem: projectItemType[] = [
  { 
    title: "Expose FC", 
    status: ["Web Development"], 
    description: "A soccer platform that connects school teams and football communities through match schedules, results, player profiles, and the latest updates from expolbansoccer.", 
    image: "/expose.png",
    link: "https://expolbansoccer.com" 
  },
];

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative flex flex-col gap-20 my-32 px-8 md:px-16 w-full overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            href="/project"
            lineHeight={0.85}
            className="text-primary text-4xl md:text-5xl"
          >
            Projects
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
          03
        </motion.span>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projectItem.map((data, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative h-full flex flex-col">
              {/* Image Container with Enhanced Effects */}
              <a 
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border/50 shadow-2xl block cursor-pointer"
              >
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${data.image}")`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating Number Badge */}
                <motion.div 
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/90 backdrop-blur-xl border border-border/50 flex items-center justify-center shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="text-sm font-bold text-primary">0{idx + 1}</span>
                </motion.div>

                {/* Bottom Gradient Bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8 + idx * 0.2, duration: 0.8 }}
                />
              </a>

              {/* Content Section */}
              <div className="relative flex flex-col gap-4 pt-6 px-2">
                {/* Title with Hover Effect */}
                <motion.h2 
                  className="font-big-shoulders font-[900] text-3xl lg:text-4xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 cursor-default"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {data.title}
                </motion.h2>

                {/* Description */}
                <p className="text-muted-foreground font-medium text-sm lg:text-base leading-relaxed">
                  {data.description}
                </p>

                {/* Tags with Enhanced Design */}
                <div className="flex gap-2 flex-wrap pt-2">
                  {data.status.map((tag, tagIdx) => (
                    <motion.span
                      key={tagIdx}
                      className="group/tag relative px-4 py-2 rounded-full text-xs lg:text-sm font-bold overflow-hidden cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + tagIdx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Background Layers */}
                      <span className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" />
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/20 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                      
                      {/* Border */}
                      <span className="absolute inset-0 border border-border/50 rounded-full group-hover/tag:border-primary/50 transition-colors duration-300" />
                      
                      {/* Text */}
                      <span className="relative z-10 text-foreground group-hover/tag:text-primary transition-colors duration-300">
                        {tag}
                      </span>
                    </motion.span>
                  ))}
                </div>

                {/* Hover Indicator Line */}
                <motion.div 
                  className="mt-4 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1.2 + idx * 0.2, duration: 0.6 }}
                />
              </div>

              {/* Decorative Corner Element */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/40 transition-colors duration-500"
                initial={{ opacity: 0, rotate: 0 }}
                animate={isInView ? { opacity: 1, rotate: 6 } : {}}
                transition={{ delay: 1.5 + idx * 0.2 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
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

export default Project;