import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import Container from "@/components/Container";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Next.js", "MERN Stack", "E-commerce"];

  const projects = [
    {
      id: 1,
      title: "SketchVenture",
      category: "MERN Stack",
      description:
        "A comprehensive summer camp art school platform with role-based access for students, instructors, and admins. Features payment integration and course management.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
        "Tailwind CSS",
      ],
      features: [
        "Role-based authentication (Admin, Instructor, Student)",
        "Course enrollment with payment processing",
        "Admin dashboard for user and class management",
        "Instructor tools for class creation and management",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "ToyTrove",
      category: "E-commerce",
      description:
        "MERN Stack e-commerce platform for toy products with full CRUD operations, authentication, and advanced filtering capabilities.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Tailwind CSS",
      ],
      features: [
        "Firebase authentication system",
        "Product CRUD operations for authenticated users",
        "Advanced sorting and search functionality",
        "Responsive design with Tailwind CSS",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Ausbildung Platform",
      category: "Next.js",
      description:
        "Multilingual education platform with role-based dashboards, progress tracking, and comprehensive user management system.",
      image: "/placeholder.svg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Next-i18next",
        "Ant Design",
      ],
      features: [
        "English and German multilingual support",
        "Dynamic dashboards for different user roles",
        "Progress tracking and analytics",
        "Real-time chat and document management",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Infayra Dashboard",
      category: "React",
      description:
        "Comprehensive business management platform with modules for services, bookings, finance, and user management.",
      image: "/placeholder.svg",
      technologies: [
        "Next.js",
        "React Context",
        "Tailwind CSS",
        "React Hook Form",
      ],
      features: [
        "Multi-role dashboard system",
        "Service and booking management",
        "Financial tracking and reporting",
        "Provider tools and analytics",
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(activeFilter.toLowerCase())
            )
        );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects demonstrating expertise in modern
              web development technologies and best practices
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.featured && (
                      <Badge className="bg-primary/90 text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex-1 bg-background/90 text-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-background transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
