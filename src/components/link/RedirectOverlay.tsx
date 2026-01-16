import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";

interface RedirectOverlayProps {
  linkTitle: string;
  linkUrl: string;
  onClose: () => void;
}

export function RedirectOverlay({ linkTitle, linkUrl, onClose }: RedirectOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center gap-4 p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
        
        <div className="max-w-sm space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            Redirecting to
          </h2>
          <p className="text-sm font-medium text-primary">
            {linkTitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <span className="max-w-xs truncate">{linkUrl}</span>
          </div>
        </div>
        
        <p className="mt-2 text-xs text-muted-foreground">
          Opening in a new tab...
        </p>
      </motion.div>
    </motion.div>
  );
}
