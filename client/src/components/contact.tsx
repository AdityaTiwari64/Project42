import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-white">
              &lt;INIT_CONNECTION /&gt;
            </h2>
            <p className="text-lg text-primary/70 mb-8 font-mono">
              Ready to collaborate on the next big thing? Send a signal.
            </p>

            <div className="space-y-6">
              <a href="mailto:adiaarushtiwari@gmail.com" className="flex items-center gap-4 p-4 border border-primary/20 hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="p-3 bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="font-mono">
                  <div className="text-xs text-primary/50">EMAIL</div>
                  <div className="text-white">adiaarushtiwari@gmail.com</div>
                </div>
              </a>

              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/AdityaTiwari64" 
                  className="w-12 h-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/aditya-tiwari" 
                  className="w-12 h-12 flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all"
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
            className="bg-card border border-primary/30 p-8 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary">NAME</label>
                  <Input placeholder="John Doe" className="bg-black border-primary/30 text-white placeholder:text-gray-700 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary">EMAIL</label>
                  <Input placeholder="john@example.com" className="bg-black border-primary/30 text-white placeholder:text-gray-700 rounded-none focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary">MESSAGE</label>
                <Textarea placeholder="System status report..." className="min-h-[150px] bg-black border-primary/30 text-white placeholder:text-gray-700 rounded-none focus-visible:ring-primary" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/80 text-black font-bold rounded-none" size="lg">
                TRANSMIT_DATA <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-primary/20 text-center text-xs font-mono text-primary/40">
        <p>SYSTEM.EXIT(0) // © {new Date().getFullYear()} Aditya Anil Tiwari.</p>
      </footer>
    </section>
  );
}
