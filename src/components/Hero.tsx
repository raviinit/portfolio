import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Youtube, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
      
      <div className="container px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Ravinder L
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Technical Architect
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Highly accomplished Technical Lead and Architect with over 18 years of expertise in designing, developing, and implementing robust, scalable IT solutions. Proven track record of leading cross-functional teams, delivering high-impact projects, and driving technical strategies that align with business goals.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Developed several projects and applications including APIs, Payment gateway integrations, Google Maps integrations, Vehicle/GPS tracking systems, real-time data flow updates and integrations of external resources. Provided solutions and POCs using PHP, Drupal, Laravel, CodeIgniter, Zend, ASP, Javascript, jQuery, CSS, HTML and other technologies on both dedicated servers and cloud platforms including Azure and AWS.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expertise in IoT (Internet of Things) sensor data technology, implementing real-time data collection from physical environments using RFID readers, GPS/GPRS, and QR code scanners. With extensive knowledge across multiple technologies, I quickly understand systems and deliver enhanced solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
            <a href="tel:+918317319199" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +91 8317319199
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="mailto:raviinit@yahoo.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              raviinit@yahoo.com
            </a>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Bangalore, India
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button asChild size="lg" className="shadow-[var(--shadow-elegant)]">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#experience">View Experience</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://www.linkedin.com/in/raviinit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://youtu.be/MPxUHB3mF2c" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
