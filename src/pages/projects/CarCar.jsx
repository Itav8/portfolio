import Skills from "../../components/Skills";
import Project from "../../components/Project";

const CarCar = () => {
  const techs = [
    "Python",
    "Django",
    "RabbitMQ",
    "PyTest",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Chart.js",
    "Docker"
  ];

  return (
    <div>
      <Project title="CarCar" skills={techs} />
    </div>
  );
};
export default CarCar;
