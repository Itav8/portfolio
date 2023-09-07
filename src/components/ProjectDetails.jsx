import "../styles/ProjectDetails.css";

const ProjectDetails = (props) => {
  return (
    <div className="project-details__container">
      {props.description}
      <div className="project-details__content">
        <a className="project-details__button" href={props.git}>
          Git Respository
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
