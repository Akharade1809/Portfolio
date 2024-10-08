import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Arjun Kharade, Software developer with over 3+ years of experience. I am currently pursuing my engineering degree from Dayananda Sagar College of Engineering. My expertise lies in Mobile and Web development, with a strong proficiency in Java, Dart and React. I am adept at building robust applications using Android Studio and have a proven track record of successful projects. My technical stack includes a variety of tools and technologies that ensure the delivery of high-quality software solutions.`;

export const ABOUT_TEXT = `As an enthusiastic Software developer, I bring over two years of hands-on experience in building and deploying applications. Currently, I am advancing my technical education at Dayananda Sagar College of Engineering. My proficiency spans across Mobile Application (Cross-platform / Native) development, utilizing Java and Dart, and extends to web development with a focus on front-end technologies. I am skilled in database management, handling Firebase, MongoDB, SQLite, MySQL, and Oracle CLI with ease. My UI/UX capabilities include working with XML, HTML, Material Design, and Jetpack Compose, complemented by design tools like Figma, FigJam and Canva. Version control is an integral part of my workflow, where I extensively use Git and GitHub.\nMy projects often reflect a blend of innovative problem-solving and practical implementation, aimed at delivering seamless user experiences. With a passion for technology and a commitment to continuous learning, I am dedicated to contributing effectively to dynamic development teams and projects.`;

export const EXPERIENCES = [
  {
    year: "July-2024 - present",
    role: "Software Developer Intern",
    company: "Explified",
    description: `Developed a full-stack web application utilizing React for dynamic and responsive user interfaces, Material-UI for enhanced UI components, and Firebase for real-time database management, authentication, and cloud storage. Integrated Node.js on the backend to handle API requests and server-side logic.\n Building a cross-platform mobile application using Flutter, leveraging Firebase for backend services such as authentication, real-time databases, and cloud storage. Implementing seamless user experiences across both iOS and Android platforms. \nActively collaborating on Product Requirements Documentation (PRD) to define functional and technical specifications, ensuring alignment with stakeholder expectations and guiding development processes. Involved in drafting and maintaining key product-related documentation for project management and roadmaps.`,
    technologies: ["Java","JavaScript", "Dart", "React", "Flutter","Android"],
  },
  {
    year: "2023 - 2023",
    role: "Associate Software Engineer Intern",
    company: "Anthropic Technologies LLP, Belguam,India",
    description: `Actively participated in requirement gathering and design processes. I was responsible for developing and testing various software components, ensuring they met the required specifications. Additionally, I played a crucial role in validating applications to guarantee their proper functionality. This hands-on experience allowed me to enhance my technical skills and contribute effectively to the project's success.`,
    technologies: ["Project Management", "Java", "Requiremnt Enginnering", "Testing"],
  },
  
  
];

export const PROJECTS = [
  {
    title: "Clincal Findings",
    image: project1,
    description:
      "Developed a comprehensive web application using React.js and Node.js. This application featured advanced functionalities including speech-to-text transcription, medical report summarization using the Gemini AI Studio API, and patient record storage adhering to EHR standards. Additionally, the application supported the translation of medical reports into various native languages, enhancing accessibility and usability.",
    technologies: ["React.js", "Node.js", "Gemini AI Studio API", "MongoDB"],
    githubLink: "https://github.com/Akharade1809/Clinical-reporting",
  },
  {
    title: "Aapda Seva",
    image: project2,
    description:
      "Developed an Android application using Android Studio and Java. The app included robust features such as Rescue Agency and User portals for efficient registration and authorization, real-time chat for seamless communication, map-based location tracking of rescue agencies, offline data accessibility, and an SOS emergency call system to ensure prompt assistance during emergencies.",
    technologies: ["Android Studio", "Java", "Google Maps API"],
    githubLink: "https://github.com/Akharade1809/Aapda_Seva",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind.css", "Bootstrap"],
    githubLink: "https://github.com/Akharade1809/Portfolio",
  },
  {
    title: "Basic Banking Application",
    image: project4,
    description:
      "Created a basic banking prototype in Android Studio using Java, focusing on providing essential banking functionalities. The application featured a user-friendly dashboard, a fund transfer prototype, transaction history tracking, and one-click bill payments, offering a simplified and efficient banking experience.",
    technologies: ["Java", "XML", "SQLite"],
    githubLink: "https://github.com/Akharade1809/banking_app",
  },
];


export const CONTACT = {
  address: "Bangalore-India ",
  phoneNo: "+91 82174 25856 ",
  email: "arjunkharade1643@gmail.com",
};
