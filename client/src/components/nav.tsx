import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePdf from "@assets/resume_Aditya_Anil_Tiwari_1765379185632.pdf";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "// ABOUT", href: "#about" },
    { name: "// SKILLS", href: "#skills" },
    { name: "// EXPERIENCE", href: "#experience" },
    { name: "// PROJECTS", href: "#projects" },
    { name: "// CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
        scrolled ? "py-4 bg-black/90 border-b border-primary/30" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary tracking-tighter hover:text-white transition-colors cursor-pointer">
          &lt;ADITYA /&gt;
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary/70 hover:text-primary transition-colors text-xs font-bold tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-4 border-primary text-primary hover:bg-primary hover:text-black rounded-none font-bold" 
            asChild
          >
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">DOWNLOAD_CV</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black border-b border-primary/50 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-mono font-bold text-primary hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-black font-bold rounded-none" asChild>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">DOWNLOAD_CV</a>
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
