"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import { FiExternalLink, FiEye, FiGithub } from "react-icons/fi";
import MotionComponent from "../common/MotionComponent";
import Image from "next/image";

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
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
      liveLink: "https://summer-camp-44ba3.web.app/",
      githubLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "ToyTrove",
      category: "E-commerce",
      description:
        "MERN Stack e-commerce platform for toy products with full CRUD operations, authentication, and advanced filtering capabilities.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
              tech.toLowerCase().includes(activeFilter.toLowerCase()),
            ),
        );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <HeadingComponent
            heading="Projects"
            subHeading=" A showcase of my recent projects demonstrating expertise in modern
              web development technologies and best practices"
          />

          {/* Projects Grid */}

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <MotionComponent key={project.id}>
                <div className="container mx-auto rounded-md w-[90%] group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1  bg-background backdrop-blur-xs md:py-5 lg:ps-9 flex md:flex-row flex-col gap-5 md:h-full h-auto ">
                  <div className="  bg-card rounded-md  z-10 md:w-[60%] w-full  md:-ms-20 md:h-[90%] overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                  <div className="w-full z-10 p-5  ">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg md:text-2xl font-serif text-foreground mb-1 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description / Subtext */}
                      <p className="text-sm text-foreground/80  mb-4 font-sans ">
                        {project.description}
                      </p>

                      {/* Features styled like lyrics text block */}
                      <div className="mb-6 space-y-1 border-left-2 border-slate-100 pl-1">
                        {project.features?.slice(0, 4).map((feature, i) => (
                          <li
                            key={i}
                            className="text-xs font-sans text-foreground/80 leading-relaxed"
                          >
                            {feature}
                          </li>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer Button Group */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-slate-800">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-900 text-white px-5 py-2.5 rounded-md text-xs font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        <FiEye className="w-3.5 h-3.5" />
                        View Project
                      </a>

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-md text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-700 transition-all flex items-center justify-center gap-2"
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </MotionComponent>
            ))}
          </div>

          {/* View More */}
          <MotionComponent>
            {" "}
            <div className="text-center mt-12">
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                View All Projects
              </button>
            </div>
          </MotionComponent>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
