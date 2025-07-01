
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioConfig } from '@/config/portfolio';

const Index = () => {
  // ... keep existing code (currentSkills and targetRoles arrays)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            {/* Name and Designation */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-muted-foreground text-3xl md:text-4xl font-normal block mb-2">Hi, I'm</span>
                <span className="gradient-text">{portfolioConfig.personal.name}</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground mb-2">
                {portfolioConfig.personal.title}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {portfolioConfig.personal.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {portfolioConfig.personal.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {portfolioConfig.socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="lg" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.icon === 'Github' && <Github className="h-6 w-6" />}
                    {social.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        // ... keep existing code (Skills Preview section)
      </section>

      {/* Current Focus Section */}
      <section className="py-20 px-4 bg-muted/30">
        // ... keep existing code (Current Focus section)
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4">
        // ... keep existing code (Projects Preview section)
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 bg-muted/30">
        // ... keep existing code (Blog Preview section)
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        // ... keep existing code (Quick Stats section)
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        // ... keep existing code (CTA section)
      </section>
    </div>
  );
};

export default Index;
