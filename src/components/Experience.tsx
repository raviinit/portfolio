import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Users, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Architect",
      company: "ALLSHORE TECHNOLOGY PVT. LTD.",
      location: "Hyderabad, TG, IN",
      period: "Nov 2024 - Present",
      type: "Remote",
      teamSize: "13",
      description: "Business solutions company providing solutions for clients on various technologies using PHP, Java, .Net, Python on cloud platform.",
      responsibilities: [
        "Handled 'MassageBook' projects for the client TogetherWork",
        "Coupled with various technologies to support and enhance applications"
      ],
      techStack: ["LAMP Stack", "PHP 8.0", "HTML", "CSS", "Vue.js", "MySQL", "APIs", "AWS", "Linux", "SVN", "Jira"]
    },
    {
      title: "Technical Lead",
      company: "XINTHE TECHNOLOGY PVT. LTD.",
      location: "Vizag, AP, IN",
      period: "May 2023 - Nov 2023",
      type: "Remote",
      teamSize: "12",
      description: "Business solutions company providing solutions using Data science, PHP, Java, .Net, Python on cloud platform.",
      responsibilities: [
        "Handled projects for LimoAnywhere and Addons",
        "Successfully handled SVN activities and AWS platform of LAMP environment",
        "Managed web sockets/hooks implementation"
      ],
      techStack: ["LAMP Stack", "PHP 7.0", "Drupal 7", "Backbone.js", "MySQL", "MongoDB", "APIs", "AWS"]
    },
    {
      title: "Senior Consultant",
      company: "NETESENZ Inc.",
      location: "Baltimore, MD, USA",
      period: "Oct 2022 - Mar 2023",
      type: "Remote",
      teamSize: "5",
      description: "Enhanced and supported projects developed in PHP Laravel and Symfony for clients.",
      responsibilities: [
        "EnterpriseWireless (EWA) - Spectrum Intel: EDI and reporting tools",
        "Gybsy: Ticketing platform integrated with Blockchain technology",
        "Managed AWS cloud platform and Lightsail instances"
      ],
      techStack: ["Laravel", "Symfony", "PHP 8.1", "Bootstrap", "Livewire", "MySQL", "MongoDB", "AWS Lightsail", "S3"]
    },
    {
      title: "Technical Lead",
      company: "AERIES TECHNOLOGY PVT. LTD.",
      location: "Bangalore, KA, IN",
      period: "Jun 2021 - Apr 2022",
      type: "Remote",
      teamSize: "5",
      description: "Provided business solutions using AI, ML, Data science, PHP, Java, .Net on cloud platform.",
      responsibilities: [
        "Handled projects for client PGi",
        "Integrated new Zoho APIs into existing systems",
        "Managed AWS infrastructure and migrations"
      ],
      techStack: ["Zend", "Scala", "PHP 7.0", "Drupal 7", "Backbone.js", "React", "PostgreSQL", "AWS Lambda", "CloudFront"]
    },
    {
      title: "Senior Architect",
      company: "CONSO4S TECHNOLOGIES (I) PVT. LTD.",
      location: "Bangalore, KA, IN",
      period: "Nov 2020 - May 2021",
      type: "Remote",
      teamSize: "4",
      description: "Delivered and managed digital product lines for small and medium sized organizations.",
      responsibilities: [
        "Handled projects for Signum International Limited",
        "Managed multi-technology stack applications"
      ],
      techStack: ["Laravel", "Go", "Node.js", "React", "Angular", "MySQL", "MS SQL", "AWS", "Nginx"]
    },
    {
      title: "Senior Architect",
      company: "LOGISOFTWARE (I) PVT. LTD.",
      location: "Bangalore, KA, IN",
      period: "Dec 2016 - May 2020",
      teamSize: "15",
      description: "Provided solutions for clients in Logistics domain.",
      responsibilities: [
        "Handled projects for Econocaribe (ECUworldwide)",
        "Payment Gateway integrations",
        "Integrated Laravel PHP with Java applications using APIs",
        "Designed EDI background processes and Reports portal"
      ],
      techStack: ["Laravel", "Drupal", "WordPress", "Java", "Vue.js", "Angular", "MySQL", "MS SQL", "MongoDB"]
    },
    {
      title: "Senior Software Engineer",
      company: "KNOWLEDGE ADVENTURE (I) PVT. LTD.",
      location: "Bangalore, KA, IN",
      period: "Jun 2014 - Mar 2015",
      teamSize: "15",
      description: "Handled several projects integrating .Net and PHP platforms.",
      responsibilities: [
        "NFLrush: Official website for National Football League gaming",
        "Neopets: Famous gaming website acquired by KAI/Jumpstart"
      ],
      techStack: ["PHP 5.3", "HTML5", "CSS3", "jQuery", "ExtJS", "WordPress", "Drupal", "CodeIgniter", "Azure"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            18+ years of delivering innovative solutions across diverse industries and technologies
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-slide-up shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 items-center text-base">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    {exp.teamSize && (
                      <Badge variant="secondary" className="w-fit">
                        <Users className="h-3 w-3 mr-1" />
                        Team Size: {exp.teamSize}
                      </Badge>
                    )}
                    {exp.type && (
                      <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                        {exp.type}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
