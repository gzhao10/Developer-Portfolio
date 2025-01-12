import {
    frontend,
    backend,
    ai,
    data,

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

    api,
    crane,
    jail,
    nba,
    scribble,
    wildwood,

    email,
    github,
    linkedin,
    resume,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: ai,
    },
    {
      title: "Data Engineer",
      icon: data,
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
      date: "January 2022 - May 2022",
      points: [
        "Developed a machine learning model that optimized an ultra-low carbon concrete mixture composed of less than 2% portland cement, drastically reducing its carbon footprint.",
        "Placed 1st at nationals of the 2022 ASCE Concrete Canoe Competition in the category of final product, and placed 5th overall.",
      ],
    },
  ];

  const projects = [
    {
      name: "NBA AI Chatbot",
      description:
        "An AI-driven chatbot that that interprets a user prompt written in natural language and converts it to a SQL query that interacts with an NBA dataset to provide insights and visualizations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "orange-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: nba,
      source_code_link: "https://github.com/gzhao10/NBA-AI-Chatbot",
      is_live: false,
      live_link: '',
    },
    {
      name: "Journal API Server",
      description:
        "A RESTful API server for a journal using Flask that integrated 20+ endpoints allowing for CRUD operations on people, manuscript, and text data collections hosted on MongoDB.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: api,
      source_code_link: "https://github.com/dooont/mmankwgzrz/",
      is_live: true,
      live_link: 'https://gzhao10.pythonanywhere.com/',
    },
    {
      name: "Wildwood Adventure",
      description:
        "A scrolling 2D action game with two interactive levels, featuring a health system, combat, and attack/death animations.\n\nUse the LEFT, RIGHT, UP, and DOWN keys to complete various game objectives. Find a weapon and save the world from monsters!",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
      ],
      image: wildwood,
      source_code_link: "https://github.com/gzhao10/WildwoodAdventure/",
      is_live: false,
      live_link: '',
    },
    {
      name: "Crane Chaos",
      description:
        "A scrolling 2D platformer with three interactive levels that incorporates various AI enemies with different attack patterns.\n\n Use the LEFT, RIGHT, and SPACE keys to avoid enemies and pitfalls.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
      ],
      image: crane,
      source_code_link: "https://github.com/gzhao10/Crane-Chaos",
      is_live: false,
      live_link: '',
    },
    {
      name: "ScribbleGuesser",
      description:
       "A multiplayer game where players take turns drawing, and the other players in the server must guess the drawing for points. Only one Scribbler can draw at a time, who is unable to type in chat during this period. If all players guess correctly, or the timer runs out, the round ends.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient"
        }
      ],
      image: scribble,
      source_code_link: "https://github.com/gzhao10/ScribbleGuesser/",
      is_live: false,
      live_link: '',
    },
    {
      name: "City Jail App",
      description:
       "A web application that allows users to access a MYSQL database. This app features a public view that allows users to search criminal and crime related data. There is also an admin view, accessed through the login, that allows for more detailed searches, inserting new data entries, updating existing entries, and deleting existing entries.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient"
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jail,
      source_code_link: "https://github.com/abeeds/City-Jail-App",
      is_live: false,
      live_link: '',
    },
  ];

  const contacts = [
    {
      id: 'Email',
      link: 'mailto:zgavin73@gmail.com',
      image: email,
      dimensions: 'w-4 h-5 ml-3 mt-1',
    },
    {
      id: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gavin-zhao-837398236/',
      image: linkedin,
      dimensions: 'w-3.5 h-3.5 ml-3 mt-1.5'
    },
    {
      id: 'GitHub',
      link: 'https://github.com/gzhao10',
      image: github,
      dimensions: 'w-5 h-5 ml-3 mt-0.5'
    },
    {
      id: 'Resume',
      link: 'https://docs.google.com/document/d/1k7KarIsdTnWbfDGIdBNkuOFw_MtzHVlmwRNqLg2nZYQ/edit?usp=sharing',
      image: resume,
      dimensions: 'w-4 h-4 ml-3 mt-1'
    }
  ]
  
  export { services, technologies, experiences, projects, contacts };