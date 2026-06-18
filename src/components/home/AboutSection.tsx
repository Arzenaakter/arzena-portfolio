import { Card, CardContent } from "@/components/ui/card";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import MotionComponent from "../common/MotionComponent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <HeadingComponent
            heading="About Me"
            subHeading="Passionate about creating exceptional digital experiences"
          />

          {/* Contact Info with hover animations */}

          <MotionComponent>
            <Card
              className="mb-12 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-6">
                  <div className="flex items-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-cyan/20 rounded-full flex items-center justify-center group-hover/item:from-primary/30 group-hover/item:to-cyan/30 transition-all duration-300">
                      <FiMapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Location
                      </p>
                      <span className="text-sm font-medium">
                        Bogura, Bangladesh
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-cyan/20 rounded-full flex items-center justify-center group-hover/item:from-primary/30 group-hover/item:to-cyan/30 transition-all duration-300">
                      <FiPhone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Phone
                      </p>
                      <span className="text-sm font-medium">
                        +8801766179470
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-cyan/20 rounded-full flex items-center justify-center group-hover/item:from-primary/30 group-hover/item:to-cyan/30 transition-all duration-300">
                      <FiMail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Email
                      </p>
                      <span className="text-sm font-medium">
                        arzenaakter@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionComponent>

          {/* Summary with typewriter effect */}

          <MotionComponent>
            <Card
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center bg-linear-to-r from-primary to-cyan bg-clip-text text-transparent">
                  Professional Summary
                </h3>
                <div className="relative">
                  <div className="absolute -inset-4 bg-linear-to-r from-primary/10 via-transparent to-cyan/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-muted-foreground leading-relaxed text-center text-lg relative z-10">
                    Frontend Developer with{" "}
                    <span className="text-primary font-semibold">2+ years</span>{" "}
                    of experience building responsive, scalable, and
                    multilingual web applications using{" "}
                    <span className="text-primary font-semibold">
                      React, Next.js, TypeScript, and Tailwind CSS
                    </span>
                    . Experienced in role-based dashboards, reusable UI
                    components, REST API integration, and state management.
                    Strong collaborator with international teams, focused on{" "}
                    <span className="text-primary font-semibold">
                      performance, clean code, and user-centered design
                    </span>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionComponent>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
