import Card from "./Card";
import "./Projects.scss";

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
      img: "/public/img/The-Wild-Oasis-Co-.png",
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

      img: "/public/img/e-commerce.png",
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

      img: "/public/img/pizza.png",
    },
  ];
  return (
    <section className="projects">
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
