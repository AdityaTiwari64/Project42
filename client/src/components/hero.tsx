import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_3d_glass_shapes_with_purple_and_cyan_lighting.png";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Full-Stack Developer & AI Enthusiast
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Building the <br />
            <span className="text-gradient">Future of AI</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm Aditya Anil Tiwari, a developer passionate about building scalable web applications and intelligent AI systems.
            Based in India, solving complex problems with code.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex gap-4 items-center ml-4">
              <a href="https://github.com/AdityaTiwari64" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/aditya-tiwari" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:adiaarushtiwari@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            <img 
              src={heroBg} 
              alt="Abstract 3D Art" 
              className="w-full h-full object-contain drop-shadow-2xl animate-float"
            />
            {/* Floating Code Snippets Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <code className="text-sm font-mono text-primary">git commit -m "feat: ai-agent"</code>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-5 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">System Operational</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
