import wildOasis from "/public/img/wild-oasis.png";
import pizza from "/public/img/pizza.png";
import ecommerce from "/public/img/e-commerce.png";
import omnifood from "/public/img/omni.png";
import realstate from "/public/img/realstate.png";
import appei from "/public/img/appei.png";
import fesco from "/public/img/dessert.png";

export const projectsList = [
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
      "Responsive Design",
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
      "Responsive Design",
    ],
    img: pizza,
    github: "https://github.com/MahmoudAidia/fast-react-pizza",
    demo: "https://65be2dc92332c085e304b867--warm-ganache-1a5df0.netlify.app/",
  },

  {
    title: "Realstate Landing Page",
    desc: "A simple landing page for a RealState company.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design"],
    img: realstate,
    github: "https://github.com/MahmoudAidia/Realstate",
    demo: "https://delicate-medovik-39891e.netlify.app/",
  },
  {
    title: "Omnifood Landing Page",
    desc: "A simple landing page for a restaurant.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    img: omnifood,
    github:
      "https://github.com/MahmoudAidia/HTML_CSS_Projects/tree/main/01-Omnifood_Project",
    demo: "https://mahmoudaidaomnifood.netlify.app/",
  },
  {
    title: "Fesco Landing Page",
    desc: "A simple landing page for a restaurant.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design"],
    img: fesco,
    github: "https://github.com/MahmoudAidia/React_Fesco_Restaurant",
    demo: "https://react-fesco-restaurant-l6fsksgba-mahmoud-aidias-projects.vercel.app/",
  },
  {
    title: "Appei Landing page",
    desc: "A beautiful UI design for a landing page.",
    skills: ["HTML", "CSS", "Responsive Design"],
    img: appei,
    github: "https://github.com/MahmoudAidia/Appei_MahmoudAidia",
    demo: "https://appeimahmoudaidia.netlify.app/",
  },
];
