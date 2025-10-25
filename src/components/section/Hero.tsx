"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import ScrollVelocity from "../ScrollVelocity";


const techStack = [
    'TYPESCRIPT',
    'JAVASCRIPT',
    'TAILWIND CSS',
    'NEXT JS',
    'REACT',
    'FIGMA'
];


// SplitText Component untuk animasi karakter
const SplitText = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: string;
  className?: string;
  delay?: number;
}) => {
  const letters = children.split("");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block hover:text-muted-foreground transition-colors duration-200 cursor-default"
          whileHover={{
            y: -8,
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Particle System
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    const particleCount = window.innerWidth < 768 ? 20 : 40;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.3)';
          ctx.fill();
          
          particles.slice(i + 1).forEach((p2) => {
            const dx = p2.x - p.x;
            const dy = p2.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
              ctx.beginPath();
              ctx.strokeStyle = theme === 'dark'
                ? `rgba(255, 255, 255, ${0.15 * (1 - dist / 100)})`
                : `rgba(0, 0, 0, ${0.1 * (1 - dist / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });
      }
      
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
    />
  );
};

// Gradient Orbs
const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-10"
        style={{
          background: "radial-gradient(circle, currentColor, transparent)",
          top: "10%",
          left: "5%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 dark:opacity-10"
        style={{
          background: "radial-gradient(circle, currentColor, transparent)",
          bottom: "10%",
          right: "5%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// Main Hero Component
export default function Hero({
  subtitle = "SUBTITLE",
  title = "YOUR NAME",
  subline = "SUBLINE",
}: {
  subtitle?: string;
  title?: string;
  subline?: string;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nameParts = title.split(" ");

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Background Elements */}
        <GradientOrbs />
        <ParticleField />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        {/* Main Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 py-20 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2">
              <span className="text-md font-bold text-primary tracking-wider">
                {subtitle}
              </span>
            </div>
          </motion.div>

          {/* Name with SplitText Animation */}
          <div className="mb-6">
            {nameParts.map((part, partIndex) => (
              <SplitText
                key={partIndex}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black leading-none tracking-tighter mb-2 text-primary"
                delay={0.3 + partIndex * 0.2}
              >
                {part}
              </SplitText>
            ))}
            
            {/* Simple Underline */}
            <motion.div
              className="w-24 h-0.5 mx-auto mt-6 bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </div>

          {/* Subline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-12 flex items-center justify-center gap-4"
          >
            <motion.div
              className="h-px w-12 md:w-20 bg-border"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <p className="text-sm md:text-base font-medium text-muted-foreground tracking-[0.2em]">
              {subline}
            </p>
            <motion.div
              className="h-px w-12 md:w-20 bg-border"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors tracking-wider">
              SCROLL
            </span>
            <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-2 group-hover:border-primary transition-colors">
              <motion.div
                className="w-1.5 h-2 bg-primary rounded-full"
                animate={{
                  y: [0, 16, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
                    <ScrollVelocity
              texts={techStack}
              velocity={50}
              damping={70}
              numCopies={2}
              className="text-foreground font-big-shoulders"
              parallaxClassName="pt-8 mask-x-from-80% mask-x-to-100%"
            />
            <ScrollVelocity
              texts={techStack}
              velocity={-50}
              damping={70}
              numCopies={2}
              className="text-foreground font-big-shoulders"
              parallaxClassName="pb-8 mask-x-from-80% mask-x-to-100%"
            />
    </>
  );
}