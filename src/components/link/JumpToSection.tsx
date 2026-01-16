import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";
import { profile } from "@/config/profile";

export function JumpToSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Combine testimonial section with regular sections for navigation
  const allSections = [
    ...(profile.testimonialSection 
      ? [{ id: profile.testimonialSection.id, title: profile.testimonialSection.title, count: profile.testimonialSection.testimonials.length, type: 'testimonial' as const }]
      : []),
    ...profile.sections.map(s => ({ id: s.id, title: s.title, count: s.links.length, type: 'links' as const })),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = allSections.map((s) => ({
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allSections]);

  const handleJumpToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Close sections menu" : "Open sections menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <List className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Jump to Section Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-64 sm:w-72 max-h-[60vh]"
          >
            <div className="rounded-2xl border border-border bg-card backdrop-blur-xl p-4 shadow-xl">
              <h3 className="text-sm font-semibold text-foreground mb-3">Jump to Section</h3>
              <div className="space-y-1 max-h-[calc(60vh-4rem)] overflow-y-auto pr-1">
                {allSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleJumpToSection(section.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <span className="truncate font-medium">{section.title}</span>
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary/80 px-1.5 text-xs font-medium">
                        {section.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
