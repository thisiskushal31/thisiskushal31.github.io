
export const portfolioConfig = {
  personal: {
    name: "Kushal Gupta",
    initials: "KG",
    title: "Software Engineer",
    subtitle: "Platform Engineering · DevOps · Cloud Infrastructure · Cloud-Native Software Development",
    description: "Focused on secure, scalable infrastructure and developer productivity through automation, observability, and cloud-native solutions.",
    location: "Mumbai, India",
    timezone: "IST (UTC+5:30)",
    email: "guptakushal070@gmail.com"
  },

  skills: {
    categories: [
      {
        title: "Languages & Scripting",
        icon: "💻",
        skills: [
          "Python",
          "Bash/Shell",
          "JavaScript",
          "C/C++"
        ]
      },
      {
        title: "Cloud & Infrastructure",
        icon: "☁️",
        skills: [
          "Google Cloud Platform (GCP)",
          "Amazon Web Services (AWS)",
          "Google Kubernetes Engine (GKE)",
          "GCR",
          "GCS",
          "Compute Engine",
          "Cloud SQL",
          "Load Balancer",
          "VPC",
          "WAF",
          "Docker",
          "Kubernetes"
        ]
      },
      {
        title: "CI/CD & Automation",
        icon: "🔧",
        skills: [
          "Git",
          "Jenkins",
          "GitLab CI",
          "GitHub CI",
          "GitOps workflows",
          "n8n",
          "Ansible",
          "Terraform"
        ]
      },
      {
        title: "Monitoring, Databases & Messaging",
        icon: "📊",
        skills: [
          "Prometheus",
          "Grafana",
          "MySQL",
          "MongoDB",
          "Elasticsearch",
          "Redis",
          "Kafka"
        ]
      },
      {
        title: "Security & Operations",
        icon: "🔒",
        skills: [
          "Secrets Manager",
          "SSO",
          "IAM",
          "Zero-Trust Architecture",
          "Defense-in-Depth",
          "Trivy",
          "Incident Response"
        ]
      },
      {
        title: "Fundamentals",
        icon: "📚",
        skills: [
          "Data Structures",
          "Algorithms",
          "System Design",
          "Networking",
          "Operating Systems"
        ]
      }
    ]
  },

  projects: [
    {
      title: 'Grid Platform - Infrastructure Orchestration Platform',
      description: 'Open-source, self-hosted Infrastructure Orchestration Platform that generates standard IaC files (OpenTofu/Terraform, Ansible, Kubernetes) from JSON configs and orchestrates deployments. Solving the problem of expensive, vendor-locked infrastructure management tools.',
      technologies: ['Node.js', 'TypeScript', 'React', 'Terraform', 'OpenTofu', 'Ansible', 'Kubernetes', 'Docker', 'GitOps'],
      features: [
        'Self-hosted management tool that generates standard OpenTofu/Terraform, Ansible, and Kubernetes files from JSON configurations.',
        'CLI-first approach with commands: `grid generate`, `grid deploy`, `grid validate`, and `grid status` for infrastructure orchestration.',
        'Zero vendor lock-in - all generated files work independently, can use standard tools (Terraform, Ansible, K8s) without Grid.',
        'Multi-repository architecture: grid-cli (CLI tool), grid-core (backend API), grid-ui (frontend), grid-terraform (modules), grid-docs (documentation).',
        'Kubernetes-native architecture with support for VM and local deployments for POC/development.',
        'GitOps-first design built for modern DevOps workflows with standard tool integration.'
      ],
      links: {
        github: 'https://github.com/gridplatform',
        demo: 'https://gridplatform.org'
      },
      status: 'Active Development',
      category: 'Platform Engineering'
    },
    {
      title: 'Infrastructure Monitoring & Observability',
      description: 'Architected unified observability stack with Prometheus and Grafana, achieving 76% MTTR reduction (30min → 7min) across 125+ Kubernetes deployments and 300+ compute instances.',
      technologies: ['Prometheus', 'Grafana', 'GCP Stackdriver', 'Jenkins', 'Slack', 'Python'],
      features: [
        'Unified observability stack with real-time monitoring and automated escalation across multi-environment setups (DEV, SIT, UAT, PROD).',
        '76% MTTR reduction (30 minutes → 7 minutes) through automated alerting and incident response workflows.',
        'Comprehensive monitoring coverage for 125+ Kubernetes deployments and 300+ compute instances with proactive dashboards.',
        'CI/CD integration with Jenkins and Slack for real-time job failure alerts and automated escalation policies.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/1_PurplleInfra_Monitoring_Improvement'
      },
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'E-Commerce Platform Infrastructure (Purplle.com)',
      description: 'Managed and maintained main e-commerce platform infrastructure serving 7M total users with 4x traffic spike handling, supporting ₹700+ Crore annual revenue with 99%+ uptime.',
      technologies: ['Kubernetes', 'GKE', 'MySQL', 'Elasticsearch', 'MongoDB', 'Redis', 'Terraform', 'gh-ost'],
      features: [
        'Managed 125+ Kubernetes deployments on GKE across multi-zone, multi-cloud architecture (GCP + AWS).',
        'Zero-downtime MySQL migrations on 4TB databases using gh-ost, ensuring zero-lag schema alterations.',
        'Multi-zone high-availability deployment with step scaling, handling 4x traffic spikes during major sales events.',
        'Reduced site downtime by 33% through infrastructure optimization and proactive monitoring under high load.',
        'Container-native load balancing with kubedns service discovery for microservices architecture.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/2_Purplle.com_Management'
      },
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'POS Platform Deployment (Nexus)',
      description: 'Deployed high-availability POS platform for 100+ retail stores with 99%+ uptime, supporting 500+ daily employees and 40+ Crores revenue.',
      technologies: ['Kubernetes', 'GKE', 'Kafka', 'Redis', 'Terraform', 'Jenkins', 'GCP'],
      features: [
        'High-availability deployment across DEV, SIT, UAT, PROD environments with auto-scaling (1-6 pods).',
        'Kafka + Redis architecture for real-time data processing and caching, ensuring 99%+ uptime.',
        'Multi-environment support with consistent deployments and automated provisioning via Terraform.',
        'Successfully handling 100+ retail stores with 500+ daily employees, supporting 40+ Crores revenue.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/3_Nexus.purplle.com_Deployment'
      },
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'Security Hardening & Zero-Trust Architecture',
      description: 'Comprehensive security improvements implementing zero-trust architecture, Kubernetes RBAC, automated IAM minimization, and defense-in-depth across 125+ Kubernetes deployments.',
      technologies: ['Kubernetes', 'RBAC', 'GCP', 'Python', 'Terraform', 'Trivy', 'Secrets Manager', 'SSO'],
      features: [
        'Zero-trust architecture with defense-in-depth, implementing multi-layer security controls across all infrastructure.',
        'Automated IAM role minimization using Python scripts, enforcing least privilege access and reducing attack surface.',
        'Kubernetes RBAC implementation with Secure Boot, Trivy container scanning, and Secrets Manager deployment.',
        'SSO implementation and IP whitelisting for centralized access control and traffic segmentation.',
        'Compliance alignment with DPDP, ISO 27001/27018/27017/27002, NIST, CIS, and OWASP guidelines.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/4_Purplle.com_SecurityImprovement'
      },
      status: 'Production',
      category: 'DevSecOps'
    },
    {
      title: 'Infrastructure Automation & IAC Deployment',
      description: 'Infrastructure as Code initiative using Terraform and Ansible, achieving 40%+ faster deployments and automating 40%+ of provisioning tasks across multi-environment setups.',
      technologies: ['Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'GitOps', 'Python', 'Bash'],
      features: [
        'Reusable, parameterized Terraform modules for GKE clusters, Cloud SQL, VPCs, Load Balancers, and Kubernetes deployments.',
        '40%+ faster deployments through IAC automation and CI/CD modernization with GitOps workflows.',
        'Multi-environment consistency (DEV, SIT, UAT, PROD) with automated provisioning and configuration management via Ansible.',
        'CI/CD modernization: Migrated Jenkins from freestyle bash jobs to scripted pipeline jobs with Slack integration.',
        'Automated backup systems for MySQL, MongoDB, Elasticsearch using Python/Bash with cron scheduling.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/5_Purplle.com_IAC_Deployment'
      },
      status: 'Production',
      category: 'DevOps'
    },
    {
      title: 'AdTech Platform (PurplleAds)',
      description: 'Deployed in-house AdTech platform supporting ₹400+ Crore brand advertising revenue with 93% cost reduction (₹80 Lakh → ₹5.7 Lakh), handling 4x traffic spikes during major sales.',
      technologies: ['Kubernetes', 'GKE', 'Terraform', 'GitLab CI', 'Keycloak', 'GCP', 'AWS', 'Route53'],
      features: [
        '100+ Kubernetes deployments on GKE with multi-cloud architecture (AWS + GCP) for high availability.',
        '93% cost optimization (₹80 Lakh → ₹5.7 Lakh) through infrastructure rightsizing and automation.',
        'Keycloak authentication integration for secure access management across the platform.',
        '4x traffic spike handling during major sales events, supporting 7M total users with 150K DAU (600K during major sales).',
        'Multi-cloud deployment with Route53, GKE, and container-native load balancing for resilience.'
      ],
      links: {
        demo: 'https://github.com/thisiskushal31/thisiskushal31/tree/main/projects/6_Adtech.purplle.com_Deployment'
      },
      status: 'Production',
      category: 'Platform Engineering'
    }
  ],

  // 
  quickActions: [
    { name: "Email", url: "mailto:guptakushal070@gmail.com", icon: "Mail", description: "Get in touch directly" },
    { name: "Calendar", url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Kushal&details=Please+add+a+Google+Meet+link+after+saving.&location=Online&add=guptakushal070@gmail.com", icon: "Calendar", description: "Schedule a meeting" },
    { name: "LinkedIn", url: "https://linkedin.com/in/thisiskushalgupta", icon: "Globe", description: "Professional network" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "CodeIcon", description: "Code repositories" },
    { name: "GitHub Projects", url: "https://github.com/thisiskushal31/thisiskushal31/tree/main/projects", icon: "CodeIcon", description: "Proof of work & portfolio" },
    { name: "Bio Link", url: "https://thisiskushal31.github.io/link/#/", icon: "LinkIcon", description: "All my links, blogs & profiles" }
  ],

  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thisiskushalgupta/", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "Github" }
  ]
};
