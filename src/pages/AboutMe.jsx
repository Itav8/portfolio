import ProjectDetails from "../components/ProjectDetails";
import Skills from "../components/Skills";
import perfectlyPlannedImg from "../images/perfectly_planned.png";
import healthGpt from "../images/healthGPT.png";
import carcar from "../images/carcar.png";
import trackLy from "../images/trackly.png";
import comingSoon from "../images/comingSoon.png";

import "../styles/AboutMe.css";

const AboutMe = () => {
  const mySkills = {
    programmingLangs: ["JavaScript", "TypeScript", "Python", "SQL"],
    systemDesigns: [
      "Domain-driven design",
      "Microservices",
      "Monolith",
      "Message passing",
      "Load Balancing",
    ],
    backEndTools: [
      "Node.js",
      "Express.js",
      "Prisma",
      "FastAPI",
      "Django 4",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "SQLAlchemy",
    ],
    frontEndTools: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Vite",
      "Webpack",
      "Django templating",
    ],
    tools: [
      "AWS",
      "Docker",
      "Nginx",
      "PaaS (Vercel, Render)",
      "Git",
      "Jest",
      "React Testing Library",
      "Pytest",
    ],
  };

  const projectInfo = {
    trackLy:
      "A tasks/projects tracking application is designed to offer users a streamlined and elegant experience while providing effective control over their tasks and projects. The development process involved the creation of secure user authentication interfaces using Django, ensuring that login and signup experiences are both secure and user-friendly. The task management system was optimized by implementing a robust search functionality, resulting in a remarkable 30% increase in user efficiency when managing tasks and projects",
    carCar:
      "Automobile inventory management application represents a significant leap in streamlining inventory management, services, and sales processes within the automotive industry. One of the key contributions to this project was the creation of a polling microservice, responsible for collecting and ingesting data from various internal APIs, thus ensuring a comprehensive and up-to-date automobile inventory. A user-friendly interface was crafted, utilizing React and Bootstrap to create reusable components, thereby maximizing code reusability and maintaining consistency throughout the application. Collaboration with cross-functional team members played a crucial role in designing and implementing domain-driven models, enabling the application to efficiently manage automobile data and support various facets of the automotive industry.",
    healthGPT:
      "Nutrition Tracker application harnesses the power of AI to log exercises and meals, providing users with a comprehensive dietary and fitness tracking solution. The project involved collaborative development of REST APIs, with a focus on establishing schemas, databases, and models, in coordination with three cross-functional team members. Additionally, a custom authentication service was initiated and implemented, incorporating password hashing and JWT for enhanced security. The application's user interface includes a dynamic dashboard that aggregates nutrition and fitness data, presenting users with insightful data visualizations for tracking and analyzing their progress over time.",
    perfectlyPlanned:
      "Wedding management application was designed and developed with the primary objective of streamlining wedding-related event organization. It features a single-page application (SPA) for a responsive and user-friendly experience. The application incorporates a distributed messaging service with RabbitMQ for real-time email notifications when guests are invited. Furthermore, it offers REST APIs with third-party integrations, such as Google Maps and Places APIs, to facilitate efficient management of guests, events, and event venue locations. Authentication is seamlessly handled through Firebase Auth, while the React Context API manages authentication state. To optimize the development and deployment processes, the application is containerized using Docker and deployed on Render (PaaS), enhancing developer efficiency, isolation, and CI/CD workflows.",
    miMood: 'MiMood, a mental health-focused mood tracker, using modern technologies like TypeScript, React, Node, Express, Prisma, and PostgreSQL. The application is referenced by the "circumplex model of affect" and incorporates "color therapy" techniques. Prioritizing in engaging user experience by designing interactive dashboards and user-friendly journaling flows to foster high user engagement.'
  };

  const projectGit = {
    trackLy: "https://github.com/Itav8/track.ly",
    carCar: "https://github.com/Itav8/carcar",
    healthGPT: "https://gitlab.com/caloriecounters/healthgpt",
    perfectlyPlanned: "https://github.com/Itav8/perfectly-planned",
    mimood: "https://github.com/Itav8/mimood",
  };

  const projectImgs = {
    perfectlyPlanned: perfectlyPlannedImg,
    healthGPT: healthGpt,
    carCar: carcar,
    trackLy: trackLy,
  };

  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>
      <section className="about-section">
        <div className="about-section__content">
          <div>
            <h2>Get to know me</h2>
            <p className="about-section__bio">
              Passionate Licensed Master Social Worker (LMSW) with a
              comprehensive skill set spanning the full stack. My transition
              from social work to software engineering is fueled by a deep
              desire to make a positive impact on society. I thrive on tackling
              complex challenges and crafting elegant code solutions,
              particularly on the frontend. With a strong foundation in empathy
              and understanding user needs, I bring a unique perspective to
              software engineering. I am equipped to overcome programming
              hurdles and deliver high-quality applications.
            </p>
          </div>
          <div>
            <h2>My skills</h2>
            <Skills title="Programming" skills={mySkills.programmingLangs} />
            <Skills title="System Design" skills={mySkills.systemDesigns} />
            <Skills title="Back-End" skills={mySkills.backEndTools} />
            <Skills title="Front-End" skills={mySkills.frontEndTools} />
            <Skills title="Tools" skills={mySkills.tools} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1 className="about-header">Projects</h1>
        <div className="about-section__content about-section__content--projects">
          <div>
            <ProjectDetails
              to="/mimood"
              title="MiMood"
              description={projectInfo.miMood}
              git={projectGit.mimood}
              photo={comingSoon}
            />

            <ProjectDetails
            to="/perfectlyplanned"
              title="Perfectly Planned"
              description={projectInfo.perfectlyPlanned}
              git={projectGit.perfectlyPlanned}
              photo={projectImgs.perfectlyPlanned}
            />
            <ProjectDetails
              to="/healthgpt"
              title="HealthGPT"
              description={projectInfo.healthGPT}
              git={projectGit.healthGPT}
              photo={projectImgs.healthGPT}
            />
            <ProjectDetails
              to="/carcar"
              title="CarCar"
              description={projectInfo.carCar}
              git={projectGit.carCar}
              photo={projectImgs.carCar}
            />
            <ProjectDetails
              to="/trackly"
              title="Track.ly"
              description={projectInfo.trackLy}
              git={projectGit.trackLy}
              photo={projectImgs.trackLy}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
