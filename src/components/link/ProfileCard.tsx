import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/config/profile";
import { SocialLinks } from "./SocialLinks";

export function ProfileCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Kolkata timezone
  const kolkataTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl p-8 text-center"
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mx-auto mb-6 w-32 h-32"
      >
        {/* Animated ring */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(262 83% 58%), hsl(187 92% 55%), hsl(142 71% 55%))",
            padding: "3px"
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full bg-card" />
        </motion.div>
        
        {/* Profile image */}
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        
        {/* Status indicator */}
        <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-card bg-syntax-green animate-pulse" />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-2 text-3xl font-bold gradient-text"
      >
        {profile.name}
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 text-lg text-muted-foreground font-medium"
      >
        {profile.title}
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-5 text-sm text-muted-foreground/90 max-w-lg mx-auto leading-relaxed"
      >
        {profile.bio}
      </motion.p>

      {/* Location & Time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground"
      >
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
          <MapPin className="h-4 w-4 text-syntax-orange" />
          {profile.location}
        </span>
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
          <Clock className="h-4 w-4 text-syntax-cyan" />
          {kolkataTime}
        </span>
      </motion.div>

      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
}
