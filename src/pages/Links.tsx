
import React from 'react';
import { ExternalLink, ArrowLeft, Code, Trophy, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';

const Links = () => {
  const linkCategories = [
    {
      title: "Coding Platforms",
      icon: <Code className="h-5 w-5" />,
      links: [
        { name: "LeetCode", url: "https://leetcode.com/yourprofile", description: "Algorithm solutions & competitive programming" },
        { name: "CodePen", url: "https://codepen.io/yourprofile", description: "Frontend experiments & demos" },
        { name: "HackerRank", url: "https://hackerrank.com/yourprofile", description: "Programming challenges & certifications" },
        { name: "Codeforces", url: "https://codeforces.com/profile/yourprofile", description: "Competitive programming contests" }
      ]
    },
    {
      title: "Professional Profiles",
      icon: <Briefcase className="h-5 w-5" />,
      links: [
        { name: "Stack Overflow", url: "https://stackoverflow.com/users/yourprofile", description: "Technical Q&A contributions" },
        { name: "Upwork", url: "https://upwork.com/freelancers/yourprofile", description: "Freelance project portfolio" },
        { name: "Toptal", url: "https://toptal.com/resume/yourprofile", description: "Elite freelancer network" },
        { name: "AngelList", url: "https://angel.co/yourprofile", description: "Startup ecosystem connections" }
      ]
    },
    {
      title: "Achievements & Certifications",
      icon: <Trophy className="h-5 w-5" />,
      links: [
        { name: "AWS Certifications", url: "https://aws.amazon.com/verification", description: "Cloud architecture certifications" },
        { name: "Kubernetes Certified", url: "https://training.linuxfoundation.org/certification/verify", description: "CKAD & CKA certifications" },
        { name: "Credly Badges", url: "https://credly.com/users/yourprofile", description: "Professional achievement badges" },
        { name: "Google Cloud Certified", url: "https://googlecloudcertified.credential.net", description: "GCP professional certifications" }
      ]
    },
    {
      title: "Content & Resources",
      icon: <FileText className="h-5 w-5" />,
      links: [
        { name: "Resume/CV", url: "/resume.pdf", description: "Download detailed resume" },
        { name: "Technical Portfolio", url: "https://notion.so/yourportfolio", description: "Comprehensive project documentation" },
        { name: "Speaking Events", url: "https://sessionize.com/yourprofile", description: "Conference talks & workshops" },
        { name: "Open Source Contributions", url: "https://github.com/yourprofile?tab=repositories", description: "Community projects & contributions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            All Links
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Quick access to all my professional profiles, coding platforms, and achievements
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {linkCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white mr-3">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 group flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors ml-4" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default Links;
