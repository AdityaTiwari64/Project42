import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Agentic AI Automation System",
    description: "Intelligent automation system using multi-agent workflows leveraging LLMs for task decomposition. Top 240/5,743 in NASSCOM Hackathon.",
    tags: ["Python", "LangChain", "OpenAI", "RAG"],
    link: "#",
    github: "#"
  },
  {
    title: "Vegetation Health Mapping",
    description: "Satellite imagery analysis tool to assess vegetation health using NDVI indices. Achieved 92% accuracy in land cover detection.",
    tags: ["Python", "QGIS", "GEE", "NumPy"],
    link: "#",
    github: "#"
  },
  {
    title: "Skycrate | Cloud Storage",
    description: "Built a robust cloud storage solution tackling real user problems. Featured at VIT Project Exhibition.",
    tags: ["Cloud Computing", "Web Dev", "Storage"],
    link: "#",
    github: "#"
  },
  {
    title: "Cisco Community VITB Website",
    description: "Full-stack platform for 500+ students with authentication, event management, and real-time notifications.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Node.js"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-white">
              &lt;DEPLOYED_MODULES /&gt;
            </h2>
            <p className="text-primary/60 font-mono">
              Directory of compiled applications and research.
            </p>
          </div>
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-black font-mono rounded-none">
            VIEW_ALL <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-card border border-primary/30 p-6 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] transition-all relative">
                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100">
                  <FolderOpen className="text-primary" />
                </div>
                
                <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 font-mono text-sm h-20">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-secondary text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 border-t border-primary/20 pt-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-mono">
                    <Github size={16} /> Source
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-mono">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
