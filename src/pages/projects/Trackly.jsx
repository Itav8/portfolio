import Project from "../../components/Project";

const Trackly = () => {
  const techs = ["Python", "Django", "HTML", "CSS"];

  return (
    <div>
      <Project title="Trackly" skills={techs} />
    </div>
  );
};
export default Trackly;
