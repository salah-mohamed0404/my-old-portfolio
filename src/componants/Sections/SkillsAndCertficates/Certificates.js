import classes from "./Certificates.module.css";

function Certificates() {
  const renderCertificates = (certificate) => (
    <li className={classes.certificate}>
      {/* Icon insted of list dots */}
      <h3>{certificate.courseName}</h3>
      <span>{certificate.description}</span>
    </li>
  );

  return (
    <ul className={classes["certificates-list"]}>
      {/* Render certificates dynamic */}
    </ul>
  );
}

export default Certificates;
