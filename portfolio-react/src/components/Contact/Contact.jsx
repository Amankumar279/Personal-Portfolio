import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { personalInfo, certifications } from '../../data/resumeData';
import './Contact.css';

const Contact = () => {
  const contacts = [
    { icon: <Mail size={24} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={24} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <Linkedin size={24} />, label: 'LinkedIn Profile', href: personalInfo.linkedin },
    { icon: <Github size={24} />, label: 'GitHub Profile', href: personalInfo.github }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeader 
          title="Let's Connect"
          subtitle="Open to opportunities and collaborations"
        />
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to work together?</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <motion.div 
            className="contact-links"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                className="contact-link"
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="contact-icon">{contact.icon}</span>
                {contact.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="certifications-title">Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-item">
                <div className="cert-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
