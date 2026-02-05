import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projects } from '../../data/resumeData';
import './Projects.css';

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader 
          title="Featured Projects"
          subtitle="Innovative solutions built with modern technologies"
        />
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tech">{project.tech}</div>
              </div>
              
              <ul className="project-description">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <a href={project.link} className="project-link">
                View Live
                <ExternalLink size={16} />
              </a>
              
              <div className="project-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
