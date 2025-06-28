
import React from 'react';
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ViewAllProjects = () => {
  const allProjects = [
    {
      title: "Cloud-Native E-commerce Platform",
      description: "Scalable microservices architecture serving 10M+ users with 99.99% uptime. Built with Kubernetes, implemented CI/CD pipelines, and integrated comprehensive monitoring.",
      image: "photo-1486312338219-ce68d2c6f44d",
      technologies: ["Kubernetes", "Docker", "AWS", "PostgreSQL", "Redis", "Terraform"],
      highlights: ["99.99% Uptime", "10M+ Users", "Auto-scaling"],
      duration: "6 months",
      teamSize: "8 engineers",
      category: "Cloud Infrastructure",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DevSecOps Pipeline Automation",
      description: "Complete security-first CI/CD pipeline with automated vulnerability scanning, compliance checks, and zero-downtime deployments for a fintech startup.",
      image: "photo-1581091226825-a6a2a5aee158",
      technologies: ["Jenkins", "SonarQube", "Vault", "Ansible", "AWS Security Hub"],
      highlights: ["Zero Vulnerabilities", "Automated Compliance", "50% Faster Deployments"],
      duration: "4 months",
      teamSize: "5 engineers",
      category: "DevSecOps",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Multi-Cloud Infrastructure as Code",
      description: "Terraform modules for consistent infrastructure deployment across AWS, Azure, and GCP with cost optimization and security best practices.",
      image: "photo-1461749280684-dccba630e2f6",
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Python", "GitOps"],
      highlights: ["40% Cost Reduction", "Multi-Cloud", "IaC Best Practices"],
      duration: "8 months",
      teamSize: "3 engineers",
      category: "Infrastructure",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Custom observability platform with real-time metrics, alerting, and automated incident response for distributed systems monitoring.",
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["Prometheus", "Grafana", "Go", "TimescaleDB", "Kubernetes"],
      highlights: ["Real-time Alerts", "Custom Metrics", "Automated Response"],
      duration: "5 months",
      teamSize: "4 engineers",
      category: "Monitoring",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Serverless Data Processing Pipeline",
      description: "Event-driven data pipeline processing 1TB+ daily with automatic scaling, error handling, and cost optimization using serverless architecture.",
      image: "photo-1487058792275-0ad4aaf24ca7",
      technologies: ["AWS Lambda", "Kinesis", "DynamoDB", "S3", "CloudWatch"],
      highlights: ["1TB+ Daily", "99.5% Cost Reduction", "Auto-scaling"],
      duration: "3 months",
      teamSize: "6 engineers",
      category: "Data Pipeline",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Container Security Platform",
      description: "Comprehensive container security solution with vulnerability scanning, runtime protection, and compliance monitoring for enterprise environments.",
      image: "photo-1605810230434-7631ac76ec81",
      technologies: ["Falco", "OPA", "Trivy", "Kubernetes", "Istio"],
      highlights: ["Zero-day Protection", "Compliance Ready", "Runtime Security"],
      duration: "7 months",
      teamSize: "5 engineers",
      category: "Security",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI/ML Model Deployment Platform",
      description: "Automated ML model deployment and serving platform with A/B testing, model versioning, and performance monitoring for data science teams.",
      image: "photo-1555949963-aa79dcee981c",
      technologies: ["MLflow", "Kubernetes", "Docker", "Python", "FastAPI", "PostgreSQL"],
      highlights: ["Auto Deployment", "A/B Testing", "Model Versioning"],
      duration: "6 months",
      teamSize: "7 engineers",
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blockchain Network Infrastructure",
      description: "High-performance blockchain node infrastructure with automated scaling, monitoring, and security for DeFi applications.",
      image: "photo-1639762681485-074b7f938ba0",
      technologies: ["Ethereum", "Solidity", "Web3", "Docker", "Kubernetes", "Monitoring"],
      highlights: ["High Performance", "Auto Scaling", "DeFi Ready"],
      duration: "9 months",
      teamSize: "4 engineers",
      category: "Blockchain",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Edge Computing Platform",
      description: "Distributed edge computing platform for IoT devices with real-time data processing and low-latency response capabilities.",
      image: "photo-1518709268805-4e9042af2176",
      technologies: ["EdgeX", "Docker", "MQTT", "InfluxDB", "Grafana", "Go"],
      highlights: ["Low Latency", "IoT Integration", "Real-time Processing"],
      duration: "5 months",
      teamSize: "6 engineers",
      category: "Edge Computing",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Cloud Infrastructure", "DevSecOps", "Infrastructure", "Monitoring", "Data Pipeline", "Security", "AI/ML", "Blockchain", "Edge Computing"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

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
            All Projects
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Comprehensive portfolio of platform engineering, DevOps, and software development projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-xs border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.teamSize}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs border border-slate-600">
                      +{project.technologies.length - 4} more
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-blue-400"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-teal-400"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllProjects;
