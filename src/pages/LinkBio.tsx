import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "@/config/profile";
import { AnimatedBackground } from "@/components/link/AnimatedBackground";
import { ProfileCard } from "@/components/link/ProfileCard";
import { CollapsibleSection } from "@/components/link/CollapsibleSection";
import { TestimonialSectionComponent } from "@/components/link/TestimonialSection";
import { ThemeToggle } from "@/components/link/ThemeToggle";
import { ShareButton } from "@/components/link/ShareButton";
import { ScrollToTop } from "@/components/link/ScrollToTop";
import { JumpToSection } from "@/components/link/JumpToSection";

export default function LinkBio() {
  const { sectionId, linkId } = useParams();
  const navigate = useNavigate();

  // Handle deep linking to sections/links
  useEffect(() => {
    if (sectionId) {
      // Check both regular sections and testimonial section
      const section = profile.sections.find((s) => s.id === sectionId);
      const isTestimonialSection = profile.testimonialSection?.id === sectionId;
      
      if (section || isTestimonialSection) {
        // Scroll to section after a short delay for render
        setTimeout(() => {
          const element = document.getElementById(`section-${sectionId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);

        // Handle link redirect (only for regular sections)
        if (linkId && section) {
          const link = section.links.find((l) => l.id === linkId);
          if (link) {
            // Open link in new tab and navigate back
            window.open(link.url, "_blank", "noopener,noreferrer");
            navigate("/", { replace: true });
          }
        }
      } else {
        // Invalid section, redirect to 404
        navigate("/not-found", { replace: true });
      }
    }
  }, [sectionId, linkId, navigate]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Floating Action Buttons */}
      <ThemeToggle />
      <ShareButton />
      <ScrollToTop />
      <JumpToSection />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto max-w-2xl px-4 py-8">
        {/* Profile Section */}
        <section className="mb-8">
          <ProfileCard />
        </section>

        {/* Testimonials Section */}
        {profile.testimonialSection && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3"
          >
            <TestimonialSectionComponent
              section={profile.testimonialSection}
              index={0}
            />
          </motion.section>
        )}

        {/* Links Sections - All Expanded */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          {profile.sections.map((section, index) => (
            <CollapsibleSection
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://kushal.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Kushal Gupta
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
