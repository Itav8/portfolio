import "../styles/Resume.css";

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <div>
        <a
          target="_blank"
          href="https://italiz-personal.s3.us-east-2.amazonaws.com/ItalizVazquezResume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
