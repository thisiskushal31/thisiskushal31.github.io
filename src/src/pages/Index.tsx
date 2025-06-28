
import React from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
