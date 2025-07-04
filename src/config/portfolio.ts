
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
        title: "Cloud Platforms",
        icon: "☁️",
        skills: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"]
      },
      {
        title: "DevOps & Platform Tools",
        icon: "🔧",
        skills: ["Terraform", "Docker", "Kubernetes", "GitOps", "Helm"]
      },
      {
        title: "CI/CD & Automation",
        icon: "🚀",
        skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"]
      },
      {
        title: "Programming & Scripting",
        icon: "💻",
        skills: ["Python", "Shell Scripting(Bash)", "JavaScript", "Java", "Go"]
      },
      {
        title: "Security & Monitoring",
        icon: "🔒",
        skills: ["Prometheus", "Grafana", "HashiCorp Vault", "IAM & Security Policies", "Secrets Management"]
      },
      {
        title: "Databases & Messaging",
        icon: "🗄️",
        skills: ["MongoDB", "Redis", "SQL", "Elasticsearch", "Kafka"]
      },
      {
        title: "Software Engineering Foundations",
        icon: "📚",
        skills: ["Data Structures & Algorithms", "Operating Systems", "Networking", "System Design", "Object-Oriented Programming (OOP)", "Concurrency", "Scalability"]
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

  // 
  quickActions: [
    { name: "Email", url: "mailto:guptakushal070@gmail.com", icon: "Mail", description: "Get in touch directly" },
    { name: "LinkedIn", url: "https://linkedin.com/in/thisiskushalgupta", icon: "Globe", description: "Professional network" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "CodeIcon", description: "Code repositories" },
    { name: "Calendar", url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Kushal&details=Please+add+a+Google+Meet+link+after+saving.&location=Online&add=guptakushal070@gmail.com", icon: "Calendar", description: "Schedule a meeting" },
    { name: "X.com", url: "https://x.com/thisis_kushal", icon: "LinkIcon", description: "Let's connect on X" },
    { name: "Hashnode", url: "https://thisiskushal.hashnode.dev/", icon: "LinkIcon", description: "View my articles on Hashnode" },
    { name: "Medium", url: "https://thisiskushalgupta.medium.com/", icon: "LinkIcon", description: "Read my articles on Medium" },
    { name: "Self-Hosted Blog", url: "https://thisiskushal31.github.io/blog/#", icon: "LinkIcon", description: "Read my articles on Self-Hosted Site" },
    { name: "Codepen", url: "https://codepen.io/thisiskushal31/", icon: "LinkIcon", description: "Browse my projects on codepen" },
    { name: "Leetcode", url: "https://leetcode.com/u/Quick067/", icon: "LinkIcon", description: "Leetcode profile" },
    { name: "GCP-Badge", url: "https://www.cloudskillsboost.google/public_profiles/69072982-dd9b-46f1-9e9d-606cef93e04a", icon: "Award", description: "Google Cloud Skill Boost Badges by Qwiklabs" }
  ],

  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thisiskushalgupta/", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "Github" }
  ]
};
