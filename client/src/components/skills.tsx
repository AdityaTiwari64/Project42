import { motion } from "framer-motion";
import { 
  Code2, Database, Brain, Globe, Terminal, Layers,
  Cpu, Layout
} from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    items: ["Python", "JavaScript", "C++", "HTML5/CSS3"]
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-6 h-6 text-accent" />,
    items: ["PyTorch", "TensorFlow", "LangChain", "OpenAI API", "RAG"]
  },
  {
    category: "Web Dev",
    icon: <Globe className="w-6 h-6 text-secondary" />,
    items: ["React.js", "Next.js", "Node.js", "Express", "TailwindCSS"]
  },
  {
    category: "Data & Cloud",
    icon: <Database className="w-6 h-6 text-green-500" />,
    items: ["PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Firebase"]
  },
  {
    category: "Tools",
    icon: <Terminal className="w-6 h-6 text-orange-500" />,
    items: ["Git/GitHub", "Docker", "Linux/Unix", "VS Code", "Jupyter"]
  },
  {
    category: "Specialized",
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    items: ["Geospatial Analysis", "QGIS", "Google Earth Engine", "Image Processing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset developed through academic rigor and hands-on project experience.
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
              className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-display">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
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
