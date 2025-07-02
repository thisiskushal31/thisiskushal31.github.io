import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import LinkableHeading from "@/components/LinkableHeading";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer (Associate, SDE-1)",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India",
      period: "June 2023 - Present",
      type: "Hybrid",
      description:
        "Automated infra, cut cloud costs 40%+, achieved 99% uptime, led CI/CD and security compliance, and enabled resilient, scalable deployments at Purplle.com.",
      achievements: [
        "Automated 40%+ of infrastructure provisioning using CI/CD, Terraform, Jenkins, and GitOps, significantly boosting delivery speed.",
        "Achieved and maintained 99%+ service uptime by managing critical production infrastructure and ensuring consistent availability during peak loads.",
        "Optimized cloud spend by 40-50% on GCP/AWS via continuous rightsizing, autoscaling, usage audits, and resource cleanup.",
        "Enhanced system resilience and security by designing and implementing backup/disaster recovery solutions, deploying an on-call alerting system (reducing MTTR from 30 to 7 minutes), and leading IAM role minimization.",
        "Enabled critical business operations by independently deploying infrastructure for the Purplle.com POS application and Hypertest (third-party testing tool), ensuring smooth handovers to dev teams.",
        "Collaborated with platform teams to troubleshoot and resolve high-impact infrastructure issues across services, strengthening system reliability.",
      ],
      technologies: [
        "GCP",
        "AWS",
        "Terraform",
        "Jenkins",
        "GitOps",
        "Python",
        "CI/CD",
        "Container Orchestration",
        "Prometheus",
        "Grafana",
      ],
      links: [],
    },
    {
      title: "DevOps Engineer - Intern",
      company: "Purplle.com",
      location: "Mumbai, Maharashtra, India",
      period: "January 2023 - June 2023",
      type: "Remote",
      description:
        "Deployed a robust monitoring and alerting system using Prometheus and Grafana, achieving over 98% uptime and enabling faster issue detection and resolution. Collaborated with cross-functional teams to improve platform reliability and resolve high-impact production infrastructure issues.",
      achievements: [
        "Achieved >98% uptime by deploying a robust Prometheus and Grafana monitoring and alerting system, leading to faster issue detection and resolution.",
        "Improved platform reliability by collaborating across teams to resolve high-impact issues in production infrastructure.",
      ],
      technologies: ["Prometheus", "Grafana", "GCP"],
      links: ["monitor.purplle.com"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      period: "2019 - 2023",
      highlights: [
        "Relevant Coursework: Operating Systems, Network Security, Database Management Systems",
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
            My journey from Systems Administration to DevOps Engineering
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
