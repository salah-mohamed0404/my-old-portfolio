import { courses } from "../../../store/data";
import classes from "./Certificates.module.css";

function Certificates() {
  const renderCertificate = (course) => (
    <li key={course.name}>
      <div>
        <a className="link" href={course.certificateURL} target="blank">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            font-size="40"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc></desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="15" cy="15" r="3"></circle>
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
            <line x1="6" y1="9" x2="18" y2="9"></line>
            <line x1="6" y1="12" x2="9" y2="12"></line>
            <line x1="6" y1="15" x2="8" y2="15"></line>
          </svg>
        </a>
      </div>

      <div>
        <h3>{course.name}</h3>
        <span>
          {course.campany} {course.mentor && `(${course.mentor})`}
        </span>
        <p>{course.description}</p>
      </div>
    </li>
  );

  return (
    <ul className={classes["certificates-list"]}>
      {courses.map((course) => renderCertificate(course))}
    </ul>
  );
}

export default Certificates;
