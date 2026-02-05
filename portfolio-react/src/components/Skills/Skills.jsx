import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { skills } from '../../data/resumeData';
import './Skills.css';

const Skills = () => {
  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Tools & DevOps', items: skills.tools }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader 
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />
        
        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
