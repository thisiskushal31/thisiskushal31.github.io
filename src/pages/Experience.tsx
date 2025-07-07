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
        "Led automation, cost optimization, CI/CD, and cloud infrastructure initiatives to boost uptime, security, and scalability at Purplle.com.",
      achievements: [
        "Automated 40%+ of infrastructure provisioning using Terraform, Jenkins, and GitOps pipelines, accelerating deployment speed and reducing manual tasks.",
        "Achieved and sustained 99%+ service uptime by managing production infrastructure, ensuring availability during high-traffic sales events.",
        "Reduced cloud costs by 40-50% on GCP and AWS through autoscaling, rightsizing, resource cleanup, and usage audits.",
        "Decreased incident response time (MTTR) from 30 minutes to 7 minutes by implementing on-call alerting systems with Prometheus and Grafana.",
        "Designed and deployed disaster recovery and backup solutions for critical databases and services using Python and automation scripts, enhancing resilience and data integrity.",
        "Led infrastructure deployment for Nexus POS (in-house retail POS) and Hypertest (third-party QA testing tool), ensuring reliable operations and smooth handover to DevOps and development teams.",
        "Collaborated cross-functionally to diagnose and resolve production issues, improving overall system reliability and incident resolution workflows.",
      ],
      technologies: [
        "GCP",
        "AWS",
        "Terraform",
        "Jenkins",
        "GitOps",
        "Python",
        "CI/CD",
        "Prometheus",
        "Grafana",
        "Container Orchestration",
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
        "Built and deployed monitoring systems for cloud infrastructure to improve uptime and system reliability.",
      achievements: [
        "Implemented monitoring and alerting stack using Prometheus and Grafana, achieving >98% uptime and enabling faster incident response.",
        "Collaborated with DevOps and platform teams to troubleshoot high-impact production issues, improving platform stability and observability.",
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
