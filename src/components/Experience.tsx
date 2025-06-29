
import React from 'react';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer (Associate, SDE-1)",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India (Hybrid)",
      period: "June 2023 - Present",
      type: "Full-time",
      achievements: [
        "Automated 40%+ of infrastructure provisioning using CI/CD, Terraform, Jenkins, and GitOps, significantly boosting delivery speed.",
        "Achieved and maintained 99%+ service uptime by managing critical production infrastructure and ensuring consistent availability during peak loads.",
        "Optimized cloud spend by 40-50% on GCP/AWS via continuous rightsizing, autoscaling, usage audits, and resource cleanup.",
        "Enhanced system resilience and security by designing and implementing backup/disaster recovery solutions, deploying an on-call alerting system (reducing MTTR from 30 to 7 minutes), and leading IAM role minimization.",
        "Enabled critical business operations by independently deploying infrastructure for the Purplle.com POS application and Hypertest (third-party testing tool), ensuring smooth handovers to dev teams.",
        "Collaborated with platform teams to troubleshoot and resolve high-impact infrastructure issues across services, strengthening system reliability."
      ],
      technologies: ["GCP", "AWS", "Terraform", "Jenkins", "GitOps", "Python", "CI/CD", "Container Orchestration",  "Prometheus", "Grafana"]
    },
    {
      title: "DevOps Engineer - Intern",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India (Remote)",
      period: "January 2023 - June 2023",
      type: "Internship",
      achievements: [
        "Achieved >98% uptime by deploying a robust Prometheus and Grafana monitoring and alerting system, leading to faster issue detection and resolution.",
        "Improved platform reliability by collaborating across teams to resolve high-impact issues in production infrastructure."
      ],
      technologies: ["Prometheus", "Grafana", "GCE"]
    }
  ];

  const freelanceProjects = [
    // {
    //   title: "E-commerce Platform Modernization",
    //   client: "Retail Chain (US)",
    //   period: "6 months",
    //   scope: "Full infrastructure overhaul and modernization",
    //   result: "300% performance improvement, 99.9% uptime achieved"
    // },
    // {
    //   title: "Fintech Security Implementation",
    //   client: "Financial Startup (Europe)",
    //   period: "4 months",
    //   scope: "DevSecOps pipeline and compliance framework",
    //   result: "PCI DSS compliance achieved, zero security incidents"
    // },
    // {
    //   title: "Multi-Cloud Strategy",
    //   client: "Healthcare Provider (Australia)",
    //   period: "8 months",
    //   scope: "Cloud strategy and migration roadmap",
    //   result: "45% cost reduction, improved disaster recovery"
    // }
  ];

  const certifications = [
    "Associate Cloud Engineer Certification",
    "Architecting with Google Compute Engine",
    "Essential Google Cloud Infrastructure: Foundation",
    "Elastic Google Cloud Infrastructure: Scaling and Automation"
    // "Certified Kubernetes Administrator (CKA)",
    // "HashiCorp Terraform Associate",
    // "CISSP - Certified Information Systems Security Professional",
    // "Google Cloud Professional DevOps Engineer"
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Delivering excellence across global enterprises and innovative startups
          </p>
        </div>

        {/* Full-time Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Building className="mr-3 h-6 w-6 text-blue-400" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-teal-400 font-medium mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-300 flex items-start">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-purple-400 font-medium mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Projects
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Award className="mr-3 h-6 w-6 text-teal-400" />
            Freelance Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freelanceProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-teal-400/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-teal-400 text-sm mb-2">{project.client}</p>
                <p className="text-slate-400 text-sm mb-3">Duration: {project.period}</p>
                <p className="text-slate-300 text-sm mb-3">{project.scope}</p>
                <div className="p-3 bg-slate-900/50 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-400 text-sm font-medium">Result: {project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Certifications */}
        <div className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-blue-400/50 transition-colors duration-200"
              >
                <Award className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
