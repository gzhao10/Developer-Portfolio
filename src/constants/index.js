import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    html,
    css,
    reactjs,
    mongodb,
    git,
    python,
    threejs,
    sql,
    java,
    cpp,
    flask,

    locavor,
    instalily,
    nyu,

    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "AI Engineering Intern",
      company_name: "Instalily",
      icon: instalily,
      iconBg: "#181818",
      date: "August 2024 - September 2024",
      points: [
        "Developed an LLM-based agentic system for database manipulation through SQL, and deployed and managed language model driven systems in a client environment using real-world data.",
        "Implemented updates for iterative rollouts on a sales personnel assistant platform designed to boost sales and enhance customer engagement using Javascript.",
      ],
    },
    {
      title: "Full Stack Intern",
      company_name: "Locavor",
      icon: locavor,
      iconBg: "#000000",
      date: "June 2023 - September 2023",
      points: [
        "Implemented responsive mobile app features using React and Javascript that aided customer transactions, improved site navigability, and enhanced user experience.",
        "Performed rigorous testing during app development to identify and report software defects.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Subteam Member",
      company_name: "NYU Concrete Canoe",
      icon: nyu,
      iconBg: "#FFFFFF",
      date: "June 2023 - September 2023",
      points: [
        "Developed a machine learning model that optimized an ultra-low carbon concrete mixture composed of less than 2% portland cement, drastically reducing its carbon footprint.",
        "Placed 1st at nationals of the 2022 ASCE Concrete Canoe Competition in the category of final product, and placed 5th overall.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };