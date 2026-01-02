import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import LinkableHeading from "@/components/LinkableHeading";

const Experience = () => {
  const experiences = [
    {
      title: "SDE1 - DevOps",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India",
      period: "May 2024 - Present",
      type: "Hybrid",
      description:
        "Leading high-availability infrastructure deployments, automation, and observability initiatives to ensure 99%+ uptime and optimize cloud operations at Purplle.com.",
      achievements: [
        "Managed and maintained main e-commerce platform infrastructure (Purplle.com) under high load, supporting ₹700 Crore annual revenue, 7M total users with 4x traffic spike handling during major sales events, reducing site downtime by 33%.",
        "Deployed and managed high-availability PurplleAds (AdTech) platform, supporting ₹400+ Crore brand advertising revenue and 7M total users with 4x traffic spike handling during major sales events, achieving 93% cost reduction by replacing third-party software with in-house solution.",
        "Deployed high-availability Nexus (POS) across retail stores, maintaining 99%+ uptime using GCP (GKE, GCR, Cloud SQL, Load Balancer, WAF, VPC), handling 7M total users with 4x traffic spike handling during major sales events.",
        "Engineered DR solutions and automated backups for MySQL, MongoDB, and Elasticsearch, ensuring data resilience and integrity.",
        "Built agentic AI automation for Elasticsearch cluster management using n8n, Terraform, Ansible, and Python, streamlining provisioning.",
        "Managed 125+ Kubernetes deployments on GKE, including Hypertest (QA tool), ensuring production reliability and scalability.",
        "Accelerated infrastructure delivery by 40%+ through CI/CD automation (Terraform, Jenkins, GitOps), automating 40%+ of provisioning tasks.",
        "Modernized CI/CD by migrating Jenkins from freestyle to scripted pipelines with Slack alerts, reducing incident response time.",
        "Reduced MTTR from 30 to 7 minutes by architecting unified observability stack (Prometheus, Grafana) with automated escalation.",
        "Achieved 30% cloud cost reduction through rightsizing GCP/AWS instances, autoscaling policies, and resource cleanup (improving security posture by removing unused resources).",
        "Hardened security via Kubernetes RBAC, Secure Boot, automated IAM minimization, Trivy scanning (GitLab CI), Secrets Manager, SSO, IP whitelisting, and zero-trust architecture.",
      ],
      technologies: [
        "GCP",
        "AWS",
        "GKE",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitOps",
        "Python",
        "n8n",
        "CI/CD",
        "Prometheus",
        "Grafana",
        "MySQL",
        "MongoDB",
        "Elasticsearch",
        "Trivy",
        "GitLab CI",
        "Secrets Manager",
        "SSO",
        "IAM",
        "Keycloak",
        "ALB",
        "GCLB",
        "Route53",
        "WAF",
        "VPC",
      ],
      links: [],
    },
    {
      title: "Associate Software Engineer",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India",
      period: "June 2023 - May 2024",
      type: "Hybrid",
      description:
        "Focused on cloud cost optimization, disaster recovery, and security enhancements to improve operational efficiency and system resilience.",
      achievements: [
        "Achieved 40–50% cost savings by performing cloud infrastructure rightsizing and cleaning up unused resources, resulting in optimized cloud spend.",
        "Improved system resilience by designing and implementing backup and disaster recovery solutions, with multiple PoCs promoted to production.",
        "Enhanced operational efficiency by deploying an on-call alerting system, reducing mean incident response time from 30 to 7 minutes.",
        "Reduced site downtime by 50% during sale events through infrastructure optimization and proactive monitoring.",
        "Enabled QA velocity by deploying Hypertest (A Third Party Testing Tool) infrastructure, delivering it ahead of schedule and handing over to the dev team.",
        "Strengthened cloud security posture by leading initiatives in IAM role minimization, Secure Boot, and automated cleanup of public IPs and service accounts — resulting in improved compliance and reduced attack surface.",
      ],
      technologies: [
        "GCP",
        "AWS",
        "Terraform",
        "Python",
        "Prometheus",
        "Grafana",
        "Kubernetes",
        "CI/CD",
      ],
      links: [],
    },
    {
      title: "DevOps Intern",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India",
      period: "January 2023 - June 2023",
      type: "Remote",
      description:
        "Built and deployed monitoring systems for cloud infrastructure to improve uptime and system reliability.",
      achievements: [
        "Achieved >98% uptime by deploying a robust monitoring and alerting system using Prometheus and Grafana, resulting in faster detection and resolution of issues.",
        "Improved platform reliability by collaborating across teams to resolve high-impact issues in production infrastructure.",
      ],
      technologies: ["Prometheus", "Grafana", "GCP"],
      links: [],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution:
        "Maulana Abul Kalam Azad University of Technology, West Bengal",
      period: "2019 - 2023",
      highlights: [
        "Relevant Coursework: Operating Systems, Data Structures, Algorithms, Computer Networks, Database Management Systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <LinkableHeading
            level={1}
            id="professional-experience"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional Experience
          </LinkableHeading>
          <p className="text-xl text-muted-foreground">
            My Journey in Software Engineering
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-lg font-semibold text-primary">
                        {exp.company}
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {exp.links.length > 0 && (
                  <div className="flex space-x-2">
                    {exp.links.map((link, i) => (
                      <Button key={i} variant="outline" size="sm" asChild>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div>
          <LinkableHeading
            level={2}
            id="education"
            className="text-3xl font-bold mb-8 text-center"
          >
            Education
          </LinkableHeading>
          {education.map((edu, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground mb-4">{edu.period}</p>
                  <div className="space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Resume CTA
        <div className="text-center mt-16">
          <LinkableHeading
            level={3}
            id="resume"
            className="text-2xl font-semibold mb-4"
          >
            Want the Full Details?
          </LinkableHeading>
          <p className="text-muted-foreground mb-6">
            Download my complete resume for a comprehensive view of my
            experience and qualifications.
          </p>
          <Button size="lg" asChild>
            <a href="#" download>
              Download Resume (PDF)
            </a>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
