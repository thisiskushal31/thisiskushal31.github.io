import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { generateMainUrl, copyToClipboard } from "@/utils/urlUtils";
import { toast } from "@/hooks/use-toast";

export function ShareButton() {
  const handleShare = () => {
    const url = generateMainUrl();
    copyToClipboard(url);
    toast({
      title: "Profile link copied!",
      description: "Share this link with others.",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      onClick={handleShare}
      className="floating-btn top-4 right-4"
      aria-label="Share profile"
    >
      <Share2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
    </motion.button>
  );
}
