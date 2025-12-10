import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    title: "Cisco Community VITB Website",
    description: "Full-stack platform for 500+ students with authentication, event management, and real-time notifications.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "LLM-Powered Code Assistant",
    description: "AI-powered code completion and debugging assistant using fine-tuned language models and transformer architectures.",
    tags: ["Transformers", "FastAPI", "React", "Python"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects exploring AI agents, geospatial data, and scalable web systems.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All Projects <ArrowUpRight size={16} />
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
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-border/50 bg-card overflow-hidden group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold font-display">{project.title}</CardTitle>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.github} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.link} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2 mt-auto pt-0">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
