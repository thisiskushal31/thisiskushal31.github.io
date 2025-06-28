
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native E-commerce Platform",
      description: "Scalable microservices architecture serving 10M+ users with 99.99% uptime. Built with Kubernetes, implemented CI/CD pipelines, and integrated comprehensive monitoring.",
      image: "photo-1486312338219-ce68d2c6f44d",
      technologies: ["Kubernetes", "Docker", "AWS", "PostgreSQL", "Redis", "Terraform"],
      highlights: ["99.99% Uptime", "10M+ Users", "Auto-scaling"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourprofile/ecommerce-platform"
    },
    {
      title: "DevSecOps Pipeline Automation",
      description: "Complete security-first CI/CD pipeline with automated vulnerability scanning, compliance checks, and zero-downtime deployments for a fintech startup.",
      image: "photo-1581091226825-a6a2a5aee158",
      technologies: ["Jenkins", "SonarQube", "Vault", "Ansible", "AWS Security Hub"],
      highlights: ["Zero Vulnerabilities", "Automated Compliance", "50% Faster Deployments"],
      liveUrl: null, // No live demo available
      githubUrl: "https://github.com/yourprofile/devsecops-pipeline"
    },
    {
      title: "Multi-Cloud Infrastructure as Code",
      description: "Terraform modules for consistent infrastructure deployment across AWS, Azure, and GCP with cost optimization and security best practices.",
      image: "photo-1461749280684-dccba630e2f6",
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Python", "GitOps"],
      highlights: ["40% Cost Reduction", "Multi-Cloud", "IaC Best Practices"],
      liveUrl: "https://infrastructure-demo.example.com",
      githubUrl: "https://github.com/yourprofile/multi-cloud-iac"
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Custom observability platform with real-time metrics, alerting, and automated incident response for distributed systems monitoring.",
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["Prometheus", "Grafana", "Go", "TimescaleDB", "Kubernetes"],
      highlights: ["Real-time Alerts", "Custom Metrics", "Automated Response"],
      liveUrl: null, // No live demo available
      githubUrl: "https://github.com/yourprofile/monitoring-dashboard"
    },
    {
      title: "Serverless Data Processing Pipeline",
      description: "Event-driven data pipeline processing 1TB+ daily with automatic scaling, error handling, and cost optimization using serverless architecture.",
      image: "photo-1487058792275-0ad4aaf24ca7",
      technologies: ["AWS Lambda", "Kinesis", "DynamoDB", "S3", "CloudWatch"],
      highlights: ["1TB+ Daily", "99.5% Cost Reduction", "Auto-scaling"],
      liveUrl: "https://pipeline-demo.example.com",
      githubUrl: "https://github.com/yourprofile/serverless-pipeline"
    },
    {
      title: "Container Security Platform",
      description: "Comprehensive container security solution with vulnerability scanning, runtime protection, and compliance monitoring for enterprise environments.",
      image: "photo-1605810230434-7631ac76ec81",
      technologies: ["Falco", "OPA", "Trivy", "Kubernetes", "Istio"],
      highlights: ["Zero-day Protection", "Compliance Ready", "Runtime Security"],
      liveUrl: null, // No live demo available
      githubUrl: "https://github.com/yourprofile/container-security"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 border border-slate-700 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs border border-slate-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-center p-2 bg-slate-700/30 rounded">
                      <div className="text-xs text-teal-400 font-semibold">{highlight}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-blue-400"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`${project.liveUrl ? 'flex-1' : 'w-full'} border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-teal-400`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
