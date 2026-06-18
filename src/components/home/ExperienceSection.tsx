/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "../common/Container";
import HeadingComponent from "../common/HeadingComponent";
import MotionComponent from "../common/MotionComponent";
import { Card } from "../ui/card";

const experiences = [
  {
    id: "infayra",
    company: "Infayra",
    period: "September 2025 – February 2026",
    color: "#e8ff47",
    accentBg: "rgba(232,255,71,0.07)",
    accentBorder: "rgba(232,255,71,0.2)",
    dotColor: "#e8ff47",
    points: [
      "Built landing pages and dashboards for customers, providers, and admins with diverse features.",
      "Developed modules for services, bookings, finance, blog, marketing, user management, reviews.",
      "Implemented provider tools for services, bookings, payouts, staff, offers, earnings, and settings.",
      "Collaborated with the backend team to integrate REST APIs and ensure seamless functionality.",
    ],
    tags: ["Next.js", "REST APIs", "Dashboards", "Admin Panel"],
  },
  {
    id: "marthala",
    company: "Marthala Solutions",
    period: "September 2023 – July 2025",
    color: "#47c8e8",
    accentBg: "rgba(71,200,232,0.07)",
    accentBorder: "rgba(71,200,232,0.2)",
    dotColor: "#47c8e8",
    points: [
      "Collaborated with cross-functional teams to build role-based features, improving user experience.",
      "Built reusable UI components and responsive layouts, ensuring consistent, accessible interfaces.",
      "Dynamic dashboards for profile management, progress tracking, chat, tools, and documents.",
      "Built and maintained the company website, improving workflows and adding key features.",
      "Implemented English and German multilingual support across the platform.",
    ],
    tags: ["React", "UI Components", "i18n", "Responsive Design"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <Container>
        <div className="max-w-6xl mx-auto">
          <HeadingComponent
            heading="Professional Journey"
            subHeading="A comprehensive overview of my technical skills, tools, and core
              strengths developed through 2+ years of professional experience"
          />

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Vertical timeline track line */}

            <div className="absolute top-0 bottom-0 left-2 w-px bg-linear-to-b from-transparent via-border to-transparent" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp) => {
                return (
                  <div key={exp.id} className="relative pl-12">
                    {/* Timeline dot */}

                    <div className="absolute top-6 left-1.25 z-10 h-2.5 w-2.5 rounded-full border border-background bg-primary shadow-[0_0_12px_rgba(var(--primary),0.5)]" />

                    {/* Card wrapper */}
                    <MotionComponent>
                      <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-primary/30 bg-card/60 backdrop-blur-xs">
                        {/* Card Content Header */}
                        <div className="px-7 pt-6 pb-4">
                          <div className="min-w-0 flex-1">
                            {/* Company + period row */}
                            <div className="mb-3 flex flex-wrap items-center gap-3">
                              <h3 className="m-0 text-[22px] font-extrabold text-foreground">
                                {exp.company}
                              </h3>
                              <span className="whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary">
                                {exp.period}
                              </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bullet points layout - permanently displayed */}
                        <div className="px-7 pb-7 pt-4 border-t border-border/40">
                          <ul className="m-0 flex flex-col gap-3.5 list-none p-0">
                            {exp.points.map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 opacity-100 translate-y-0"
                              >
                                {/* Custom Colored Bullet dot matching the item profile */}
                                <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                                <p className="m-0 text-[14px] leading-[1.7] text-muted-foreground">
                                  {point}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </MotionComponent>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
