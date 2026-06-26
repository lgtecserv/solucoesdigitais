import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import React from "react";

const premiumEasing = [0.16, 1, 0.3, 1];

export function RevealText({ text, className = "", as = "p" }: { text: string; className?: string; as?: any }) {
  const words = text.split(" ");
  const Component = motion[as as keyof typeof motion] as any;
  
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.02 } }
      }}
      className={className}
    >
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)", 
              transition: { duration: 0.9, ease: premiumEasing } 
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

export function ImageReveal({ src, alt, className = "", width, height }: any) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-10 bg-background origin-top"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: premiumEasing }}
      />
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease: premiumEasing }}
      />
    </div>
  );
}

export function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageFlipCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Glare tracking effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "120%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "120%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.4, 0, 0.4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1200 }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, rotateY: 90, transformOrigin: "left center" }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03, zIndex: 10 }}
        className="relative h-full w-full rounded-2xl"
      >
        <motion.div 
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl"
        >
          <motion.div 
            style={{
              position: "absolute",
              background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)",
              opacity: glareOpacity,
              left: glareX,
              top: glareY,
              transform: "translate(-50%, -50%)",
              width: "250%",
              height: "250%",
              mixBlendMode: "overlay"
            }}
          />
        </motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function TypewriterText({ text, className = "", as = "p", delay = 0 }: { text: string; className?: string; as?: any; delay?: number }) {
  const characters = Array.from(text);
  const Component = motion[as as keyof typeof motion] as any;
  
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } }
      }}
      className={className}
    >
      {characters.map((char: string, i: number) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline-block", transition: { duration: 0.01 } }
          }}
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: [1, 0, 1], transition: { repeat: Infinity, duration: 0.8, ease: "linear" } }
        }}
        className="inline-block w-[3px] h-[0.85em] bg-primary-foreground ml-1 align-middle translate-y-[-10%]"
      />
    </Component>
  );
}
