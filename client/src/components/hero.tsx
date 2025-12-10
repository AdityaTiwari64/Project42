import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_matrix_style_digital_rain_code_background.png";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={heroBg} 
          alt="Matrix Code" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="animate-pulse">●</span>
              <span>System Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              HELLO WORLD, <br />
              I'M <span className="text-primary text-glow">ADITYA.</span>
            </h1>
            
            <div className="bg-card/50 border border-primary/30 p-4 rounded mb-8 backdrop-blur-sm">
              <p className="text-lg text-primary/80 leading-relaxed font-mono">
                &gt; Full-Stack Developer<br/>
                &gt; AI/ML Enthusiast<br/>
                &gt; Building scalable systems &<br/>
                &gt; solving complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold border-none rounded-none">
                INITIATE_PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-4 items-center ml-4">
                <a href="https://github.com/AdityaTiwari64" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aditya-tiwari-85b258216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:adiaarushtiwari@gmail.com" className="text-primary/60 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative border border-primary/30 bg-black/80 p-2 rounded shadow-[0_0_30px_rgba(0,255,0,0.1)]">
              <div className="flex items-center gap-2 mb-2 px-2 border-b border-primary/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-primary/50">bash — 80x24</span>
              </div>
              <div className="font-mono text-sm p-4 space-y-2 h-[300px] overflow-hidden text-primary/90">
                <p><span className="text-accent">user@aditya:~$</span> npm install skills</p>
                <p className="text-primary/60">[+] Installing Python...</p>
                <p className="text-primary/60">[+] Installing React.js...</p>
                <p className="text-primary/60">[+] Installing Machine Learning...</p>
                <p><span className="text-accent">user@aditya:~$</span> git commit -m "Hackathon Winner"</p>
                <p className="text-primary/60">[main 8a2b3c] Hackathon Winner</p>
                <p className="text-primary/60"> 1 file changed, 240 insertions(+)</p>
                <p><span className="text-accent">user@aditya:~$</span> ./run_portfolio.sh</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
