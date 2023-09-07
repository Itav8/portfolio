import "../styles/ProjectDetails.css";

const ProjectDetails = (props) => {
  return (
    <div className="project-details__container">
      <h2 className="project-details__title">{props.title}</h2>
      <p className="project-details__info">{props.description}</p>
        <a className="project-details__button" href={props.git}>
          Git Respository
        </a>
    </div>
  );
};

export default ProjectDetails;
