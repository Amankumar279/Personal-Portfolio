import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  icon,
  className = '',
  ...props
}) => {
  const isInternalLink = href && href.startsWith('#');
  const isExternalLink = href && !isInternalLink;
  const Component = href ? motion.a : motion.button;

  const handleClick = (e) => {
    // Handle smooth scroll for internal anchor links
    if (isInternalLink) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    // Call any additional onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      className={`btn btn-${variant} ${className}`}
      href={href}
      onClick={handleClick}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </Component>
  );
};

export default Button;
