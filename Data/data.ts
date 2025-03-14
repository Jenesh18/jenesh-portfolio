export const BaseInfo = {
  name: "Jenesh",
  position: "Full Stack Web Developer",
  description:
    "Passionate Full Stack Developer with expertise in building dynamic, responsive web applications. Skilled in Node.js, React, and modern web technologies to create seamless user experiences.",
  profilePic: "/images/hero1.jpg",
  resumeURL: "https://docs.google.com/document/d/1W7uVuc4Zi8oLYkT--hEPBzfutdfu3Z6mLb1IbCRWxRg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/jenesh",
    github: "https://github.com/Jenesh18",
    twitter: "https://x.com/jenesh018",
    instagram: "https://www.instagram.com/jenesh_18",
    leetcode:"https://leetcode.com/u/jenesh018/"
  },
};



export const aboutInfo = {
  title: "Transforming Ideas into Digital Reality",
  description: `I'm a passionate Full Stack Developer with a keen eye for creating seamless digital experiences. With expertise in both frontend and backend technologies, I specialize in building robust, scalable web applications that drive business growth.

My approach combines clean code practices with modern design principles, ensuring that every project not only functions flawlessly but also delivers an exceptional user experience.`,
stats: [
  {
    id: 1,
    value: "2+",
    label: "Years Experience",
    icon: "/images/experience.png"
  },
  {
    id: 2,
    value: "15+",
    label: "Projects Built",
    icon: "/images/completed.png"
  },
  {
    id: 3,
    value: "15+",
    label: "Technologies",
    icon: "/images/tech.png"
  },
  {
    id: 4,
    value: "1+",
    label: "Certifications",
    icon: "/images/certificate.png"
  }
]
};

export const servicesData = [
  {
    id: 1,
    title: " Web Applications",
    description: "Tailored web apps built with the latest technologies.",
    icon: "/images/s1.png",
  },
  {
    id: 2,
    title: "E-commerce Web",
    description:
      "Secure online stores with user-friendly shopping and payments.",
    icon: "/images/s2.png",
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "Seamless integration for smooth data sharing and functionality.",
    icon: "/images/s3.png",
  },
  {
    id: 4,
    title: "User Interfaces",
    description:
      "Engaging, responsive front-end designs for better user experiences.",
    icon: "/images/s4.png",
  },
  {
    id: 5,
    title: "Database Solutions",
    description:
      "Efficient and scalable database management for your data needs.",
    icon: "/images/s5.png",
  },
  {
    id: 6,
    title: "Real-Time Features",
    description: "Add live chat, notifications, and real-time data updates.",
    icon: "/images/s6.png",
  },
  {
    id: 7,
    title: "Speed Optimization",
    description: "Boost performance with faster load times and optimization.",
    icon: "/images/s7.png",
  },
  {
    id: 8,
    title: "Web Management",
    description: "Easy content management systems with flexible controls.",
    icon: "/images/s8.png",
  },
];

export const projectData = [
  {
    "id": 1,
    "title": "Smart Meeting Scheduler",
    "description": "A modern, SEO-friendly meeting scheduler that allows users to share their availability through a personalized meeting page. Clients can request meetings based on available time slots. The platform integrates with Google Calendar and Google Meet for seamless scheduling. Built with Next.js, Prisma (Neon DB - PostgreSQL), and Clerk for authentication, it offers a smooth user experience with a clean UI powered by Tailwind CSS.",
    "image": "/images/meeting-scheduler.png",
    "techStack": ["Next.js", "JavaScript", "Prisma", "PostgreSQL (Neon DB)", "Clerk Auth", "Google Calendar API", "Google Meet API", "Tailwind CSS"],
    "liveUrl": "https://calendly-psi.vercel.app/",
    "githubUrl": "https://github.com/Jenesh18/calendly"
  },
  {
    "id": 2,
    "title": "YouTube Inspired Streaming App",
    "description": "A sleek and ad-free YouTube-inspired video streaming app built with React and Material UI. Users can search for videos, explore YouTube stats, view channel details, and watch videos without interruptions. The app fetches real-time data from Rapid API, providing a seamless video-watching experience with a modern UI.",
    "image": "/images/youtube.png",
    "techStack": ["React", "Material UI", "Rapid API", "YouTube Data API", "Netlify"],
    "liveUrl": "https://jeneshtube.netlify.app/",
    "githubUrl": "https://github.com/Jenesh18/youtube-clone-react"
  },  
  {
    "id": 3,
    "title": "Personal Developer Portfolio",
    "description": "A modern and visually appealing portfolio website showcasing my skills, projects, and professional experience. Built with Next.js, Tailwind CSS, and TypeScript, it offers a smooth user experience with fast performance and SEO optimization. The site includes a blog section, interactive UI elements, and a fully responsive design, ensuring accessibility across all devices.",
    "image": "/images/og-image.png",
    "techStack": ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    "liveUrl": "https://jenesh-portfolio.vercel.app/",
    "githubUrl": "https://github.com/Jenesh18/portfolio"
  },  
  {
    "id": 4,
    "title": "GraphQL Expense Tracker",
    "description": "A full-stack expense tracker built with the MERN stack, using GraphQL for efficient data fetching. The app allows users to register, log in, and track their expenses with interactive graphs and insights. This project was created to practice GraphQL in both frontend and backend development, ensuring a smooth and scalable API design.",
    "image": "/images/graphql-expense-tracker.png",
    "techStack": ["MongoDB", "Express.js", "React", "Node.js", "GraphQL", "Apollo Client", "Chart.js"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/graphql-expense-tracker"
  },  
  {
    "id": 5,
    "title": "MERN Stack Chat App",
    "description": "A real-time chat application built with the MERN stack, featuring user authentication, single and group chats, and advanced group management. Users can create and manage chat groups, add or remove members, edit group profiles, and share images, all stored securely using Cloudinary. The app ensures seamless communication with WebSocket-based real-time messaging.",
    "image": "/images/chat-app.png",
    "techStack": ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Cloudinary", "JWT Authentication"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/MERN-stack-chat-app"
  },  
  {
    "id": 6,
    "title": "React.js Job Portal",
    "description": "A feature-rich job portal built with React.js, designed for both recruiters and job seekers. The platform includes two separate logins: one for candidates and one for employers. Candidates can upload resumes, browse job listings, and apply for positions, while recruiters can create companies, post job openings, and manage applications. Built with Supabase for the database, Clerk for authentication, and Tailwind CSS for styling, the app ensures a seamless user experience with Zod validation for secure and structured form handling.",
    "image": "/images/job-portal.png",
    "techStack": ["React.js", "Supabase", "Clerk", "Tailwind CSS", "Zod Validation"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/job_portal"
  },
  {
    "id": 7,
    "title": "Node.js WhatsApp Bot with Meta API",
    "description": "An automated WhatsApp bot built using Node.js and the Meta WhatsApp Cloud API, designed to handle auto-replies and streamline communication. This bot enables businesses and individuals to set up automated responses, manage incoming messages, and integrate with external services for a seamless chat experience. It features message handling, dynamic response customization, and webhook integration for real-time updates.",
    "image": "/images/whatsapp-bot.jpg",
    "techStack": ["Node.js", "WhatsApp Cloud API", "Express.js", "Webhook"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/whatsapp-bot-meta-api"
  }  

];

export const skillsData = [
  {
    id: 1,
    title: "JavaScript",
    image: "/images/javascript.png",
  },
  {
    id: 2,
    title: "TypeScript",
    image: "/images/typescript.png",
  },
  {
    id: 3,
    title: "Node.js",
    image: "/images/nodejs.png",
  },
  {
    id: 4,
    title: "Express.js",
    image: "/images/express.png",
  },
  {
    id: 5,
    title: "HTML",
    image: "/images/html.png",
  },
  {
    id: 11,
    title: "CSS",
    image: "/images/css.png",
  },
  {
    id: 6,
    title: "React",
    image: "/images/reactjs.png",
  },
  {
    id: 14,
    title: "Redux",
    image: "/images/redux.png",
  },
  {
    id: 7,
    title: "Next.js",
    image: "/images/nextjs.png",
  },
  {
    id: 8,
    title: "MongoDB",
    image: "/images/mongodb.png",
  },
  {
    id: 9,
    title: "MySQL",
    image: "/images/mysql.png",
  },
  {
    id: 17,
    title: "Postgres",
    image: "/images/postgresql.png",
  },
  {
    id: 18,
    title: "Supabase",
    image: "/images/supabase.png",
  },
  {
    id: 19,
    title: "AWS",
    image: "/images/aws.png",
  },
  {
    id: 10,
    title: "GraphQL",
    image: "/images/graphql.png",
  },
  {
    id: 12,
    title: "Socket.io",
    image: "/images/socket-io.png",
  },
  {
    id: 16,
    title: "Tailwind",
    image: "/images/tailwind.png",
  },
  {
    id: 13,
    title: "Git & GitHub",
    image: "/images/git.png",
  },
  {
    id: 15,
    title: "Docker",
    image: "/images/docker.png",
  },

];

export const clientReviews = [
  {
    name: "John Doe",
    review:
      "Exceptional service! The team delivered exactly what we needed on time. Very professional",
    rating: 5,
    profession: "Marketing Manager",
    image: "/images/u1.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "Highly skilled developers who understand the client's vision and execute perfectly.",
    rating: 4.8,
    profession: "Business Owner",
    image: "/images/u2.jpg",
  },
  {
    name: "Michael Johnson",
    review:
      "Great communication and excellent results. Our new site performs beautifully.",
    rating: 4.6,
    profession: "Project Coordinator",
    image: "/images/u3.jpg",
  },
  {
    name: "Emily Brown",
    review:
      "Professional, efficient, and highly knowledgeable. Would definitely recommend their services!",
    rating: 4.9,
    profession: "Creative Director",
    image: "/images/u4.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    type: "Course",
    title: "The Complete Full-Stack Web Development Bootcamp",
    description:
      "The only course you need to become a Full-Stack Developer! With 428,296+ ratings and a 4.7 average, this is one of the HIGHEST-RATED courses in Udemy history.",
    highlights: [
      "62+ hours of in-depth content",
      "Covers Frontend & Backend (MERN)",
      "Beginner to Advanced",
    ],
    platform: "Udemy",
    link: "https://www.udemy.com/share/1013gG/",
    image: "/images/wc.jpg",
    badge: "Learning",
  },
  {
    id: 2,
    type: "Open Source Contribution",
    title: "JavaScript Interview Questions",
    description:
      "Contributed to one of the most popular JavaScript interview repositories with 25.1K+ stars. My PR added a valuable question to help developers prepare for technical interviews.",
    highlights: [
      "25.1K+ stars & 7.1K+ forks",
      "Extensive JavaScript interview prep",
    ],
    platform: "GitHub",
    link: "https://github.com/sudheerj/javascript-interview-questions",
    image: "/images/jiq.png",
    badge: "Open Source",
  },
  {
    id: 3,
    type: "NPM Package",
    title: "MySQL to PostgreSQL Migrator",
    description:
      "Developed a Node.js package that simplifies **MySQL to PostgreSQL migration**. It ensures smooth data transfer while preserving schema integrity.",
    highlights: [
      "Automatic schema & data type mapping",
      "Supports primary keys, foreign keys & indexes",
    ],
    platform: "NPM",
    link: "https://www.npmjs.com/package/mysql-to-postgres-migrator",
    image: "/images/mtpm.png",
    badge: "Development",
  },
];



export const contactData = {
  phone: "+91 9054024038",
  email: "jenesh018@gmail.com",
  address: "Surat , India",
};

export const experienceData = [
  {
    id: 1,
    role: "Nodejs Backend devloper",
    company: "CODEZEE Solutions",
    website: "https://codezeesolutions.com/",
    duration: "July 2023 - Present",
    location: "Surat, India",
    description: "Leading development of enterprise-level web applications using  Node.js",
    highlights: [
      "Designed and optimized RESTful APIs and microservices.",
      "Optimized transactions, saving users $1.5 AUD per deposit and $0.5 AUD per withdrawal, improving cost efficiency.",
      "Collaborated with frontend teams to enhance user experience.",
      "Built full-stack solutions using EJS for server-side rendering, creating seamless frontend and backend integration."
    ],
    technologies: ["Node.js","Express","TypeScript","MongoDB","MySql"],
    companyLogo: "/images/codezee.png"
  },
  {
    id: 2,
    role: "MERN Stack Intern",
    company: "CODEZEE Solutions",
    website: "https://codezeesolutions.com/",
    duration: "May 2023 - July 2023",
    location: "Surat, India",
    description: "Gained hands-on experience in full-stack development and industry best practices.",
    highlights: [
      "Completed internship in 1.5 months due to fast learning.",
      "Worked on real-world projects using modern web technologies.",
      "Integrated APIs and optimized database performance.",
      "Learned scalable development techniques from industry experts."
    ],
    technologies: ["React", "Nodejs", "Express", "Mongodb"],
    companyLogo: "/images/codezee.png"
  }
];


