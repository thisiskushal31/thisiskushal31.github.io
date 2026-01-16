import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUp, Share2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { profile } from "@/config/profile";
import { generateMainUrl, generateSectionUrl, copyToClipboard } from "@/utils/urlUtils";
import { toast } from "@/hooks/use-toast";

type IconName = keyof typeof LucideIcons;

function getIcon(iconName: string) {
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>;
  return Icon || LucideIcons.Folder;
}

export function QuickJump() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = profile.sections.map((s) => ({
        id: s.id,
        element: document.getElementById(`section-${s.id}`),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJumpToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const handleShareSection = (sectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateSectionUrl(sectionId);
    copyToClipboard(url);
    toast({
      title: "Link copied!",
      description: "Section link has been copied to clipboard.",
    });
  };

  const handleShareProfile = () => {
    const url = generateMainUrl();
    copyToClipboard(url);
    toast({
      title: "Profile link copied!",
      description: "Share this link with others.",
    });
    setIsOpen(false);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="quick-jump-menu max-h-80 overflow-y-auto scrollbar-hide"
          >
            {/* Quick actions */}
            <div className="flex gap-2 p-2 border-b border-border/50 mb-2">
              <button
                onClick={handleBackToTop}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Top
              </button>
              <button
                onClick={handleShareProfile}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Share2 className="h-3.5 w-3.5" />
                Share
              </button>
            </div>

            {/* Section list header */}
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Jump to Section
            </div>

            {/* Section list */}
            <div className="space-y-0.5">
              {profile.sections.map((section) => {
                const Icon = getIcon(section.icon);
                const isActive = activeSection === section.id;
                return (
                  <div
                    key={section.id}
                    className={`group flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors cursor-pointer ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    onClick={() => handleJumpToSection(section.id)}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 truncate text-sm font-medium">{section.title}</span>
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary/80 px-1.5 text-xs font-medium">
                      {section.links.length}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        onClick={() => setIsOpen(!isOpen)}
        className="floating-btn"
        aria-label="Quick jump menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <List className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
