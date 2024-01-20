import Project from "../../components/Project";

const HealthGPT = () => {
  const techs = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Chart.js",
  ];
  return (
    <div>
      <Project title="HealthGPT" skills={techs}/>
    </div>
  );
};
export default HealthGPT;
