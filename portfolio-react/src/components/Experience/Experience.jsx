import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experience } from '../../data/resumeData';
import './Experience.css';

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeader 
          title="Experience"
          subtitle="Professional journey and contributions to impactful projects"
        />
        
        <div className="experience-grid">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-period">{exp.period}</div>
              </div>
              
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              {exp.link && (
                <a href={exp.link} className="experience-link">
                  View Project
                  <ArrowRight size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
