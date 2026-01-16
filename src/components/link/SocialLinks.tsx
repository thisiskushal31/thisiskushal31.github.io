import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "@/config/profile";

type IconName = keyof typeof LucideIcons;

function getIcon(iconName: string) {
  // Special case for X (Twitter)
  if (iconName === "XTwitter") {
    return FaXTwitter;
  }
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>;
  return Icon || LucideIcons.Link;
}

export function SocialLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {profile.socialLinks.map((link) => {
        const Icon = getIcon(link.icon);
        return (
          <motion.a
            key={link.id}
            variants={item}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="h-3.5 w-3.5 transition-colors group-hover:text-primary" />
            <span>{link.name}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
