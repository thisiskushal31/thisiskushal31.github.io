import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Share2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SiUpwork, SiFreelancer, SiHashnode, SiMedium, SiLeetcode, SiCodepen } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { Section as SectionType, LinkItem } from "@/config/profile";
import { generateSectionUrl, generateLinkUrl, copyToClipboard } from "@/utils/urlUtils";
import { toast } from "@/hooks/use-toast";
import { RedirectOverlay } from "./RedirectOverlay";

type IconName = keyof typeof LucideIcons;

// Brand icons mapping for react-icons
const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  SiUpwork,
  TbBrandFiverr,
  SiFreelancer,
  SiHashnode,
  SiMedium,
  SiLeetcode,
  SiCodepen,
};

function getIcon(iconName: string) {
  // Check react-icons first
  const BrandIcon = brandIcons[iconName];
  if (BrandIcon) {
    return BrandIcon;
  }
  
  // Fall back to Lucide icons
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>;
  return Icon || LucideIcons.Folder;
}

interface CollapsibleSectionProps {
  section: SectionType;
  index: number;
}

export function CollapsibleSection({ section, index }: CollapsibleSectionProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [redirectingLink, setRedirectingLink] = useState<LinkItem | null>(null);
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

  const handleShareLink = (link: LinkItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateLinkUrl(section.id, link.id);
    copyToClipboard(url);
    toast({
      title: "Link copied!",
      description: `Share link for "${link.title}" copied to clipboard.`,
    });
  };

  const handleLinkClick = (link: LinkItem) => {
    setRedirectingLink(link);
    // Open link after short delay for overlay effect
    setTimeout(() => {
      window.open(link.url, "_blank", "noopener,noreferrer");
      setRedirectingLink(null);
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
      {/* Section Header - Always visible, no toggle */}
      <div className="flex w-full items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{section.title}</h3>
            <p className="text-xs text-muted-foreground">{section.links.length} links</p>
          </div>
        </div>
        <button
          onClick={handleShareSection}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      {/* Section Content - Always expanded */}
      <div className="grid gap-2 p-4 pt-0 sm:grid-cols-2">
        {section.links.map((link, linkIndex) => {
          const LinkIcon = getIcon(link.icon);
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: linkIndex * 0.03 }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              className="link-card flex items-center gap-3 p-3"
            >
              <button
                onClick={() => handleLinkClick(link)}
                className="flex flex-1 items-center gap-3 text-left min-w-0"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/80 text-muted-foreground transition-colors group-hover:text-primary">
                  <LinkIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {link.title}
                  </p>
                </div>
              </button>
              <div className={`flex items-center gap-1 shrink-0 transition-opacity ${
                hoveredLink === link.id ? "opacity-100" : "opacity-0"
              }`}>
                <button
                  onClick={(e) => handleShareLink(link, e)}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  title={`Share ${link.title}`}
                >
                  <Share2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  title="Open link"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Redirect Overlay */}
      <AnimatePresence>
        {redirectingLink && (
          <RedirectOverlay
            linkTitle={redirectingLink.title}
            linkUrl={redirectingLink.url}
            onClose={() => setRedirectingLink(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
