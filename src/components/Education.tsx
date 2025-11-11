import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Lightbulb } from "lucide-react";

const Education = () => {
  const interests = [
    "Writing blogs",
    "YouTube creator",
    "Learning new technologies",
    "Listening to music",
    "Playing chess",
    "Meditation"
  ];

  const links = [
    { name: "GitHub", url: "https://github.com/raviinit" },
    { name: "YouTube - DigAboutIt", url: "https://youtube.com/@digaboutit" },
    { name: "YouTube - WhatAboutIt", url: "https://youtube.com/@whataboutit555" },
    { name: "Twitter", url: "https://twitter.com/raviinit9" },
    { name: "Medium", url: "https://medium.com/@raviinit" }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Interests</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and personal pursuits
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          <Card className="animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Bachelor's Degree</CardTitle>
                  <CardDescription>Computer Science & Engineering</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">B.Tech CSE</span>
                <span className="text-muted-foreground">1999 - 2003</span>
              </div>
              <p className="text-muted-foreground">
                Jawaharlal Nehru Technological University (JNTUC)
              </p>
              <p className="text-muted-foreground">
                Hyderabad, Telangana, India
              </p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Certifications & Skills</CardTitle>
                  <CardDescription>Professional Expertise</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Development Methodologies:</p>
                <p className="text-muted-foreground text-sm">
                  Agile, Waterfall, Scrum
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Leadership Skills:</p>
                <p className="text-muted-foreground text-sm">
                  Team Management, Technical Leadership, Project Management, Stakeholder Communication
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in md:col-span-2 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Interests & Activities</CardTitle>
                  <CardDescription>Personal pursuits and content creation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">Connect & Follow:</p>
                <div className="flex flex-wrap gap-2">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 rounded-md bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
