import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1 className="resume-title">Download Resume</h1>
        <a
          className="resume-button"
          target="_blank"
          href="https://italiz-personal.s3.us-east-2.amazonaws.com/ItalizVazquezResume.pdf"
          download
        >
          Here
        </a>
      </div>
    </div>
  );
};

export default Resume;
