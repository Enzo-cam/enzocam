import { IWork } from "@/Interfaces/Work";

export const workInfo: IWork[] = [
  {
    icon: "/IS.png",
    projectName: "iPhoneShop",
    projectDescription:
      "Website optimized for sales registration and income tracking from repairs in a store specializing in Apple products.The system is designed to enhance the store's efficiency, providing a comprehensive overview of financial and inventory management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "ChakraUI",
      "react-hook-form",
    ],
    imagesProject: ["/destap/image1.jpg", "/destap/image2.jpg"],
    growth: "This frontend project was my first project at ROD and the first client I got to work on. I learned a lot about the product development process, from the initial phases such as designing the UI as per the client's request to putting it into production with its respective configurations, from start to finish. Nevertheless, I had the support of my leader, with whom I consulted on developing certain functionalities, good practices, and patterns. It was the perfect opportunity to learn more about Frontend, the proper use of technologies and to test my skills.",
    challenge: "The client needed a user-friendly website to track purchases and cell phone repairs, with a feature to update the price list in real-time. The key focus was on distinct sections for sales, deposits, and technical services, each requiring unique data fields and essential features.",
    solution: "We formed a four-person team: me as frontend developer and PO, a backend developer/lead, a UX/UI designer, and a project manager. We adhered to our roles, presented biweekly progress updates to the client, and successfully delivered the project within the two-month timeframe.",
    developmentPeriod: "July 2023 - September 2023",
    available: true,
  },
  {
    icon: "/yagua.png",
    projectName: "Yaguarete Group",
    projectDescription:
      "Website for internal control of a sand company and its operations. Records of sales, expenses, cash operations.",
    technologies: ["Next.js", "TypeScript", "Node", "MongoDB", "TailwindCSS"],
    imagesProject: ["/destap/image1.jpg", "/destap/image2.jpg"],
    challenge: "",
    growth: "",
    solution: "",
    developmentPeriod: "",
    available: true,
  },
  {
    icon: "/fundacion.png",
    projectName: "Foundation 'Mi alma por Bautista'",
    projectDescription:
      "Web system designed for control and monitoring of operations within a Foundation dedicated to therapeutic treatment of children.",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    imagesProject: ["/yaguarete/image1.jpg", "/yaguarete/image2.jpg"],
    challenge: "",
    growth: "",
    solution: "",
    developmentPeriod: "",
    available: false,
  },
  {
    icon: "/destap.png",
    projectName: "Destap!",
    projectDescription:
      "Web and mobile application for the acquisition of alcoholic beverages in clubs and events.",
    technologies: [
      "Next.js",
      "Nest.js",
      "MongoDB",
      "TailwindCSS",
      "Flutter",
      "Sanity CMS",
    ],
    imagesProject: ["/yaguarete/image1.jpg", "/yaguarete/image2.jpg"],
    challenge: "",
    growth: "",
    solution: "",
    developmentPeriod: "",
    available: false,
  },
];
