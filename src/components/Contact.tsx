import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Youtube, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "raviinit@yahoo.com",
      link: "mailto:raviinit@yahoo.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8317319199",
      link: "tel:+918317319199"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Skype",
      value: "raviinit",
      link: "skype:raviinit?chat"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangalore, Karnataka, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/raviinit"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      url: "https://youtu.be/MPxUHB3mF2c"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-scale-in shadow-[var(--shadow-card)]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold mb-1">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm font-semibold">Connect on Social Media</p>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      asChild
                      size="lg"
                      className="shadow-[var(--shadow-elegant)]"
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-2">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-center text-sm text-muted-foreground italic">
                  "With over 18 years of experience in designing and implementing robust, scalable solutions, 
                  I'm confident in my ability to contribute significantly to your team's technical excellence."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
