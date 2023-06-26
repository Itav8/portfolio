import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about">
      <img
        alt="profile"
        src="data:image/jpeg;base64,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"
      />
      <div className="about-details">
        <h1>
          Italiz Vazquez
        </h1>
        <h3>About me</h3>
        <p>
          Passionate Licensed Master Social Worker (LMSW) with a comprehensive
          skill set spanning the full stack. My transition from social work to
          software engineering is fueled by a deep desire to make a positive
          impact on society. I thrive on tackling complex challenges and
          crafting elegant code solutions, particularly on the frontend. With a
          strong foundation in empathy and understanding user needs, I bring a
          unique perspective to software engineering. Proficient in JavaScript,
          Python, React, PostgreSQL, and FastAPI, I am equipped to overcome
          programming hurdles and deliver high-quality applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
