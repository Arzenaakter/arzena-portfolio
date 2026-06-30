"use client";

import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import { FiEye, FiGithub } from "react-icons/fi";
import MotionComponent from "../common/MotionComponent";
import Image from "next/image";

import Link from "next/link";
import Projects from "./Projects";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-20 bg-muted/30 w-screen overflow-x-hidden"
    >
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
