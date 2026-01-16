import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(262 83% 58% / 0.7) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full opacity-30 blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(187 92% 55% / 0.6) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 h-[300px] w-[300px] rounded-full opacity-25 blur-[60px]"
        style={{
          background: "radial-gradient(circle, hsl(142 71% 55% / 0.5) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}
