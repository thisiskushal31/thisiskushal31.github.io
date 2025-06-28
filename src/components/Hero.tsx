
import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <p className="text-lg md:text-xl text-slate-400 mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              [Your Name]
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Platform Engineer
          </h2>
          <h3 className="text-xl md:text-2xl text-slate-300 mb-6">
            DevOps • Cloud Architecture • Security • Full-Stack Development
          </h3>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experienced platform engineer specializing in cloud infrastructure, DevOps automation, 
            and security-first development. I help businesses scale with robust, secure solutions 
            across the entire software engineering landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me for Freelance
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-teal-400">50+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-green-400">15+</div>
              <div className="text-slate-400">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-purple-400">99.9%</div>
              <div className="text-slate-400">Uptime SLA</div>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
