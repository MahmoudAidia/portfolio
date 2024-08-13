import Card from "./Card";
import "./Projects.scss";
import wildOasis from "/public/img/wild-oasis.png";
import pizza from "/public/img/pizza.png";
import ecommerce from "/public/img/e-commerce.png";

function Projects() {
  const projectsList = [
    {
      title: "Admin Dashboard",
      desc: "An admin dashboard, a SPA with a complete backend using Supabase to manage hotel check-in and checkout.",
      skills: [
        "React",
        "React Router-Dom",
        "React Query",
        "React hot toast",
        "Styled-components",
        "React hook forms",
        "Framer Motion",
      ],
      img: wildOasis,
      demo: "https://wild-oasis-react-app-three.vercel.app/login",
      github: "https://github.com/MahmoudAidia/wild-oasis-react-app",
    },
    {
      title: "E-commerce",
      desc: "An e-commerce web application with Strapi headless CMS for the backend.",
      skills: [
        "React",
        "React Router-Dom",
        "Axios",
        "Sass",
        "Redux",
        "Redux-Toolkit",
        "Strapi",
      ],
      github: "https://github.com/MahmoudAidia/E-commerce",
      img: ecommerce,
      demo: null,
    },
    {
      title: "Pizza orders",
      desc: "Piza ordering web app that fetches menu from an API allowing users to view the menu, add and remove orders from the cart, clear the cart, increase and decrease quantities, view the cart to get the total price then submit orders",
      skills: [
        "React",
        "React Router-Dom",
        "Axios",
        "Tailwind",
        "Redux",
        "Redux-Toolkit",
      ],
      img: pizza,
      github: "https://github.com/MahmoudAidia/fast-react-pizza",
      demo: "https://65be2dc92332c085e304b867--warm-ganache-1a5df0.netlify.app/",
    },
  ];
  return (
    <section className="projects" id="projects-sec">
      <div className="projects-heading">
        <h2>Featured Projects</h2>
        <p>
          Good design is obvious. Great design is transparent.
          <br /> Design is not for philosophy, it's for life.
        </p>
      </div>

      <div className="projects-flex">
        {projectsList.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
