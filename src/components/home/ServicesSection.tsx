import { Card, CardContent } from "@/components/ui/card";
import Container from "./Container";
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import { MdPalette } from "react-icons/md";

const ServicesSection = () => {
  const services = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description:
        "Building responsive, high-performance web applications using React, Next.js, and TypeScript with modern UI libraries and smooth animations.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      icon: FiSmartphone,
      title: "Mobile-First Design",
      description:
        "Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
      features: [
        "Responsive Layouts",
        "Touch-Friendly UI",
        "Cross-Browser Support",
        "Progressive Web Apps",
      ],
    },
    {
      icon: FiGlobe,
      title: "Multilingual Applications",
      description:
        "Implementing internationalization (i18n) for global reach with English and German language support.",
      features: [
        "Next-i18next",
        "RTL Support",
        "Locale Management",
        "Cultural Adaptation",
      ],
    },
    {
      icon: MdPalette,
      title: "UI/UX Implementation",
      description:
        "Transforming designs into pixel-perfect, accessible interfaces using modern CSS frameworks.",
      features: ["Tailwind CSS", "Shadcn UI", "Ant Design", "Material UI"],
    },
    {
      icon: FiDatabase,
      title: "API Integration",
      description:
        "Seamless integration with REST APIs, state management, and real-time data handling.",
      features: [
        "REST API",
        "State Management",
        "Data Fetching",
        "Error Handling",
      ],
    },
    {
      icon: FiZap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, SEO, and user experience with modern best practices.",
      features: [
        "Code Splitting",
        "Lazy Loading",
        "SEO Optimization",
        "Bundle Analysis",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive frontend development services to bring your ideas to
              life with modern technologies and best practices
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
