import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LinkableHeading from "@/components/LinkableHeading";
import { portfolioConfig } from "@/config/portfolio";

const Skills = () => {
  const certifications = [
    // Certifications Earned
    "Google Cloud Associate Cloud Engineer",

    // Relevant Advanced Courses Completed
    "Architecting with Google Kubernetes Engine: Foundations",
    "Architecting with Google Compute Engine Specialization",
    "Elastic Google Cloud Infrastructure: Scaling and Automation",
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <LinkableHeading
            level={1}
            id="technical-skills"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical Skills
          </LinkableHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the full spectrum of Software Engineering—from Cloud and
            DevOps to Security and beyond.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioConfig.skills.categories.map((category, index) => (
            <Card
              key={category.title}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="tech-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <LinkableHeading
            level={2}
            id="certifications"
            className="text-3xl font-bold mb-8"
          >
            Certifications & Training
          </LinkableHeading>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div>
          <LinkableHeading
            level={2}
            id="learning-path"
            className="text-3xl font-bold text-center mb-8"
          >
            Current Learning Path
          </LinkableHeading>
          <Card>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-syntax-blue mb-2">
                    Cloud-Native Security
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    DevSecOps, Secrets Management, SAST/DAST, Cloud Security
                    Tools
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-syntax-green mb-2">
                    Platform Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Internal Developer Platforms, GitOps Workflows, Service Mesh
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-syntax-purple mb-2">
                    Infrastructure Observability
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced Monitoring, OpenTelemetry, Tracing, Chaos
                    Engineering
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-syntax-orange mb-2">
                    Serverless & Event-Driven
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Cloud Run, AWS Lambda, Event-Driven Patterns, Workflow
                    Automation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
