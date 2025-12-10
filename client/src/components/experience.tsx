import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Remote Sensing and GIS Intern",
    company: "India Space Week",
    date: "Jul 2025 – Aug 2025",
    location: "Remote",
    description: "Conducted vegetation health mapping using NDVI analysis on satellite imagery. Processed large-scale geospatial datasets using Python, QGIS, and GEE. Implemented ML algorithms for image classification.",
    skills: ["Python", "QGIS", "GEE", "Machine Learning"]
  },
  {
    title: "Junior Web Developer",
    company: "OnlineSyndrome (Freelance)",
    date: "Sep 2021 – Dec 2022",
    location: "Remote",
    description: "Developed responsive web applications using React.js. Collaborated with clients for customized solutions. Implemented RESTful APIs and integrated third-party services.",
    skills: ["React.js", "HTML/CSS", "REST APIs", "Client Management"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-white">
            &lt;EXECUTION_LOG /&gt;
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-black border-2 border-primary rounded-full" />
              
              <div className="bg-card border border-primary/20 p-6 hover:border-primary transition-all group">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary/80 font-medium mt-1">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary/60 font-mono mb-1 flex items-center gap-2 justify-end">
                      <Calendar size={14} /> {exp.date}
                    </div>
                    <div className="text-sm text-primary/60 font-mono flex items-center gap-2 justify-end">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed border-l-2 border-primary/10 pl-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-primary/5 border border-primary/20 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
