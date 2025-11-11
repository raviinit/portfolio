import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Zap, Globe, Package } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "MassageBook Platform",
      company: "TogetherWork - ALLSHORE TECHNOLOGY",
      description: "Comprehensive enterprise solution for massage therapy business management with integrated booking, scheduling, payment processing, and client management capabilities for wellness professionals.",
      technologies: ["PHP 8.0", "Vue.js", "MySQL", "AWS", "LAMP Stack", "Linux", "SVN", "Jira"],
      highlights: ["Cloud-based architecture on AWS", "Real-time booking and scheduling system", "Payment gateway integration", "Client relationship management"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "LimoAnywhere & Addons",
      company: "XINTHE TECHNOLOGY / COMAKEIT SOFTWARE",
      description: "Enterprise limousine and luxury transportation management system with advanced real-time tracking, automated booking, dispatch management, and comprehensive fleet operations capabilities.",
      technologies: ["PHP 7.0", "Drupal 7", "Backbone.js", "MySQL", "MongoDB", "AWS", "SVN"],
      highlights: ["GPS/GPRS vehicle tracking integration", "Web sockets/hooks for real-time updates", "Multi-tenant architecture", "Unix VM local environment", "AWS LAMP stack deployment"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "EnterpriseWireless (EWA) - Spectrum Intel",
      company: "NETESENZ Inc.",
      description: "Advanced EDI and reporting platform that aggregates wireless spectrum data from public and government portals, providing comprehensive analytics and reporting tools for spectrum management and telecommunications intelligence.",
      technologies: ["Laravel", "Symfony", "PHP 8.1", "Bootstrap", "MySQL", "MongoDB", "AWS Lightsail", "S3", "GitHub"],
      highlights: ["EDI integration with government portals", "Multi-source data aggregation", "Advanced reporting and analytics", "AWS Lightsail and S3 deployment"]
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Gybsy Ticketing Platform",
      company: "NETESENZ Inc.",
      description: "Revolutionary event ticketing platform leveraging Blockchain technology to tokenize venues and tickets, providing enhanced security, authenticity verification, and anti-fraud measures for event organizers and attendees across the USA.",
      technologies: ["Laravel", "Blockchain", "MySQL", "MongoDB", "AWS", "Livewire", "Powergrid", "GitHub"],
      highlights: ["Blockchain venue and ticket tokenization", "NFT-based ticket authentication", "Secure ticket validation and transfer", "Real-time event management"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "NFLrush Gaming Platform",
      company: "Knowledge Adventure",
      description: "Official National Football League gaming website featuring the 'rushzone' module, providing an immersive online gaming experience where children and adults can join as registered users and play interactive NFL-themed games.",
      technologies: ["PHP 5.3", "WordPress", "Drupal", "HTML5", "CSS3", "jQuery", "ExtJS", "CodeIgniter", "Azure", "MySQL"],
      highlights: ["High-traffic gaming platform", "User registration and management", "Windows Azure LAMP stack deployment", "Interactive game integration"]
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "GATIS - Global Asset Tracking & Identification System",
      company: "Earthsearch Communications International Inc.",
      description: "Comprehensive IoT-based Client-Server vehicle tracking and fleet management system that monitors vehicle speed, ignition status, location alerts, and provides real-time GPS tracking for efficient asset management and operational control.",
      technologies: ["PHP", "GPS/GPRS", "IoT Sensors", "Real-time Data Processing", "MySQL", "JavaScript", "AJAX"],
      highlights: ["Real-time GPS vehicle tracking", "IoT sensor integration for vehicle monitoring", "Speed and ignition management", "Automated alert system", "Fleet management dashboard"]
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Mobile Inventory System - Biolab",
      company: "Totalis Consulting Group Inc. / NLEAGUE SERVICES",
      description: "Sophisticated Client-Server mobile application for in-store and delivery logistics in retail mobile computing. Designed for handheld devices with QR code scanning capabilities, enabling real-time inventory tracking and management connected to server via WAN.",
      technologies: ["PHP", "QR Code Reader", "Mobile Computing", "SQL Server", "JavaScript", "AJAX", "XML", "WinCE"],
      highlights: ["QR code scanning integration", "Handheld device optimization", "Real-time inventory synchronization", "WAN connectivity", "Delivery logistics tracking"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Griffin Property Aquity V2",
      company: "Griffin Property Australia - COVALENSE TECHNOLOGIES",
      description: "Comprehensive real estate management platform for property leasing and sales operations in Sydney, Australia. Features integrated property and contact management modules for managing lease agreements, property sales, and client relationships.",
      technologies: ["PHP 5.3", "Zend Framework 1.1", "Doctrine", "Oracle 11g", "ExtJS", "MySQL", "HTML5", "CSS3", "AJAX", "jQuery"],
      highlights: ["Property lease and sales management", "Contact CRM for individuals and companies", "Australian real estate market specialization", "Full LAMP stack deployment"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Agent Fleet Management System",
      company: "Agentek Inc. / NLEAGUE SERVICES",
      description: "Advanced Client-Server mobile fleet management application for field service, transportation, logistics, route accounting, and field sales. Provides mobile software solutions for major clients including LODGENET, IKON, SLEEPY, ADT, and NEWSGROUP.",
      technologies: ["VB 6", "C#", "PHP", "Agent Studio 11.0", "SQL Server", "JavaScript", "AJAX", "PERL", "HTML", "CSS"],
      highlights: ["In-store and delivery logistics", "Handheld device and tablet PC support", "LAN/WAN connectivity", "Field service management", "Route accounting integration"]
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Neopets Gaming Platform",
      company: "Knowledge Adventure / Jumpstart",
      description: "One of the most famous and popular online gaming websites acquired by Knowledge Adventure/Jumpstart, providing entertainment and interactive gaming experiences to millions of users worldwide.",
      technologies: ["PHP 5.3", "WordPress", "Drupal", "HTML5", "CSS3", "jQuery", "ExtJS", "CodeIgniter", "MySQL", "Azure"],
      highlights: ["High-traffic gaming platform", "Multi-platform integration", "User engagement features", "Windows Azure deployment"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "PGi Integration Solutions",
      company: "AERIES TECHNOLOGY",
      description: "Enterprise solutions integrating new Zoho APIs into existing systems for improved business operations and customer relationship management, coupled with various technologies for system enhancement and scalability.",
      technologies: ["Zend", "Scala", "PHP 7.0", "Drupal 7", "Backbone.js", "React", "PostgreSQL", "AWS Lambda", "CloudFront", "S3"],
      highlights: ["Zoho API integration", "Multi-technology stack support", "AWS cloud infrastructure", "Lambda serverless functions"]
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Econocaribe (ECUworldwide) Logistics Platform",
      company: "LOGISOFTWARE",
      description: "Comprehensive logistics management solutions for international shipping and freight forwarding. Features payment gateway integrations, Laravel-Java API integration, EDI background processes, and a dedicated Reports portal for agents and consumers.",
      technologies: ["Laravel", "Drupal", "WordPress", "Java", "Vue.js", "Angular", "MySQL", "MS SQL", "MongoDB", "SVN"],
      highlights: ["Payment gateway integration", "Laravel-Java API integration", "EDI background processes", "Multi-agent reporting portal", "Time-based automated jobs"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Signum International Solutions",
      company: "CONSO4S TECHNOLOGIES",
      description: "Digital product solutions for Signum International Limited, delivering scalable applications with multi-technology stack integration for enhanced business operations and digital transformation.",
      technologies: ["Laravel", "Go", "Node.js", "React", "Angular", "MySQL", "MS SQL", "AWS", "Nginx", "GitHub"],
      highlights: ["Multi-technology integration", "AWS infrastructure", "Product-led approach", "Digital transformation solutions"]
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "GetACall Asia & Moclan Solutions",
      company: "SOFTSERVE GLOBAL",
      description: "Enhanced web platforms with LAMP stack environments and cloud integration, featuring Amazon AWS S3 storage integration and API development for seamless data sharing among systems.",
      technologies: ["PHP 5.6", "MySQL 5.5", "HTML", "CSS", "jQuery", "Linux", "Apache", "AWS S3", "GitHub"],
      highlights: ["LAMP stack setup", "AWS S3 integration", "API creation and consumption", "Cloud migration"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-level applications and solutions delivered across diverse industries
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
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

export default Projects;
