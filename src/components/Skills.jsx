import "../styles/Skill.css";

const Skills = (props) => {
  return (
    <div className="skills-container">
      {props.skills.map((skill) => {
        return <div className="skills-container__skill">{skill}</div>;
      })}
    </div>
  );
};

export default Skills;
