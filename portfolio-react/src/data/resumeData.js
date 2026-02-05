export const personalInfo = {
  name: "Aman Kumar",
  title: "Full Stack Developer",
  location: "Bangalore, India",
  email: "iamankumar279@gmail.com",
  phone: "+91-7988404259",
  linkedin: "https://linkedin.com/in/aman279",
  github: "https://github.com/Amankumar279",
  bio: "Building scalable backend systems and modern web applications with a focus on performance, security, and exceptional user experiences."
};

export const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "50+", label: "API Endpoints Built" },
  { number: "3", label: "Certifications" }
];

export const experience = [
  {
    id: 1,
    title: "Software Developer",
    company: "ArclogiQ Software Solutions",
    period: "Jul 2025 – Nov 2025",
    link: "https://d2c.openinapp.com/",
    description: [
      "Developed backend architecture for OpeninApp using Nest.js, implementing JWT authentication, authorization guards, and secure REST APIs",
      "Engineered 15+ production-ready API endpoints with DTO validation, caching (Redis), logging, and rate limiting, improving average response time by 25%",
      "Integrated WebSockets for real-time updates and optimized API–frontend communication for the Next.js client to support concurrent sessions",
      "Optimized MySQL schema and Prisma queries with efficient indexing, reducing query latency by 35%"
    ]
  },
  {
    id: 2,
    title: "Industrial Trainee (IT Dept)",
    company: "Goodrich Carbohydrates Limited",
    period: "Aug 2024 – Apr 2025",
    description: [
      "Completed 9-month industrial training in the Information Technology department, focusing on enterprise software workflows and backend system maintenance",
      "Assisted in the implementation of practical IT solutions, contributing to internal tools for database management and reporting automation",
      "Gained hands-on experience with SQL databases and API design patterns, enhancing technical knowledge in scalable application development and data security best practices"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "NexAI",
    subtitle: "AI-Powered Web Application",
    tech: "React · Node.js · Express · MongoDB · OpenAI API",
    period: "Jan 2025 – Mar 2025",
    link: "https://nexai-one.vercel.app/",
    description: [
      "Built a full-stack AI platform supporting text generation and chat assistance using GPT models and MERN stack",
      "Engineered a scalable Node.js backend with input validation, structured error handling, and API rate limiting for abuse prevention",
      "Integrated Stripe for secure payment processing and ImageKit for asset optimization, improving delivery speed by 40%"
    ]
  },
  {
    id: 2,
    title: "Food Delivery Platform",
    subtitle: "Full-Stack E-Commerce Solution",
    tech: "React · Node.js · Express · MongoDB · JWT · Cloudinary",
    period: "Nov 2024 – Jan 2025",
    link: "https://project-food-del.onrender.com/",
    description: [
      "Created a MERN-based food ordering system with menu browsing, cart, and real-time order tracking",
      "Built an admin dashboard allowing restaurant owners to add dishes, modify menus, and manage orders in real time",
      "Designed MongoDB schemas for users, restaurants, orders, and menu items; enhanced performance using indexing"
    ]
  },
  {
    id: 3,
    title: "Healthcare Data Security System",
    subtitle: "Encryption & Data Protection",
    tech: "Python · AES-256 · SQL",
    period: "Sep 2024 – Oct 2024",
    link: "#",
    description: [
      "Developed an AES-256 encryption pipeline to secure storage and transmission of patient medical records",
      "Achieved a 90% reduction in unauthorized access risks and improved data retrieval latency by 30% through optimized SQL queries"
    ]
  }
];

export const skills = {
  languages: ["JavaScript (ES6+)", "Java (DSA)", "Python", "SQL", "HTML5", "CSS3"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  backend: ["Node.js", "Express.js", "Nest.js", "REST APIs", "WebSockets", "Microservices"],
  databases: ["MongoDB", "MySQL", "Prisma ORM", "Mongoose"],
  tools: ["Git", "Docker", "AWS", "Postman", "Linux"]
};

export const certifications = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Infosys Springboard"
  },
  {
    id: 2,
    title: "Frontend Developer (React)",
    issuer: "HackerRank"
  },
  {
    id: 3,
    title: "SQL Proficiency",
    issuer: "HackerRank"
  }
];

export const education = {
  degree: "Bachelor of Engineering in Information Science",
  institution: "Acharya Institute of Technology, Bangalore",
  period: "2020 – 2024",
  cgpa: "8.0"
};
