
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
        skills: [
          "Google Cloud Platform (GCP)", 
          "Amazon Web Services (AWS)"
        ]
      },
      {
        title: "DevOps & Automation",
        icon: "🔧",
        skills: [
          "Terraform",
          "Docker",
          "Kubernetes",
          "GitOps",
          "Helm",
          "ArgoCD",
          "GitHub Actions",
          "Jenkins",
          "GitLab CI"
        ]
      },
      {
        title: "Programming & Scripting",
        icon: "💻",
        skills: [
          "Python", 
          "C/C++", 
          "JavaScript", 
          "Bash/Shell"
        ]
      },
      {
        title: "Software Development",
        icon: "🖥️",
        skills: [
          "React.js",
          "Node.js",
          "Express.js",
          "REST APIs",
          "Microservices",
          "Cloud-Native Applications"
        ]
      },
      {
        title: "Security & Monitoring",
        icon: "🔒",
        skills: [
          "Prometheus",
          "Grafana",
          "Secrets Management",
          "IAM & Security Policies",
          "Cloud Infrastructure Security Practices"
        ]
      },
      {
        title: "Databases & Messaging",
        icon: "🗄️",
        skills: [
          "MySQL", 
          "MongoDB", 
          "Redis", 
          "Elasticsearch"
        ]
      },
      {
        title: "Computer Science Fundamentals",
        icon: "📚",
        skills: [
          "Data Structures",
          "Algorithms",
          "System Design",
          "Networking",
          "Operating Systems",
          "Object-Oriented Programming (OOP)",
          "Concurrency",
          "Scalability"
        ]
      }
    ]
  },

  projects: [
    {
      title: 'Infra Provision System Automation',
      description: 'Automated infrastructure provisioning, backups, and role management to reduce manual effort, improve reliability, and accelerate cloud operations at purplle.com.',
      technologies: ['Terraform', 'Python', 'Bash', 'GitLab CI', 'Jenkins', 'GCP'],
      features: [
        'Automated IAM role management using Python and CI/CD pipelines, reducing role misconfigurations and manual overhead.',
        'Developed backup automation for MySQL, MongoDB, Elasticsearch, and GCP VMs using Python, Bash, and cron, improving data resilience.',
        'Provisioned infrastructure using Terraform and GitOps workflows, reducing deployment time by 50% and improving environment consistency.',
        'Enabled scheduled automated backups, ensuring reliable disaster recovery processes and compliance with backup policies.'
      ],
      links: {},
      status: 'Production',
      category: 'DevOps'
    },
    {
      title: 'Nexus - Internal Inhouse POS Application',
      description: 'Deployed and optimized resilient infrastructure for Nexus, an internal POS system, ensuring high availability and robust monitoring for retail operations at purplle.com.',
      technologies: ['GCP', 'Grafana', 'Prometheus', 'Python', 'WAF', 'Terraform'],
      features: [
        'Designed and deployed high-availability infrastructure using Terraform and GCP services, ensuring uninterrupted retail operations.',
        'Integrated monitoring and alerting with Grafana and Prometheus, enabling real-time system performance visibility.',
        'Implemented WAF to protect the application from common web threats, enhancing security posture.',
        'Successfully transitioned infrastructure management to DevOps and development teams post-deployment for long-term sustainability.'
      ],
      links: {},
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'Monitoring & Alerting Automation',
      description: 'Automated infrastructure monitoring and alerting to improve incident response, reduce downtime, and proactively detect issues at purplle.com.',
      technologies: ['Grafana', 'Prometheus', 'Python', 'GCP'],
      features: [
        'Migrated 100% of legacy alerting systems to Grafana Alerts, enabling unified monitoring across all infrastructure components.',
        'Implemented on-call alerting workflows that reduced mean time to recovery (MTTR) from 30 minutes to 7 minutes.',
        'Built custom Grafana dashboards for proactive monitoring of system health, capacity, and performance metrics.',
        'Established automated alert routing and escalation policies, improving response times and incident handling.'
      ],
      links: {},
      status: 'Production',
      category: 'Platform Engineering'
    },
    {
      title: 'Cloud Infrastructure Security Enhancements',
      description: 'Strengthened cloud infrastructure security by automating key security controls, minimizing risks, and reducing attack surface at purplle.com.',
      technologies: ['GCP', 'Python', 'Terraform', 'Kubernetes', 'Secrets Manager'],
      features: [
        'Automated IAM role minimization and unused service account cleanup, reducing unauthorized access risks.',
        'Implemented Secure Boot and automated firewall rule cleanups to harden infrastructure security.',
        'Deployed Secrets Manager for secure handling of sensitive data across Kubernetes (GKE), VMs, and services.',
        'Enabled automated network logging and public IP cleanup, minimizing exposure to external threats.',
        'Adopted zero-trust security principles across cloud resources to enforce least privilege access and compliance.'
      ],
      links: {},
      status: 'Production',
      category: 'DevSecOps'
    }
  ],

  // 
  quickActions: [
    { name: "Email", url: "mailto:guptakushal070@gmail.com", icon: "Mail", description: "Get in touch directly" },
    { name: "Calendar", url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Kushal&details=Please+add+a+Google+Meet+link+after+saving.&location=Online&add=guptakushal070@gmail.com", icon: "Calendar", description: "Schedule a meeting" },
    { name: "Self-Hosted Blog", url: "https://thisiskushal31.github.io/blog/#/", icon: "LinkIcon", description: "Read my articles on Self-Hosted Site" },
    { name: "Bio Link", url: "https://thisiskushal31.github.io/link/#/", icon: "LinkIcon", description: "All my links in one place" },
    { name: "LinkedIn", url: "https://linkedin.com/in/thisiskushalgupta", icon: "Globe", description: "Professional network" },
    { name: "Hashnode", url: "https://thisiskushal.hashnode.dev/", icon: "LinkIcon", description: "View my articles on Hashnode" },
    { name: "Medium", url: "https://thisiskushalgupta.medium.com/", icon: "LinkIcon", description: "Read my articles on Medium" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "CodeIcon", description: "Code repositories" },
    { name: "X.com", url: "https://x.com/thisis_kushal", icon: "LinkIcon", description: "Let's connect on X" },
    { name: "Codepen", url: "https://codepen.io/thisiskushal31/", icon: "LinkIcon", description: "Browse my projects on codepen" },
    { name: "Leetcode", url: "https://leetcode.com/u/Quick067/", icon: "LinkIcon", description: "Leetcode profile" },
    { name: "GCP-Badge", url: "https://www.cloudskillsboost.google/public_profiles/69072982-dd9b-46f1-9e9d-606cef93e04a", icon: "Award", description: "Google Cloud Skill Boost Badges by Qwiklabs" }
  ],

  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thisiskushalgupta/", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/thisiskushal31", icon: "Github" }
  ]
};
