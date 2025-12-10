import { motion } from "framer-motion";
import { 
  Code2, Database, Brain, Globe, Terminal, Layers,
  Cpu, Cloud
} from "lucide-react";

const skills = [
  {
    category: "LANGUAGES",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    items: ["Python", "JavaScript", "C++", "HTML5/CSS3"]
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-6 h-6 text-accent" />,
    items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI API", "RAG"]
  },
  {
    category: "WEB DEV",
    icon: <Globe className="w-6 h-6 text-primary" />,
    items: ["React.js", "Next.js", "Node.js", "Express", "TailwindCSS"]
  },
  {
    category: "DATA & CLOUD",
    icon: <Cloud className="w-6 h-6 text-accent" />,
    items: ["PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Firebase"]
  },
  {
    category: "TOOLS",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    items: ["Git/GitHub", "Docker", "Linux/Unix", "VS Code", "Jupyter"]
  },
  {
    category: "SPECIALIZED",
    icon: <Layers className="w-6 h-6 text-accent" />,
    items: ["Geospatial Analysis", "QGIS", "Google Earth Engine", "Image Processing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-white">
            &lt;TECHNICAL_ARSENAL /&gt;
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto font-mono">
            System capabilities and installed modules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 p-6 hover:border-primary transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 border border-primary/30 rounded text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-mono text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-primary/10 border border-primary/20 text-xs font-mono text-primary hover:bg-primary hover:text-black transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
