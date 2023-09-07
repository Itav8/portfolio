import laptopImg from "../images/IMG_91374.png";

import "../styles/ProjectDetails.css";

const ProjectDetails = (props) => {
  return (
    <div className="project-details">
      <div className="project-details__container">
        <h2 className="project-details__title">{props.title}</h2>
        <p className="project-details__info">{props.description}</p>
        <a className="project-details__button" href={props.git}>
          Git Respository
        </a>
      </div>
      <div>
        <img className="project-details__img" alt="laptop" src={laptopImg} />
        <img
          className="project-details__img--project"
          alt="project"
          src={props.photo}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
