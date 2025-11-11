import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const CoverLetter = () => {
  return (
    <section id="cover-letter" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cover Letter</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A personal introduction to my professional journey
          </p>
        </div>

        <Card className="max-w-4xl mx-auto animate-scale-in shadow-[var(--shadow-elegant)]">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground mb-8">
              <a href="mailto:raviinit@yahoo.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                raviinit@yahoo.com
              </a>
              <span>•</span>
              <a href="tel:+918317319199" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +91 8317319199
              </a>
            </div>

            <p className="text-lg font-semibold">Dear Sir/Madam,</p>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I am writing to express my interest in the Technical Lead and Architect position, bringing with me over 18 years of hands-on experience in designing and implementing robust, scalable software solutions across diverse platforms and technologies.
              </p>

              <p>
                Throughout my career, I have successfully developed and delivered multiple enterprise-level applications and projects involving API development, payment gateway integration, Google Maps integrations, real-time vehicle/GPS tracking systems, and external resource integration. My strong technical foundation spans PHP frameworks (Laravel, CodeIgniter, Zend), Drupal, ASP, JavaScript, jQuery, HTML, and CSS, implemented across both dedicated servers and cloud platforms such as AWS and Azure. I have also led critical cloud migration initiatives and containerized environments using Docker.
              </p>

              <p>
                As a solution architect, I have designed and led both structured and unstructured data solutions from the ground up, balancing performance, security, and scalability. My work includes developing POCs and production-ready services in sensor-based environments fundamental to IoT systems, utilizing technologies such as GPS/GPRS, RFID readers, and QR code scanners to enable real-time data flow and smart automation.
              </p>

              <div>
                <p className="font-semibold mb-2">My experience includes:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Defining and executing strategic technical solutions in partnership with stakeholders and clients</li>
                  <li>Designing and implementing SSO authentication, web services, and APIs with performance optimization using tools like MemCached and load balancing</li>
                  <li>Supporting development in WAMP/XAMPP stacks with seamless transition to LAMP or cloud-based infrastructures</li>
                  <li>Quickly adapting to new technologies and complex systems, consistently providing enhancements and long-term support across diverse environments</li>
                </ul>
              </div>

              <p>
                What sets me apart is my ability to quickly learn, adapt, and lead multi-functional teams with a client-centric approach and a keen focus on delivering reliable, scalable, and maintainable systems. I am confident my technical breadth and leadership capability will contribute significantly to your team.
              </p>

              <p>
                Thank you for considering my application. I look forward to the opportunity to further discuss how I can contribute to the ongoing success and innovation. My core skills and summary are mentioned in my LinkedIn profile: <a href="http://in.linkedin.com/in/raviinit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://in.linkedin.com/in/raviinit</a>. With knowledge in multiple skills, I have a full understanding of the software development life cycle.
              </p>

              <div className="pt-4">
                <p className="font-semibold">Thank you.</p>
                <p className="font-semibold mt-2">Sincerely,</p>
                <p className="font-semibold text-primary">Ravinder L</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoverLetter;
