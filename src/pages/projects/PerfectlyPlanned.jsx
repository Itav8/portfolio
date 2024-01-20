import Project from "../../components/Project";

const PerfectlyPlanned = () => {
  const techs = [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "RabbitMQ",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Material UI",
    "Vite",
  ];
  return (
    <div>
      <Project title="Perfectly Planned" skills={techs} />
    </div>
  );
};
export default PerfectlyPlanned;
