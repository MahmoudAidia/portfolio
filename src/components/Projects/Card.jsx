import "./Card.scss";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Card({ item }) {
  const { title, skills, desc, img, github, demo } = item;
  return (
    <div className="card">
      <div className="img">
        <img src={img} />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="links">
          <a href={`${github}`} target="_blank">
            <span>GitHub</span>
            <ArrowOutwardIcon />
          </a>
          {demo && (
            <a href={`${demo}`} target="_blank">
              <span>Demo</span>
              <ArrowOutwardIcon />
            </a>
          )}
        </div>
        <div>
          <div className="skills">
            {skills.map((skill, i) => (
              <span className="skill" key={i}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
