import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Rocket, Code, Shield, Target } from "lucide-react";

const Roles = () => {
  const roles = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Project Leadership & Delivery",
      responsibilities: [
        "Led end-to-end project delivery for multiple clients, utilizing a diverse technology stack to enhance product performance and maintainability",
        "Collaborated with executive leadership to define cloud migration strategies and align technology initiatives with organizational goals",
        "Conducted regular client and internal team meetings to track progress, address blockers, and ensure alignment with project timelines"
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "System Architecture & Design",
      responsibilities: [
        "Initiated system/code review or reverse engineering of legacy systems to generate simplified high-level architectural diagrams",
        "Designed and implemented integration solutions between Laravel (PHP) and external systems including Java and .NET applications using REST APIs",
        "Established local development environments using Unix-based virtual machines to streamline project onboarding and accelerate development cycles"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Infrastructure & Cloud Management",
      responsibilities: [
        "Provided expert guidance on infrastructure components, including DNS-domain configurations and optimization of idle databases on cloud servers",
        "Managed GitHub workflows, including code review and version control; administered AWS environments including LAMP stacks, Lightsail instances, and S3 bucket configurations",
        "Facilitated system setup on AWS and team onboarding through comprehensive documentation and architectural diagrams"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership & Mentorship",
      responsibilities: [
        "Led cross-functional teams in delivering scalable, high-impact enterprise applications using containerized deployments and RESTful API architecture",
        "Mentored junior developers, promoting technical excellence and adherence to best practices through code reviews and hands-on guidance",
        "Worked closely with UI/UX teams to develop and implement custom Drupal themes, improving website accessibility, responsiveness, and performance"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Analysis & Documentation",
      responsibilities: [
        "Performed requirements gathering, system and workflow analysis, documentation, deployment planning, and team coordination",
        "Created comprehensive technical documentation including system architecture diagrams, API specifications, and deployment guides",
        "Conducted thorough code reviews and quality assurance processes to ensure adherence to coding standards and best practices"
      ]
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Technical Excellence",
      responsibilities: [
        "Designed and implemented SSO authentication, web services, and APIs with performance optimization using tools like MemCached and load balancing",
        "Led development of scalable solutions supporting both structured and unstructured data with focus on security and performance",
        "Implemented continuous integration and deployment pipelines for automated testing and streamlined release processes"
      ]
    }
  ];

  return (
    <section id="roles" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles & Responsibilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key responsibilities and achievements throughout my career
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <Card key={index} className="animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {role.icon}
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
