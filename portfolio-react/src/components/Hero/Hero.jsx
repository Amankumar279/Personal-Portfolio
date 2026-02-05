import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Button from '../common/Button';
import { personalInfo } from '../../data/resumeData';
import profileImage from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-label" variants={itemVariants}>
              {personalInfo.title}
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              {personalInfo.bio}
            </motion.p>
            
            <motion.div className="hero-cta" variants={itemVariants}>
              <Button 
                variant="primary" 
                href="#contact"
                icon={<ArrowRight size={20} />}
              >
                Get In Touch
              </Button>
              <Button 
                variant="secondary" 
                href={personalInfo.github}
                icon={<Github size={20} />}
              >
                View GitHub
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="profile-image-container">
              <div className="profile-glow" />
              <div className="profile-ring" />
              <div className="profile-ring profile-ring-2" />
              <img 
                src={profileImage} 
                alt={personalInfo.name} 
                className="profile-image" 
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="floating-element floating-1"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="floating-element floating-2"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div 
              className="floating-element floating-3"
              animate={{ 
                y: [0, -10, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Animated Background Grid */}
      <div className="hero-bg-grid" />
    </section>
  );
};

export default Hero;
