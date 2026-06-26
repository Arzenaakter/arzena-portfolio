"use client";

import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import { FiEye, FiGithub } from "react-icons/fi";
import MotionComponent from "../common/MotionComponent";
import Image from "next/image";

import Link from "next/link";
import Projects from "./Projects";

const PortfolioSection = () => {
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

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <Container>
        <div className="max-w-6xl mx-auto">
          <HeadingComponent
            heading="Projects"
            subHeading=" A showcase of my recent projects demonstrating expertise in modern
              web development technologies and best practices"
          />
        </div>
      </Container>

      {/* Projects Grid */}
      <Projects />

      {/* View More */}
      <MotionComponent>
        {" "}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/Arzenaakter"
            className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            View All Projects on GitHub
          </Link>
        </div>
      </MotionComponent>
    </section>
  );
};

export default PortfolioSection;
