import { IWork } from "@/Interfaces/Work";

export const workInfo: IWork[] = [
  {
    icon: "/workIcons/IS.png",
    url: "iphoneshop",
    projectName: "iPhone Shop",
    projectDescription:
      "Website for sales registration and income tracking from repairs in a store specializing in Apple products. Designed to enhance the store's efficiency, and overview of financial and inventory management.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "ChakraUI"],
    imagesProject: ["/IphoneImgs/IP1.png", "/IphoneImgs/IP2.png", "/IphoneImgs/IP3.png", "/IphoneImgs/IP4.png"],
    growth:
      "This was my first project at ROD and the first client I got to work on. I learned a lot about the product development process, from the initial phases such as designing the UI per the client's request to putting it into production with its respective configurations, from start to finish. Nevertheless, I had the support of my leader, with whom I consulted on developing certain functionalities, good practices, and patterns. It was the perfect opportunity to learn more about Frontend, the proper use of technologies, and to test my skills.",
    challenge:
      "The client needed a user-friendly website to track purchases and cell phone repairs, with a feature to update the price list in real time. The key focus was on distinct sections for sales, deposits, and technical services, each requiring unique data fields and essential features.",
    solution:
      "We formed a team: me as a frontend developer and PO, a backend developer/lead, a UX/UI designer, and a project manager. We adhered to our roles, presented biweekly progress updates to the client, and successfully delivered the project within the two-month timeframe.",
    developmentPeriod: "July 23 - Sept 23",
    available: true,
  },
  {
    icon: "/workIcons/yagua.png",
    url: "yaguarete-group",
    projectName: "Yaguarete Group",
    projectDescription:
      "System for internal control of a sand company and its operations. Sales, expenses, cash operations, etc.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node",
      "MongoDB",
      "TailwindCSS",
      "ShadCN",
    ],
    imagesProject: ["/YaguaImgs/yagua1.png", "/YaguaImgs/yagua2.png", "/YaguaImgs/yagua3.png"],
    growth:
      "I transitioned to a full-stack role, handling tasks by feature and bridging backend services with the frontend. This experience enriched my knowledge of API integration, database modeling, and data storage. The project was challenging, involving complex interactions between data models and demanding a sophisticated UI and advanced feature set. My backend work focused on crafting secure APIs and managing database operations to support a seamless user interface.",
    challenge:
      "During the project, I encountered challenges in creating an interactive and user-friendly UI, as we integrated new libraries like Chakra UI and TailwindCSS. I developed complex features as tracking system actions in a history log added complexity. Additionally, crafting more interactive URLs to enhance user engagement was a key challenge to meet the client's requirements for a flexible and intuitive interface.",
    solution:
      "We assembled a robust team of three developers, with each one taking ownership of different segments of the program—cash management for one, and sales for another—thus streamlining the app's focus. We employed agile methodologies, with weekly tracking on Trello and bi-weekly meetings to ensure progress. The project thrived on a collaborative effort, and we also implemented pair programming sessions to enhance feature development and problem-solving.",
    developmentPeriod: "Nov 23- Febr 24",
    available: true,
  },
  {
    icon: "/workIcons/destap.png",
    url: "destap",
    projectName: "Destap!",
    projectDescription:
      "Management system for nightclubs, venues, and events, designed to handle inventory, waiter data, event management, and more. The main feature is enabling customers to purchase alcohol through a QR code for quick and easy retrieval.",
    technologies: [
      "Next.js",
      "React Native",
      "Nest.js",
      "MongoDB",
      "TailwindCSS",
      "ShadCN",
      "Zustand",
    ],
    imagesProject: ["/DestapImgs/Destap1.png", "/DestapImgs/Destap2.png", "/DestapImgs/Destap3.png"],
    challenge:
      "The primary challenge was developing an integrated system that could seamlessly handle multiple complex functions, from inventory management and event coordination to guest list management and online alcohol purchases. Ensuring the system could generate unique QR codes for efficient alcohol retrieval added another layer of complexity.",
    growth:
      "Working on Destap! provided me an excellent opportunity to taste my full-stack development skills, especially in integrating frontend and backend technologies. In my role, I enhanced in creating scalable systems and learned to manage and optimize real-time data processing. The project allowed me to experiment with new technologies and improve my problem-solving skills in a dynamic environment. Additionally, leading the conceptualization and direction of the product as a Co-Founder added significant value to my experience.",
    solution:
      "Our development team consisted of two frontend developers, a tech lead who also served as the backend developer, a project manager, and a UX/UI designer. My role focused on implementing the functionalities and developing the views provided by the designer. We followed agile methodologies with bi-weekly sprints, regular stand-ups, and continuous feedback loops to ensure we stayed on track and addressed issues promptly. Our approach included testing and user feedback sessions to refine the user experience and functionality.",
    developmentPeriod: "March 24 - Currently",
    available: true,
  },
  {
    icon: "/workIcons/gitano.png",
    url: "gitano-club",
    projectName: "Gitano Club",
    projectDescription:
      "Website for a tattoo studio located in Asuncion, Paraguay. The site showcases the styles they specialize in, profiles of the tattoo artist and offers the convenience of booking appointments directly through the website.",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "ShadCN"],
    imagesProject: ["/GitanoImgs/Gitano1.png", "/GitanoImgs/Gitano2.png", "/GitanoImgs/Gitano3.png"],
    challenge:
      "The main challenge was developing a user-friendly interface that allowed clients to easily browse tattoo styles, learn about the artists, and book appointments. Additionally, creating a system for artists to manage their own schedules and appointments added complexity to the project.",
    growth:
      "This project allowed me to enhance my skills in creating user-centric interfaces and managing complex scheduling functionalities. I learned a lot about balancing client needs with technical feasibility and ensuring a seamless user experience for both clients and tattoo artists.",
    solution:
      "Our team consisted of me as frontend developer, a backend developer, a project manager, and a UX/UI designer. We followed agile methodologies with bi-weekly sprints and regular stand-ups. My role was focused on developing the frontend functionalities and ensuring the seamless integration of the scheduling system. Despite our efforts, the project was discontinued due to external reasons from the owners.",
    developmentPeriod: "Oct 23 - Discontinued",
    available: true,
  },
  {
    icon: "/workIcons/fundacion.png",
    url: "fundacion",
    projectName: "Foundation 'MAPB'",
    projectDescription:
      "Web system designed for control and monitoring of operations within a Foundation dedicated to therapeutic treatment of children.",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    imagesProject: [""],
    challenge: "",
    growth: "",
    solution: "",
    developmentPeriod: "Febr 24 - Doing",
    available: false,
  },
];
