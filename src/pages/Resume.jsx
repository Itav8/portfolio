import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* <div className="resume-content"> */}
        <h1 className="resume-title">Download Resume</h1>
        <a
          className="resume-button"
          target="_blank"
          href="https://italiz-personal.s3.us-east-2.amazonaws.com/ItalizVazquezResume.pdf"
          download
        >
          <img
            className="resume-button__icon"
            width="100"
            height="100"
            src="https://img.icons8.com/carbon-copy/100/download.png"
            alt="download"
          />
        </a>
      {/* </div> */}
    </div>
  );
};

export default Resume;
