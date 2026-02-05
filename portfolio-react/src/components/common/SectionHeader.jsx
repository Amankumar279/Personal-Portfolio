import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div 
      className={`section-header ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
