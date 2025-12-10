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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 ring-4 ring-background z-20" />

              <div className="flex-1 md:w-1/2" />
              
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className="bg-card border border-border/50 p-6 rounded-2xl hover:shadow-lg transition-shadow relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  
                  <div className={`flex flex-col gap-2 mb-4 ${index % 2 !== 0 && "md:items-end"}`}>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 && "md:justify-end"}`}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-muted rounded text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
