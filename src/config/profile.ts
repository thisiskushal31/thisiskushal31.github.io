// Profile configuration for the link/bio website
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  links: LinkItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating: number;
  platform: string;
  platformUrl?: string;
}

export interface PlatformLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface TestimonialSection {
  id: string;
  title: string;
  icon: string;
  testimonials: Testimonial[];
  platformLinks?: PlatformLink[];
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  socialLinks: SocialLink[];
  sections: Section[];
  testimonialSection?: TestimonialSection;
}

export const profile: Profile = {
  name: "Kushal Gupta",
  title: "DevOps Engineer",
  bio: "🚀 Experienced DevOps & Platform Engineer | Skilled in Containers, CI/CD, IaC | Exploring AI, Cloud-Native & Secure Systems",
  avatar: "https://kushal.cv/profile.jpeg",
  location: "Kolkata, India",
  socialLinks: [
    { id: "website", name: "Website", url: "https://kushal.cv/", icon: "Globe" },
    { id: "email", name: "E-Mail", url: "mailto:guptakushal070@gmail.com", icon: "Mail" },
    { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/in/thisiskushalgupta", icon: "Linkedin" },
    { id: "twitter", name: "X.com", url: "https://x.com/thisis_kushal", icon: "XTwitter" },
    { id: "github", name: "GitHub", url: "https://github.com/thisiskushal31", icon: "Github" },
    { id: "blog", name: "Blog", url: "https://blog.kushal.cv/", icon: "BookOpen" },
    { id: "meeting", name: "Schedule Meeting", url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Kushal&details=Please+add+a+Google+Meet+link+after+saving.&location=Online&add=guptakushal070@gmail.com", icon: "Calendar" },
    { id: "docs", name: "Documentation", url: "https://thisiskushal31.github.io/dochub/", icon: "FileText" },
  ],
  // testimonialSection: {
  //   id: "testimonials",
  //   title: "Client Testimonials",
  //   icon: "MessageSquareQuote",
  //   testimonials: [
  //     {
  //       id: "testimonial-1",
  //       quote: "Kushal delivered exceptional DevOps solutions that transformed our deployment pipeline. Highly recommended for any infrastructure work!",
  //       author: "Priya Sharma",
  //       role: "CTO at TechStartup",
  //       rating: 5,
  //       platform: "Topmate",
  //       platformUrl: "https://topmate.io/thisiskushal",
  //     },
  //     {
  //       id: "testimonial-2",
  //       quote: "Outstanding Kubernetes expertise! Kushal helped us scale our application seamlessly with proper CI/CD implementation.",
  //       author: "Amit Verma",
  //       role: "Engineering Lead",
  //       rating: 5,
  //       platform: "Upwork",
  //       platformUrl: "https://upwork.com/",
  //     },
  //     {
  //       id: "testimonial-3",
  //       quote: "Great communication and deep understanding of cloud architecture. Completed the project ahead of schedule.",
  //       author: "Sarah Chen",
  //       role: "Product Manager",
  //       rating: 5,
  //       platform: "Fiverr",
  //       platformUrl: "https://fiverr.com/",
  //     },
  //     {
  //       id: "testimonial-4",
  //       quote: "Kushal's guidance on AWS infrastructure optimization saved us significant costs. Very knowledgeable consultant!",
  //       author: "Rahul Mehta",
  //       role: "Startup Founder",
  //       rating: 5,
  //       platform: "Topmate",
  //       platformUrl: "https://topmate.io/thisiskushal",
  //     },
  //   ],
  //   platformLinks: [
  //     { id: "topmate", name: "Topmate", url: "https://topmate.io/thisiskushal", icon: "Users" },
  //     { id: "upwork", name: "Upwork", url: "https://upwork.com/", icon: "SiUpwork" },
  //     { id: "fiverr", name: "Fiverr", url: "https://fiverr.com/", icon: "TbBrandFiverr" },
  //     { id: "freelancer", name: "Freelancer", url: "https://freelancer.com/", icon: "SiFreelancer" },
  //   ],
  // },
  sections: [
    {
      id: "find",
      title: "You Can Find Me On",
      icon: "Link",
      links: [
        // { id: "upwork", title: "Upwork", url: "https://upwork.com/", icon: "SiUpwork" },
        // { id: "fiverr", title: "Fiverr", url: "https://fiverr.com/", icon: "TbBrandFiverr" },
        // { id: "freelancer", title: "Freelancer", url: "https://freelancer.com/", icon: "SiFreelancer" },
        { id: "hashnode", title: "Hashnode", url: "https://hashnode.com/@thisiskushal31", icon: "SiHashnode" },
        { id: "medium", title: "Medium", url: "https://medium.com/@thisiskushal31", icon: "SiMedium" },
        { id: "codepen", title: "CodePen", url: "https://codepen.io/thisiskushal31", icon: "SiCodepen" },
        { id: "leetcode", title: "LeetCode", url: "https://leetcode.com/thisiskushal31", icon: "SiLeetcode" },
      ],
    },
    {
      id: "ai",
      title: "AI Security & DevSecOps",
      icon: "Shield",
      links: [
        { id: "ai-shift-left-security-series", title: "AI Shift-Left Security Series", url: "https://blog.kushal.cv/ai-shift-left-security", icon: "Shield" },
        { id: "ai-security-problem-solution", title: "AI Security Problem & Solution", url: "https://blog.kushal.cv/ai-shift-left-security-part1", icon: "AlertTriangle" },
        { id: "ai-security-implementation-guide", title: "AI Security Implementation Guide", url: "https://blog.kushal.cv/ai-shift-left-security-part2", icon: "Settings" },
        { id: "ai-security-trends-2025", title: "2025 AI Security Trends", url: "https://blog.kushal.cv/ai-shift-left-security-part3", icon: "TrendingUp" },
      ],
    },
    {
      id: "database",
      title: "Database Mastery Series",
      icon: "Database",
      links: [
        { id: "database-mastery-series-index", title: "Database Mastery Series Index", url: "https://blog.kushal.cv/database-mastery-series-index", icon: "Database" },
        { id: "relational-vs-nosql-databases", title: "Relational vs NoSQL Databases", url: "https://blog.kushal.cv/relational-vs-nosql-databases-complete-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "mysql",
      title: "MySQL Deployment Guide",
      icon: "Database",
      links: [
        { id: "mysql-deployment-guide", title: "MySQL Deployment Guide", url: "https://blog.kushal.cv/mysql-deployment-guide", icon: "Database" },
        { id: "mysql-cloud-vs-self-managed", title: "MySQL Cloud vs Self-Managed", url: "https://blog.kushal.cv/mysql-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "mysql-cloud-managed-rds-cloud-sql-azure", title: "MySQL Cloud Managed (RDS, Cloud SQL, Azure)", url: "https://blog.kushal.cv/mysql-cloud-managed-rds-cloud-sql-azure-deep-dive", icon: "Server" },
        { id: "mysql-self-managed-vm-bare-metal", title: "MySQL Self-Managed VM & Bare Metal", url: "https://blog.kushal.cv/mysql-self-managed-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "mysql-docker-deployment", title: "MySQL Docker Deployment", url: "https://blog.kushal.cv/mysql-docker-container-deployment-strategies", icon: "Container" },
        { id: "mysql-kubernetes-deployment", title: "MySQL Kubernetes Deployment", url: "https://blog.kushal.cv/mysql-kubernetes-statefulset-operator-deep-dive", icon: "Kubernetes" },
        { id: "mysql-local-development", title: "MySQL Local Development", url: "https://blog.kushal.cv/mysql-local-development-docker-native-quick-start", icon: "Code" },
        { id: "mysql-performance-optimization", title: "MySQL Performance Optimization", url: "https://blog.kushal.cv/mysql-performance-optimization-query-tuning-indexing", icon: "Gauge" },
        { id: "mysql-decision-matrix", title: "MySQL Decision Matrix", url: "https://blog.kushal.cv/mysql-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "postgresql",
      title: "PostgreSQL Deployment Guide",
      icon: "Database",
      links: [
        { id: "postgresql-deployment-guide", title: "PostgreSQL Deployment Guide", url: "https://blog.kushal.cv/postgresql-deployment-guide", icon: "Database" },
        { id: "postgresql-cloud-vs-self-managed", title: "PostgreSQL Cloud vs Self-Managed", url: "https://blog.kushal.cv/postgresql-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "postgresql-cloud-managed-rds-cloud-sql-azure", title: "PostgreSQL Cloud Managed (RDS, Cloud SQL, Azure)", url: "https://blog.kushal.cv/postgresql-cloud-managed-rds-cloud-sql-azure-deep-dive", icon: "Server" },
        { id: "postgresql-self-managed-vm-bare-metal", title: "PostgreSQL Self-Managed VM & Bare Metal", url: "https://blog.kushal.cv/postgresql-self-managed-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "postgresql-docker-deployment", title: "PostgreSQL Docker Deployment", url: "https://blog.kushal.cv/postgresql-docker-container-deployment-strategies", icon: "Container" },
        { id: "postgresql-kubernetes-deployment", title: "PostgreSQL Kubernetes Deployment", url: "https://blog.kushal.cv/postgresql-kubernetes-statefulset-operator-deep-dive", icon: "Kubernetes" },
        { id: "postgresql-local-development", title: "PostgreSQL Local Development", url: "https://blog.kushal.cv/postgresql-local-development-docker-native-quick-start", icon: "Code" },
        { id: "postgresql-performance-optimization", title: "PostgreSQL Performance Optimization", url: "https://blog.kushal.cv/postgresql-performance-optimization-query-tuning-indexing", icon: "Gauge" },
        { id: "postgresql-decision-matrix", title: "PostgreSQL Decision Matrix", url: "https://blog.kushal.cv/postgresql-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "mongodb",
      title: "MongoDB Deployment Guide",
      icon: "Database",
      links: [
        { id: "mongodb-deployment-guide", title: "MongoDB Deployment Guide", url: "https://blog.kushal.cv/mongodb-deployment-guide", icon: "Database" },
        { id: "mongodb-cloud-vs-self-managed", title: "MongoDB Cloud vs Self-Managed", url: "https://blog.kushal.cv/mongodb-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "mongodb-cloud-managed-atlas", title: "MongoDB Cloud Managed (Atlas)", url: "https://blog.kushal.cv/mongodb-cloud-managed-atlas-deep-dive", icon: "Server" },
        { id: "mongodb-self-managed-vm-bare-metal", title: "MongoDB Self-Managed VM & Bare Metal", url: "https://blog.kushal.cv/mongodb-self-managed-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "mongodb-docker-deployment", title: "MongoDB Docker Deployment", url: "https://blog.kushal.cv/mongodb-docker-container-deployment-strategies", icon: "Container" },
        { id: "mongodb-kubernetes-deployment", title: "MongoDB Kubernetes Deployment", url: "https://blog.kushal.cv/mongodb-kubernetes-statefulset-operator-deep-dive", icon: "Kubernetes" },
        { id: "mongodb-local-development", title: "MongoDB Local Development", url: "https://blog.kushal.cv/mongodb-local-development-docker-native-quick-start", icon: "Code" },
        { id: "mongodb-performance-optimization", title: "MongoDB Performance Optimization", url: "https://blog.kushal.cv/mongodb-performance-optimization-query-tuning-indexing", icon: "Gauge" },
        { id: "mongodb-decision-matrix", title: "MongoDB Decision Matrix", url: "https://blog.kushal.cv/mongodb-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "redis",
      title: "Redis Deployment Guide",
      icon: "Database",
      links: [
        { id: "redis-deployment-guide", title: "Redis Deployment Guide", url: "https://blog.kushal.cv/redis-deployment-guide", icon: "Database" },
        { id: "redis-cloud-vs-self-managed", title: "Redis Cloud vs Self-Managed", url: "https://blog.kushal.cv/redis-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "redis-cloud-managed-elasticache-memorystore", title: "Redis Cloud Managed (ElastiCache, Memorystore)", url: "https://blog.kushal.cv/redis-cloud-managed-elasticache-memorystore-deep-dive", icon: "Server" },
        { id: "redis-self-managed-vm-bare-metal", title: "Redis Self-Managed VM & Bare Metal", url: "https://blog.kushal.cv/redis-self-managed-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "redis-docker-deployment", title: "Redis Docker Deployment", url: "https://blog.kushal.cv/redis-docker-container-deployment-strategies", icon: "Container" },
        { id: "redis-kubernetes-deployment", title: "Redis Kubernetes Deployment", url: "https://blog.kushal.cv/redis-kubernetes-statefulset-operator-deep-dive", icon: "Kubernetes" },
        { id: "redis-local-development", title: "Redis Local Development", url: "https://blog.kushal.cv/redis-local-development-docker-native-quick-start", icon: "Code" },
        { id: "redis-performance-optimization", title: "Redis Performance Optimization", url: "https://blog.kushal.cv/redis-performance-optimization-memory-management", icon: "Gauge" },
        { id: "redis-decision-matrix", title: "Redis Decision Matrix", url: "https://blog.kushal.cv/redis-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "aerospike",
      title: "Aerospike Deployment Guide",
      icon: "Database",
      links: [
        { id: "aerospike-deployment-guide", title: "Aerospike Deployment Guide", url: "https://blog.kushal.cv/aerospike-deployment-guide", icon: "Database" },
        { id: "aerospike-cloud-vs-self-managed", title: "Aerospike Cloud vs Self-Managed", url: "https://blog.kushal.cv/aerospike-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "aerospike-architecture-deep-dive", title: "Aerospike Architecture Deep Dive", url: "https://blog.kushal.cv/aerospike-architecture-deep-dive-hybrid-memory", icon: "Architecture" },
        { id: "aerospike-self-managed-vm-bare-metal", title: "Aerospike Self-Managed VM & Bare Metal", url: "https://blog.kushal.cv/aerospike-self-managed-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "aerospike-docker-deployment", title: "Aerospike Docker Deployment", url: "https://blog.kushal.cv/aerospike-docker-container-deployment-strategies", icon: "Container" },
        { id: "aerospike-kubernetes-deployment", title: "Aerospike Kubernetes Deployment", url: "https://blog.kushal.cv/aerospike-kubernetes-statefulset-deep-dive", icon: "Kubernetes" },
        { id: "aerospike-local-development", title: "Aerospike Local Development", url: "https://blog.kushal.cv/aerospike-local-development-docker-native-quick-start", icon: "Code" },
        { id: "aerospike-performance-optimization", title: "Aerospike Performance Optimization", url: "https://blog.kushal.cv/aerospike-performance-optimization-hma-clustering", icon: "Gauge" },
        { id: "aerospike-decision-matrix", title: "Aerospike Decision Matrix", url: "https://blog.kushal.cv/aerospike-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    {
      id: "elasticsearch",
      title: "Elasticsearch Deployment Guide",
      icon: "Search",
      links: [
        { id: "elasticsearch-deployment-guide", title: "Elasticsearch Deployment Guide", url: "https://blog.kushal.cv/elasticsearch-deployment-guide", icon: "Database" },
        { id: "elastic-cloud-vs-self-managed", title: "Elastic Cloud vs Self-Managed", url: "https://blog.kushal.cv/elastic-cloud-vs-self-managed-strategic-decision-framework", icon: "Cloud" },
        { id: "elastic-cloud-deep-dive", title: "Elastic Cloud Deep Dive", url: "https://blog.kushal.cv/elastic-cloud-deep-dive-hosted-vs-serverless-architecture", icon: "Server" },
        { id: "elasticsearch-self-managed-infrastructure", title: "Elasticsearch Self-Managed Infrastructure", url: "https://blog.kushal.cv/self-managed-elasticsearch-vm-bare-metal-production-guide", icon: "Settings" },
        { id: "elasticsearch-docker-deployment", title: "Elasticsearch Docker Deployment", url: "https://blog.kushal.cv/docker-elasticsearch-container-deployment-strategies", icon: "Container" },
        { id: "elasticsearch-kubernetes-deep-dive", title: "Elasticsearch Kubernetes Deep Dive", url: "https://blog.kushal.cv/kubernetes-elasticsearch-eck-helm-raw-yaml-deep-dive", icon: "Kubernetes" },
        { id: "elasticsearch-local-development", title: "Elasticsearch Local Development", url: "https://blog.kushal.cv/elasticsearch-local-development-docker-packages-quick-start", icon: "Code" },
        { id: "elasticsearch-decision-matrix", title: "Elasticsearch Decision Matrix", url: "https://blog.kushal.cv/elasticsearch-deployment-decision-matrix-complete-comparison-guide", icon: "BarChart3" },
      ],
    },
    // {
    //   id: "resources",
    //   title: "Additional Resources",
    //   icon: "FolderOpen",
    //   links: [
    //     { id: "hashnode", title: "Hashnode", url: "https://hashnode.com/@thisiskushal31", icon: "SiHashnode" },
    //     { id: "medium", title: "Medium", url: "https://medium.com/@thisiskushal31", icon: "SiMedium" },
    //     { id: "codepen", title: "CodePen", url: "https://codepen.io/thisiskushal31", icon: "SiCodepen" },
    //     { id: "leetcode", title: "LeetCode", url: "https://leetcode.com/thisiskushal31", icon: "SiLeetcode" },
    //   ],
    // },
  ],
};
