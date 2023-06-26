import "../styles/Resume.css";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resume">
        <h2>ITALIZ VAZQUEZ</h2>
        <div className="contact">
          <h4>New York, NY</h4>
          <h4>linkedin.com/italiz-vazquez</h4>
          <h4>gitlab.com/Itav8</h4>
          <h4>github.com/Itav8</h4>
        </div>

        <h2>TECHNICAL SKILLS</h2>
        <div className="skills">
          <h4>Programming:</h4>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ES6+</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
          <h4>System Design:</h4>
          <ul>
            <li>Domain-driven design</li>
            <li>Microservices</li>
            <li>Monolith</li>
            <li>Message passing</li>
            <li>Event sourcing</li>
          </ul>
          <h4>Back-End:</h4>
          <ul>
            <li>Django 4</li>
            <li>RabbitMQ</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>FastAPI</li>
          </ul>
          <h4>Front-End:</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Vite</li>
            <li>Django templating</li>
            <li>WebSockets</li>
          </ul>
        </div>
        <h2>APPLICATION DEVELOPMENT EXPERIENCE</h2>

        <div className="experience">
          <h4>HealthGPT</h4>
          <ul>
            <li>Scoped, planned, designed, and implemented core application</li>
            <li>
              Lead development of REST API service utilizing FastAPI,
              PostgreSQL, and testing with PyTest
            </li>
            <li>
              Initiated and implemented authentication utilizing password
              hashing and JWT
            </li>
            <li>
              Built Fitness pages and components utilizing React, CSS, and
              Nutritionix API
            </li>
            <li>
              Constructed Dashboard and created data visualizations using React,
              and Chart.js
            </li>
          </ul>
          <h4>CarCar</h4>
          <ul>
            <li>
              Created reusable component library with React and Bootstrap to
              maximize development efficiency
            </li>
            <li>
              Developed REST API endpoints with Django to create simplistic
              communication between the client and server
            </li>
            <li>
              Collaborated with cross-functional team members to design and
              develop domain-driven models
            </li>
            <li>
              Built a polling microservice to collect and ingest automobile data
              from a separate internal API
            </li>
          </ul>
          <h4>Track.ly</h4>
          <ul>
            <li>
              Constructed user authentication interfaces with Django ensuring
              secure login/signup experiences
            </li>
            <li>
              Optimized task management system by implementing search,
              increasing user productivity by 30%
            </li>
            <li>
              Employed Docker for application containerization to streamline and
              isolate the development environment
            </li>
          </ul>
        </div>

        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="past-work">
          <h4>Upper Manhattan Mental Health</h4>
          <ul>
            <li>
              Leveraged Accumed (Documentation Software), facilitating a
              seamless transition to Ten Eleven by training team members
            </li>
            <li>
              Provided crucial support to families and staff in establishing
              virtual learning environments, including Google Classroom, Zoom,
              and various apps
            </li>
            <li>
              Fostered collaboration with key stakeholders, including
              psychiatrists, nurses, and government workers, to ensure optimal
              outcomes for clients
            </li>
          </ul>
          <h4>Sauti Yetu Center for African Women and Families</h4>
          <ul>
            <li>
              Utilized Promis (NYC Documentation Software) and Connections (NYS
              Documentation Software) for client documentation
            </li>
            <li>
              Adapted to virtual and in-person work environments for the
              high-risk team in the prevention program
            </li>
            <li>
              Arranged and provided reports of client’s progress for conference
              meetings between families and ACS
            </li>
          </ul>
        </div>

        <h2>EDUCATION</h2>
        <div className="education">
          <ul>
            <li>Hack Reactor, Advanced Software Engineering Certificate</li>
            <li>
              Columbia School of Social Work, Master of Science in Social Work
            </li>
            <li>Rutgers University, Bachelor of Science in Social Work </li>
          </ul>
        </div>

        <h2>PERSONAL</h2>
        <div className="personal">
          <ul>
            <li>License Master Social Work (LMSW), NY</li>
            <p>Interests:</p>
            <ul>
              <li>Anime</li>
              <li>EDM</li>
              <li>Fashion</li>
              <li>Foods</li>
              <li>Movies</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
