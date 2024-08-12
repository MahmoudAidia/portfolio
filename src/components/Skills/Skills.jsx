import "./Skills.scss";

const tech = [
  {
    id: 1,
    name: "HTML",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
    ),
  },
  {
    id: 2,

    name: "CSS",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
    ),
  },
  {
    id: 3,

    name: "JavaScript",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    ),
  },
  {
    id: 4,

    name: "Reactjs",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    ),
  },
  {
    id: 5,

    name: "React Router",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
    ),
  },

  {
    id: 6,

    name: "Sass",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
    ),
  },
  {
    id: 7,

    name: "Redux",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
    ),
  },
  {
    id: 8,

    name: "Tailwind",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
    ),
  },
  {
    id: 9,
    name: "Git",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    ),
  },
  {
    id: 10,
    name: "GitHub",
    img: (
      <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" />
    ),
  },
  {
    id: 11,
    name: "FramerMotion",
    img: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" />
    ),
  },
];

function Skills() {
  return (
    <section className="tech">
      <div className="tech-container">
        <div className="technologies">
          {tech.map((item) => (
            <div className="tech-items" key={item.id}>
              <span>{item.name}</span>
              {item.img}
            </div>
          ))}
        </div>

        <div className="technologies">
          {tech.map((item) => (
            <div className="tech-items" key={item.id}>
              <span>{item.name}</span>
              {item.img}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
