/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.jpg";
import Container from "../common/Container";
import MotionComponent from "../common/MotionComponent";
import Link from "next/link";
import { motion } from "framer-motion";
const roles = ["Frontend Developer", "ReactJs Developer", "NextJs Developer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/ArzenaAkter.BD/" },
    { icon: FaGithub, href: "https://github.com/Arzenaakter" },
    { icon: FaInstagram, href: "https://www.instagram.com/arzena_akter/" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/arzena-akter/" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coding Illustration with Glow */}{" "}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="order-1 lg:order-1 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-linear-to-r from-primary/20 via-cyan-400/30 to-primary/20 rounded-full blur-2xl animate-glow-pulse opacity-60" />
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                {/* Coding Environment SVG */}
                <svg
                  width="320"
                  height="320"
                  viewBox="0 0 320 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full relative z-10"
                >
                  {/* Main Code Editor */}
                  <rect
                    x="10"
                    y="20"
                    width="300"
                    height="280"
                    rx="12"
                    fill="hsl(213 45% 8%)"
                    stroke="hsl(187 100% 50%)"
                    strokeWidth="1"
                    className="drop-shadow-2xl"
                  />

                  {/* Editor Tabs */}
                  <rect
                    x="10"
                    y="20"
                    width="300"
                    height="40"
                    rx="12"
                    fill="hsl(213 35% 12%)"
                  />
                  <rect
                    x="20"
                    y="30"
                    width="80"
                    height="20"
                    rx="4"
                    fill="hsl(213 45% 15%)"
                  />
                  <text
                    x="25"
                    y="42"
                    fill="hsl(187 100% 50%)"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    App.tsx
                  </text>

                  {/* Window Controls */}
                  <circle cx="280" cy="40" r="5" fill="#ff5f56" />
                  <circle cx="295" cy="40" r="5" fill="#ffbd2e" />
                  <circle cx="265" cy="40" r="5" fill="#27ca3f" />

                  {/* Code Content */}
                  <g transform="translate(25, 80)">
                    {/* Import statements */}
                    <text
                      x="0"
                      y="0"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      import
                    </text>
                    <text
                      x="45"
                      y="0"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      React from
                    </text>
                    <text
                      x="110"
                      y="0"
                      fill="hsl(120 100% 60%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &#39;react&#39;
                    </text>

                    <text
                      x="0"
                      y="20"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      import
                    </text>
                    <text
                      x="45"
                      y="20"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {"{ useState } from"}
                    </text>
                    <text
                      x="150"
                      y="20"
                      fill="hsl(120 100% 60%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &#39;react&#39;
                    </text>

                    {/* Function declaration */}
                    <text
                      x="0"
                      y="50"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      const
                    </text>
                    <text
                      x="40"
                      y="50"
                      fill="hsl(60 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Portfolio
                    </text>
                    <text
                      x="95"
                      y="50"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      =
                    </text>
                    <text
                      x="105"
                      y="50"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      ()
                    </text>
                    <text
                      x="125"
                      y="50"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      =&gt;
                    </text>
                    <text
                      x="150"
                      y="50"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {"{"}
                    </text>

                    {/* Hook usage */}
                    <text
                      x="10"
                      y="70"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      const
                    </text>
                    <text
                      x="50"
                      y="70"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      [skills, setSkills]
                    </text>
                    <text
                      x="160"
                      y="70"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      =
                    </text>
                    <text
                      x="175"
                      y="70"
                      fill="hsl(60 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      useState
                    </text>
                    <text
                      x="225"
                      y="70"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      ([])
                    </text>

                    {/* JSX Return */}
                    <text
                      x="10"
                      y="100"
                      fill="hsl(240 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      return
                    </text>
                    <text
                      x="55"
                      y="100"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      (
                    </text>

                    <text
                      x="20"
                      y="120"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;div
                    </text>
                    <text
                      x="55"
                      y="120"
                      fill="hsl(120 100% 60%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      className
                    </text>
                    <text
                      x="105"
                      y="120"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      =
                    </text>
                    <text
                      x="115"
                      y="120"
                      fill="hsl(120 100% 60%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      "portfolio"
                    </text>
                    <text
                      x="175"
                      y="120"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &gt;
                    </text>

                    <text
                      x="30"
                      y="140"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;h1&gt;
                    </text>
                    <text
                      x="65"
                      y="140"
                      fill="hsl(187 100% 50%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Arzena Akter
                    </text>
                    <text
                      x="140"
                      y="140"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;/h1&gt;
                    </text>

                    <text
                      x="30"
                      y="160"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;p&gt;
                    </text>
                    <text
                      x="55"
                      y="160"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Frontend Developer
                    </text>
                    <text
                      x="160"
                      y="160"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;/p&gt;
                    </text>

                    <text
                      x="20"
                      y="180"
                      fill="hsl(0 100% 70%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      &lt;/div&gt;
                    </text>
                    <text
                      x="10"
                      y="200"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      )
                    </text>
                    <text
                      x="0"
                      y="220"
                      fill="hsl(200 20% 95%)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {"}"}
                    </text>
                  </g>

                  {/* Floating Code Elements */}
                  <g className="animate-float">
                    <circle
                      cx="280"
                      cy="100"
                      r="15"
                      fill="hsl(187 100% 50% / 0.1)"
                      stroke="hsl(187 100% 50%)"
                      strokeWidth="1"
                    />
                    <text
                      x="275"
                      y="105"
                      fill="hsl(187 100% 50%)"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      JS
                    </text>
                  </g>

                  <g className="animate-float" style={{ animationDelay: "1s" }}>
                    <rect
                      x="40"
                      y="260"
                      width="30"
                      height="20"
                      rx="4"
                      fill="hsl(240 100% 70% / 0.1)"
                      stroke="hsl(240 100% 70%)"
                      strokeWidth="1"
                    />
                    <text
                      x="48"
                      y="272"
                      fill="hsl(240 100% 70%)"
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      TS
                    </text>
                  </g>

                  <g className="animate-float" style={{ animationDelay: "2s" }}>
                    <polygon
                      points="280,250 290,270 270,270"
                      fill="hsl(120 100% 60% / 0.1)"
                      stroke="hsl(120 100% 60%)"
                      strokeWidth="1"
                    />
                    <text
                      x="276"
                      y="265"
                      fill="hsl(120 100% 60%)"
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      ▲
                    </text>
                  </g>

                  {/* Animated Cursor */}
                  <rect
                    x="25"
                    y="300"
                    width="2"
                    height="15"
                    fill="hsl(187 100% 50%)"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  {/* Code Brackets */}
                  <text
                    x="15"
                    y="15"
                    fill="hsl(187 100% 50%)"
                    fontSize="16"
                    fontFamily="monospace"
                    className="animate-pulse"
                  >
                    &lt;
                  </text>
                  <text
                    x="295"
                    y="315"
                    fill="hsl(187 100% 50%)"
                    fontSize="16"
                    fontFamily="monospace"
                    className="animate-pulse"
                  >
                    /&gt;
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <MotionComponent>
              {" "}
              <p className="text-muted-foreground mb-2 animate-slide-up">
                Hello, I&apos;m
              </p>
            </MotionComponent>
            <MotionComponent>
              {" "}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up animation-delay-200">
                Arzena Akter
              </h1>
            </MotionComponent>
            <MotionComponent>
              {" "}
              <h2 className="text-xl md:text-2xl mb-6 animate-slide-up animation-delay-400">
                And I&apos;m a{" "}
                <span className="text-gradient font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </MotionComponent>
            <MotionComponent>
              {" "}
              <p className="text-muted-foreground max-w-lg mb-8 animate-slide-up animation-delay-600 mx-auto lg:mx-0">
                Passionate frontend developer crafting beautiful, responsive,
                and user-friendly web experiences. I transform ideas into
                elegant digital solutions.
              </p>
            </MotionComponent>

            {/* Social Links */}
            <div
              className="flex gap-4 mb-8 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <MotionComponent key={index}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                </MotionComponent>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "1s" }}
            >
              <MotionComponent>
                <Button variant="hero" size="xl">
                  <Link
                    href="https://drive.google.com/file/d/1M4giSkDOrlTYjBPgmATCUTm1OUhFSjdt/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Hire Me
                  </Link>
                </Button>
              </MotionComponent>
              <MotionComponent>
                <Button variant="heroOutline" size="xl">
                  <Link href="#contact"> Contact Me</Link>
                </Button>
              </MotionComponent>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
