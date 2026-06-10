"use client";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "./Container";
import { FiStar, FiCode, FiZap, FiDatabase } from "react-icons/fi";
import { LuWrench } from "react-icons/lu";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: FiCode,
      title: "Frontend Expertise",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      skills: [
        { name: "ReactJS", level: 95 },
        { name: "NextJS", level: 90 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      icon: FiZap,
      title: "UI/UX Libraries",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Shadcn UI", level: 90 },
        { name: "Ant Design", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      icon: FiDatabase,
      title: "Backend & Database",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      skills: [
        { name: "Express JS", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      icon: LuWrench,
      title: "Tools & Others",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Vercel/Netlify", level: 90 },
      ],
    },
  ];

  const coreStrengths = [
    "Agile Development",
    "Problem-Solving",
    "Effective Communication",
    "Team Collaboration",
    "Attention to Detail",
    "Adaptability",
    "Clean Code Practices",
    "Performance Optimization",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <Container>
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and core
              strengths developed through 2+ years of professional experience
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden border-0 bg-transparent group"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Floating soft glow background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
                  </div>

                  <CardContent className="relative pb-2 px-6">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`rounded-2xl flex items-center justify-center  rotate-3 group-hover:rotate-0 transition-all duration-300 `}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${category.color}  `}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Skill progression journey
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6">
                      {/* Vertical line */}
                      <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-muted/40 group-hover:bg-primary/20 transition-colors" />

                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="relative mb-3 last:mb-0 group/skill"
                        >
                          {/* Node */}
                          <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full border-2 border-background bg-muted group-hover/skill:bg-primary transition-all duration-300" />

                          {/* Content */}
                          <div className="ml-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm  group-hover/skill:text-primary transition-colors">
                                {skill.name}
                              </span>

                              <span className="text-xs font-semibold text-muted-foreground group-hover/skill:text-primary">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress hint (soft underline instead of bar) */}
                            <div className="mt-2 h-0.5 w-full bg-muted/30 overflow-hidden rounded-full">
                              <div
                                className={`h-full transition-all duration-700 ${
                                  category.color.includes("blue")
                                    ? "bg-linear-to-r from-blue-500/20 to-blue-500"
                                    : category.color.includes("purple")
                                      ? "bg-linear-to-r from-purple-500/20 to-purple-500"
                                      : category.color.includes("green")
                                        ? "bg-linear-to-r from-green-500/20 to-green-500"
                                        : "bg-linear-to-r from-orange-500/20 to-orange-500"
                                }`}
                                style={{
                                  width: isVisible ? `${skill.level}%` : "0%",
                                  transitionDelay: `${i * 120}ms`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Core Strengths */}
          <div className="mb-16">
            <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <FiStar className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                    Core Strengths
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {coreStrengths.map((strength, index) => (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/strength ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Badge
                        variant="secondary"
                        className="w-full justify-center py-2 group-hover/strength:bg-primary group-hover/strength:text-primary-foreground transition-all duration-300"
                      >
                        {strength}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
