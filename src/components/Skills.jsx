import "../styles/Skills.css";

const Skills = (props) => {
  return (
    <div>
      <h4 className="skills-title">{props.title}</h4>
      <div className="skills-container">
        {props.skills.map((skill, i) => {
          return <div className="skills-container__skill" key={i}>{skill}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
