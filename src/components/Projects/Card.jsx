import "./Card.scss";
function Card({ item }) {
  console.log(item);
  const { title, skills, desc, img } = item;
  // console.log(skills);
  return (
    <div className="card">
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="text">
        <h4>{title}</h4>
        <p>{desc}</p>
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
