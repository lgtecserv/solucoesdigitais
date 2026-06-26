import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  className?: string;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
    scale: { x: 0, y: 0, scale: 0.95 },
  };

  // Easing ultra suave estilo Apple (easeOutExpo/Quint)
  const premiumEasing = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        filter: "blur(12px)", 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        x: 0, 
        y: 0, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        delay, 
        ease: premiumEasing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
