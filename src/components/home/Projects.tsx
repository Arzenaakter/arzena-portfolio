/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";

export interface TProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  improvements: string[];
  liveUrl: string;
  githubUrl: string;
  serverUrl: string;
  category: string;
}

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectContainerRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState<TProject>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // GSAP Scroll-Controlled Animation for Title and Project Container
  useEffect(() => {
    if (loading) return;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Title Animation
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
              id: "projects-title",
              refreshPriority: -1,
            },
          },
        );

        // Project Container Fade Animation
        gsap.fromTo(
          projectContainerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: projectContainerRef.current,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
              id: "projects-container",
              refreshPriority: -1,
            },
          },
        );

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, sectionRef);

      return () => {
        ctx.revert();
        clearTimeout(timer);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [loading]);

  // Additional effect to handle window load and resize
  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Avoid calling setState synchronously inside effect to prevent cascading renders.
    // Schedule initial selection check on the next animation frame.
    const rafId = requestAnimationFrame(() => onSelect());
    emblaApi.on("select", onSelect);

    return () => cancelAnimationFrame(rafId);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const openProjectDetail = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setSelectedProject(undefined);
  };

  return (
    <section id="projects" className=" px-4 md:px-6 lg:px-8" ref={sectionRef}>
      <div className="relative" ref={emblaRef}>
        <div className="flex gap-4" ref={projectContainerRef}>
          {projects.map((project, index: number) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_75%] lg:flex-[0_0_60%] xl:flex-[0_0_50%] 2xl:flex-[0_0_40%] flex justify-center"
              >
                <ProjectCard
                  project={project}
                  isActive={isActive}
                  openProjectDetail={openProjectDetail}
                />
              </div>
            );
          })}
        </div>

        {/* Left Fade linear */}
        <div className="absolute -left-4 md:-left-6 lg:-left-8 top-0 bottom-0 w-32 bg-linear-to-r from-[#0f0518] to-transparent pointer-events-none z-10 hidden md:block"></div>

        {/* Right Fade linear */}
        <div className="absolute -right-4 md:-right-6 lg:-right-8 top-0 bottom-0 w-32 bg-linear-to-l from-[#0f0518] to-transparent pointer-events-none z-10 hidden md:block"></div>

        {/* Navigation Arrows - Hidden on mobile */}
        <Button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-4 md:left-4 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-linear-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </Button>
        <Button
          onClick={scrollNext}
          className="hidden md:flex absolute right-4 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-linear-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </Button>
      </div>

      {/* Pagination Dots with Mobile Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Left Arrow - Mobile only */}
        <Button
          onClick={scrollPrev}
          className="md:hidden w-8 h-8 bg-linear-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </Button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-1000 rounded-full bg-linear-to-r h-2 ${
                index === activeIndex
                  ? "w-8 from-primary to-secondary"
                  : "w-2 from-white/30 to-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow - Mobile only */}
        <Button
          onClick={scrollNext}
          className="md:hidden w-8 h-8 bg-linear-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </Button>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectDetail}
        />
      )}
    </section>
  );
};

export default Projects;
