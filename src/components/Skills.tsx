
import React from 'react';
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Server, 
  GitBranch,
  Container,
  Cpu,
  Network,
  Lock,
  Zap,
  Monitor
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Kubernetes"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps & Automation",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Docker", "Helm"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-8 w-8" />,
      skills: ["Security Scanning", "OWASP", "Vault", "SIEM", "Compliance", "Zero Trust"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="h-8 w-8" />,
      skills: ["Python", "Go", "JavaScript", "Bash", "PowerShell", "YAML"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-8 w-8" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "S3", "ElasticSearch", "InfluxDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-8 w-8" />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const deepSkills = [
    {
      category: "Platform Engineering",
      items: [
        "Microservices Architecture",
        "Service Mesh (Istio, Linkerd)",
        "API Gateway Design",
        "Event-Driven Architecture",
        "CQRS & Event Sourcing"
      ]
    },
    {
      category: "Site Reliability Engineering",
      items: [
        "SLA/SLO/SLI Management",
        "Incident Response",
        "Chaos Engineering",
        "Performance Optimization",
        "Capacity Planning"
      ]
    },
    {
      category: "Security Engineering",
      items: [
        "DevSecOps Implementation",
        "Container Security",
        "Network Security",
        "Identity & Access Management",
        "Threat Modeling"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across the entire software engineering landscape
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 border border-slate-700"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 text-white`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Skills Section */}
        <div className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Specialized Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepSkills.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{section.category}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
