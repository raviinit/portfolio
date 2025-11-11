import { Mail, Phone, Linkedin, Youtube, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/raviinit", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, url: "https://youtu.be/MPxUHB3mF2c", label: "YouTube" },
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/raviinit", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com/raviinit9", label: "Twitter" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4">Ravinder L</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Technical Architect with 18+ years of expertise in designing and implementing robust, scalable IT solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Education
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:raviinit@yahoo.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                raviinit@yahoo.com
              </a>
              <a href="tel:+918317319199" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 8317319199
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ravinder L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
