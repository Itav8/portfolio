import Skills from "../components/Skills";
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
    tools: ["Docker", "PaaS(Vercel, Render, Railway)", "Git"],
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <section className="about-section">
        <div className="about-section__content">
          <div>
            <h2>Get to know me</h2>
            <p>
              Passionate Licensed Master Social Worker (LMSW) with a
              comprehensive skill set spanning the full stack. My transition
              from social work to software engineering is fueled by a deep
              desire to make a positive impact on society. I thrive on tackling
              complex challenges and crafting elegant code solutions,
              particularly on the frontend. With a strong foundation in empathy
              and understanding user needs, I bring a unique perspective to
              software engineering. Proficient in JavaScript, Python, React,
              PostgreSQL, and FastAPI, I am equipped to overcome programming
              hurdles and deliver high-quality applications.
            </p>
          </div>
          <div>
            <h2>My Skills</h2>
            <h4>Programming</h4>
            <Skills skills={mySkills.programmingLangs} />
            <h4>System Design</h4>
            <Skills skills={mySkills.systemDesigns} />
            <h4>Back-End</h4>
            <Skills skills={mySkills.backEndTools} />
            <h4>Front-End</h4>
            <Skills skills={mySkills.frontEndTools} />
            <h4>Tools</h4>
            <Skills skills={mySkills.tools} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1>Projects</h1>
        <div className="about-section__content"></div>
      </section>
    </div>
  );
};

export default AboutMe;
