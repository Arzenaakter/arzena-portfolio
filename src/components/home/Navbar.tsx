"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import Container from "../common/Container";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-screen z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Hexagonal icon with code symbol */}
              <div className="w-10 h-10 relative">
                {/* Hexagon background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary via-cyan-400 to-blue-500 rounded-lg rotate-12 group-hover:rotate-45 transition-all duration-500 shadow-lg group-hover:shadow-primary/50" />
                <div className="absolute inset-0.5 bg-background rounded-lg rotate-12 group-hover:rotate-45 transition-all duration-500" />

                {/* Code icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    A
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-75" />
                <div
                  className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-75"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              {/* Main name */}
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold bg-linear-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-primary transition-all duration-500">
                  Arzena
                </span>
                <div className="flex items-center gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>

              {/* Subtitle */}
              <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-mono">
                &lt;developer/&gt;
              </div>
            </div>

            {/* Animated background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-full" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  link.active ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme toggle & Download CV */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="default" size="sm">
              <Link
                href="https://drive.google.com/file/d/1M4giSkDOrlTYjBPgmATCUTm1OUhFSjdt/view"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 w-fit mt-2"
              >
                {" "}
                Resume <MdOutlineFileDownload className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border bg-background/95 ">
          <Container className="flex flex-col  gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  link.active ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild variant="default" size="sm">
              <Link
                href="https://drive.google.com/file/d/1M4giSkDOrlTYjBPgmATCUTm1OUhFSjdt/view"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 w-fit mt-2"
              >
                {" "}
                Resume <MdOutlineFileDownload className="w-4 h-4" />
              </Link>
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
