import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a href="mailto:adiaarushtiwari@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted transition-colors group">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">adiaarushtiwari@gmail.com</div>
                </div>
              </a>

              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/AdityaTiwari64" 
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/aditya-tiwari" 
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="john@example.com" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Aditya Anil Tiwari. All rights reserved.</p>
      </footer>
    </section>
  );
}
