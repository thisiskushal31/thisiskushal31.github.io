
export const portfolioConfig = {
  personal: {
    name: "Kushal Gupta",
    initials: "KG",
    title: "Software Engineer",
    subtitle: "Platform Engineering · DevOps · Cloud Infrastructure · Cloud-Native Software Development",
    description: "Passionate about building secure, scalable infrastructure and streamlining development workflows. Currently expanding into security-first practices and platform engineering.",
    location: "Mumbai, India",
    timezone: "IST (UTC+5:30)",
    email: "guptakushal070@gmail.com"
  },
  
  skills: {
    categories: [
      {
        title: "Cloud Platforms",
        icon: "☁️",
        skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
      },
      {
        title: "DevOps Tools", 
        icon: "🔧",
        skills: ["Docker", "Kubernetes", "Terraform", "Ansible"]
      },
      {
        title: "CI/CD & Automation",
        icon: "🚀", 
        skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
      },
      {
        title: "Programming",
        icon: "💻",
        skills: ["Python", "Bash/Shell", "JavaScript", "Go"]
      },
      {
        title: "Security & Monitoring",
        icon: "🔒",
        skills: ["Prometheus", "Grafana", "ELK Stack", "Vault"]
      },
      {
        title: "Databases",
        icon: "🗄️",
        skills: ["PostgreSQL", "Redis", "MongoDB", "MinIO"]
      }
    ]
  },

  projects: [
    {
      title: 'Cloud Infrastructure Automation Platform',
      description: 'Built a comprehensive infrastructure-as-code platform using Terraform and Ansible to automate cloud resource provisioning across multiple providers.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Python', 'Jenkins'],
      features: [
        'Multi-cloud resource provisioning',
        'Automated security compliance checks',
        'Cost optimization recommendations',
        'Self-service infrastructure portal'
      ],
      links: {
        github: 'https://github.com',
        demo: 'https://demo.com'
      },
      status: 'Production',
      category: 'DevOps'
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Designed and implemented a comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and custom alerting rules.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm', 'Go', 'Docker'],
      features: [
        'Custom Prometheus operators',
        'Multi-cluster monitoring',
        'Automated alert routing',
        'SLI/SLO tracking dashboards'
      ],
      links: {
        github: 'https://github.com'
      },
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'CI/CD Pipeline as Code',
      description: 'Created reusable CI/CD pipeline templates that can be deployed across different projects with minimal configuration.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'ArgoCD', 'YAML'],
      features: [
        'Template-based pipeline generation',
        'Automated security scanning',
        'Multi-environment deployments',
        'Rollback automation'
      ],
      links: {
        github: 'https://github.com'
      },
      status: 'Active Development',
      category: 'DevOps'
    },
    {
      title: 'Security Compliance Automation',
      description: 'Developed automated security compliance checking tools that integrate with CI/CD pipelines to ensure security standards.',
      technologies: ['Python', 'Docker', 'Trivy', 'OWASP ZAP', 'Jenkins'],
      features: [
        'Vulnerability scanning automation',
        'Compliance report generation',
        'Policy-as-code implementation',
        'Integration with popular CI/CD tools'
      ],
      links: {},
      status: 'Beta',
      category: 'DevSecOps'
    },
    {
      title: 'Microservices Platform',
      description: 'Built a complete platform for microservices deployment with service mesh, monitoring, and automated scaling.',
      technologies: ['Kubernetes', 'Istio', 'React', 'Node.js', 'PostgreSQL'],
      features: [
        'Service mesh integration',
        'Automated service discovery',
        'Load balancing and traffic management',
        'Comprehensive monitoring dashboard'
      ],
      links: {
        demo: 'https://demo.com'
      },
      status: 'Production',
      category: 'Software Engineering'
    }
  ],

  quickActions: [
    { name: "Email", url: "mailto:hello@devopsportfolio.com", icon: "Mail", description: "Get in touch directly" },
    { name: "Resume", url: "#", icon: "Download", description: "Download my latest resume" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", description: "Professional network" },
    { name: "GitHub", url: "https://github.com", icon: "Github", description: "Code repositories" },
    { name: "Calendar", url: "#", icon: "Calendar", description: "Schedule a meeting" },
    { name: "Portfolio", url: "/", icon: "Globe", description: "View my work" },
    { name: "Blog", url: "/blog", icon: "BookOpen", description: "Read my articles" },
    { name: "Projects", url: "/projects", icon: "Folder", description: "Browse my projects" },
    { name: "Skills", url: "/skills", icon: "Award", description: "Technical expertise" },
    { name: "Experience", url: "/experience", icon: "Briefcase", description: "Work history" }
  ],
  
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "Github" }
  ]
};
