import Project from "../../components/Project";

const MiMood = () => {
  const techs = [
    "Node.js",
    "Express.js",
    "PrismaORM",
    "PostgreSQL",
    "TypeScript",
    "AWS",
    "Jest",
    "HTML",
    "JavaScript",
    "React",
    "Vite",
  ];
  return (
    <div>
      <Project title="MiMood" skills={techs} />
    </div>
  );
};
export default MiMood;
