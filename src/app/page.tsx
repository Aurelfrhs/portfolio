'use client'

import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Enhanced parallax hook dengan multiple effects
function useEnhancedParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Advanced parallax dengan opacity, scale, dan rotation
function useAdvancedParallax(
  scrollYProgress: MotionValue<number>, 
  distance: number,
  options?: {
    enableFade?: boolean;
    enableScale?: boolean;
    enableRotate?: boolean;
  }
) {
  const { enableFade = false, enableScale = false, enableRotate = false } = options || {};
  
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const opacity = enableFade 
    ? useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.5]) 
    : undefined;
  const scale = enableScale 
    ? useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]) 
    : undefined;
  const rotateX = enableRotate 
    ? useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]) 
    : undefined;
  
  return { y, opacity, scale, rotateX };
}

// Section wrapper dengan enhanced parallax
function ParallaxSection({ 
  children,
  distance = 100,
  enableFade = false,
  enableScale = false,
  enableRotate = false,
  className = "",
}: { 
  children: React.ReactNode;
  distance?: number;
  enableFade?: boolean;
  enableScale?: boolean;
  enableRotate?: boolean;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });

  // Enhanced spring configuration untuk smooth animation
  const springConfig = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  };

  const { y, opacity, scale, rotateX } = useAdvancedParallax(
    scrollYProgress, 
    distance,
    { enableFade, enableScale, enableRotate }
  );

  const smoothY = useSpring(y, springConfig);
  const smoothOpacity = opacity ? useSpring(opacity, springConfig) : undefined;
  const smoothScale = scale ? useSpring(scale, springConfig) : undefined;
  const smoothRotateX = rotateX ? useSpring(rotateX, springConfig) : undefined;

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        style={{ 
          y: smoothY,
          ...(smoothOpacity && { opacity: smoothOpacity }),
          ...(smoothScale && { scale: smoothScale }),
          ...(smoothRotateX && { rotateX: smoothRotateX }),
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Staggered parallax untuk multiple children
function StaggeredParallax({
  children,
  staggerDelay = 0.1,
  distance = 80,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  distance?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  
  // Enhanced scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  // Progress bar color change
  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "hsl(var(--primary))",
      "hsl(var(--primary))",
      "hsl(var(--primary))",
      "hsl(var(--primary))",
      "hsl(var(--primary))",
    ]
  );

  return (
    <>
      {/* Enhanced Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-lg shadow-primary/50"
        style={{ 
          scaleX,
          backgroundColor: progressColor 
        }}
      />

      {/* Percentage Indicator */}
      <motion.div
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span className="text-xs font-bold text-primary">
          {useTransform(scrollYProgress, (value) => `${Math.round(value * 100)}%`)}
        </motion.span>
      </motion.div>

      {/* Hero Section - No parallax untuk hero */}
      <Hero 
        subtitle="Junior Frontend Developer"
        title="AUREL FRISTIAN"
        subline="BASED IN BANDUNG, INDONESIA"
      />

      {/* About Section - Subtle parallax dengan fade */}
      <ParallaxSection 
        distance={120} 
        enableFade 
        enableScale
        className="will-change-transform"
      >
        <About/>
      </ParallaxSection>

      {/* Project Section - Enhanced parallax dengan rotation */}
      <ParallaxSection 
        distance={150} 
        enableFade 
        enableScale 
        enableRotate
        className="will-change-transform"
      >
        <Project/>
      </ParallaxSection>

      {/* Experience Section - Medium parallax dengan scale */}
      <ParallaxSection 
        distance={130} 
        enableFade 
        enableScale
        className="will-change-transform"
      >
        <Experience/>
      </ParallaxSection>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          scale: scrollYProgress.get() > 0.2 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 35}%`,
              top: `${20 + i * 25}%`,
            }}
          />
        ))}
      </div>
    </>
  );
}