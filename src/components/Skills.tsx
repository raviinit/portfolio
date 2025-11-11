import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Primary Technologies",
      skills: ["PHP", "Laravel", "CodeIgniter", "Symfony", "Zend", "APIs", "Web Services", "jQuery", "JavaScript", "AJAX", "HTML5", "CSS3", "XML"]
    },
    {
      title: "Secondary Technologies",
      skills: ["Vue.js", "Angular", "React", "Node.js", "SQL", "C#", "ASP.NET", "Java", "Python", "Go"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MS SQL Server", "PostgreSQL", "Oracle", "MongoDB", "NoSQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "EC2", "S3", "Lambda", "CloudFront", "Lightsail"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub", "BitBucket", "SVN", "TFS"]
    },
    {
      title: "CMS & Frameworks",
      skills: ["Drupal", "WordPress", "Joomla"]
    },
    {
      title: "Expertise",
      skills: ["Service Based", "Gaming Domain", "Logistics Domain", "Telecom", "eCommerce", "IoT", "Project Management"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Team Management", "Problem Solving", "Decision Making", "Time Management", "Ownership"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies, frameworks, and domains
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
