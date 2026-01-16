import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Share2, Quote, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { TestimonialSection as TestimonialSectionType, Testimonial } from "@/config/profile";
import { generateSectionUrl, copyToClipboard } from "@/utils/urlUtils";
import { toast } from "@/hooks/use-toast";
import { RedirectOverlay } from "./RedirectOverlay";

type IconName = keyof typeof LucideIcons;

// Brand icons mapping
const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  SiFreelancer,
  SiUpwork,
  TbBrandFiverr,
};

function getIcon(iconName: string) {
  // Check brand icons first
  if (brandIcons[iconName]) {
    return brandIcons[iconName];
  }
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>;
  return Icon || LucideIcons.MessageSquare;
}

interface TestimonialSectionProps {
  section: TestimonialSectionType;
  index: number;
}

export function TestimonialSectionComponent({ section, index }: TestimonialSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [redirectingUrl, setRedirectingUrl] = useState<{ title: string; url: string } | null>(null);
  const Icon = getIcon(section.icon);

  const handleShareSection = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateSectionUrl(section.id);
    copyToClipboard(url);
    toast({
      title: "Link copied!",
      description: "Section link has been copied to clipboard.",
    });
  };

  const handlePlatformClick = (platformUrl: string, platformName: string) => {
    setRedirectingUrl({ title: platformName, url: platformUrl });
    setTimeout(() => {
      window.open(platformUrl, "_blank", "noopener,noreferrer");
      setRedirectingUrl(null);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="section-card"
      id={`section-${section.id}`}
    >
      {/* Section Header */}
      <div className="flex w-full items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{section.title}</h3>
            <p className="text-xs text-muted-foreground">{section.testimonials.length} reviews</p>
          </div>
        </div>
        <button
          onClick={handleShareSection}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2">
        {section.testimonials.map((testimonial, testimonialIndex) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: testimonialIndex * 0.05 }}
            onMouseEnter={() => setHoveredCard(testimonial.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="testimonial-card group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
          >
            {/* Quote Icon */}
            <div className="absolute -right-2 -top-2 text-primary/10">
              <Quote className="h-12 w-12" />
            </div>

            {/* Rating */}
            <div className="mb-2 flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-muted-foreground/30" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="mb-3 text-sm text-foreground/90 leading-relaxed">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/20"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  {testimonial.author.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                )}
              </div>
            </div>

            {/* Platform Link */}
            {testimonial.platformUrl && (
              <button
                onClick={() => handlePlatformClick(testimonial.platformUrl!, testimonial.platform)}
                className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary/80 px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground ${
                  hoveredCard === testimonial.id ? "opacity-100" : "opacity-70"
                }`}
              >
                <span>View on {testimonial.platform}</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Platform Links */}
      {section.platformLinks && section.platformLinks.length > 0 && (
        <div className="border-t border-border/30 p-4">
          <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Find me on
          </p>
          <div className="flex flex-wrap gap-2">
            {section.platformLinks.map((platform) => {
              const PlatformIcon = getIcon(platform.icon);
              return (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformClick(platform.url, platform.name)}
                  className="flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                >
                  <PlatformIcon className="h-4 w-4" />
                  <span>{platform.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Redirect Overlay */}
      <AnimatePresence>
        {redirectingUrl && (
          <RedirectOverlay
            linkTitle={redirectingUrl.title}
            linkUrl={redirectingUrl.url}
            onClose={() => setRedirectingUrl(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
