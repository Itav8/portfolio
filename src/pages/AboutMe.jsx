import ProjectDetails from "../components/ProjectDetails";
import Skills from "../components/Skills";
import perfectlyPlannedImg from "../images/perfectly_planned.png"
import healthGpt from "../images/healthGPT.png"
import carcar from "../images/carcar.png"
import trackLy from "../images/trackly.png"

import "../styles/AboutMe.css";

const AboutMe = () => {
  const mySkills = {
    programmingLangs: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
    ],
    systemDesigns: [
      "Domain-driven design",
      "Microservices",
      "Monolith",
      "Message passing",
      "Event sourcing",
    ],
    backEndTools: [
      "FastAPI",
      "Django 4",
      "PostgreSQL",
      "NoSQL (MongoDB)",
      "RabbitMQ",
      "SQLAlchemy",
    ],
    frontEndTools: ["React", "Redux", "Vite", "Django templating"],
    tools: ["Docker", "PaaS (Vercel, Render, Railway)", "Git"],
  };

  const projectInfo = {
    trackLy:
      "A tasks/projects tracking application providing users with a minimal elegant experience and management control.",
    carCar:
      "Innovating automobile inventory management, services, and sales processes efficiently.",
    healthGPT: "Nutrition tracker utilizing AI to log exercises and meals.",
    perfectlyPlanned:
      "Wedding Management application, designed for efficient organization to create wedding-related events.",
  };

  const projectGit = {
    trackLy: "https://github.com/Itav8/track.ly",
    carCar: "https://github.com/Itav8/carcar",
    healthGPT: "https://gitlab.com/caloriecounters/healthgpt",
    perfectlyPlanned: "https://github.com/Itav8/perfectly-planned",
  };

  const projectImgs = {
    perfectlyPlanned: perfectlyPlannedImg,
    healthGPT: healthGpt,
    carCar: carcar,
    trackLy: trackLy
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
            <h2>My Skills</h2>
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
              title="Perfectly Planned"
              description={projectInfo.perfectlyPlanned}
              git={projectGit.perfectlyPlanned}
              photo={projectImgs.perfectlyPlanned}
            />
            <ProjectDetails
              title="HealthGPT"
              description={projectInfo.healthGPT}
              git={projectGit.healthGPT}
              photo={projectImgs.healthGPT}
            />
            <ProjectDetails
              title="CarCar"
              description={projectInfo.carCar}
              git={projectGit.carCar}
              photo={projectImgs.carCar}
            />
            <ProjectDetails
              title="Track.ly"
              description={projectInfo.trackLy}
              git={projectGit.trackLy}
              photo={projectImgs.trackLy}
            />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
