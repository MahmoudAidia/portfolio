import Card from "./Card";
import "./Projects.scss";
import { useState } from "react";
import FilterItem from "../../UI/FilterItem";
import { projectsList } from "../../data/data";

const filters = ["All", "HTML", "JavaScript", "React"];

function Projects() {
  const [filter, setFilter] = useState("All");
  console.log(filter);
  return (
    <section className="projects" id="projects-sec">
      <div className="projects-heading">
        <h2>Featured Projects</h2>
        <p>
          Good design is obvious. Great design is transparent.
          <br /> Design is not for philosophy, it's for life.
        </p>
      </div>
      <div className="filterContainer">
        <h3>Filter By</h3>
        <div className="filter">
          {filters.map((item, id) => (
            <FilterItem
              key={id}
              text={item}
              setFilter={setFilter}
              filter={filter}
            />
          ))}
        </div>
      </div>
      <div className="projects-flex">
        {projectsList
          .filter((item) => {
            if (filter === "All") return item;
            else if (filter === "HTML")
              return item.skills.find((skill) => skill === "HTML");
            else if (filter === "JavaScript")
              return item.skills.find((skill) => skill === "JavaScript");
            else if (filter === "React")
              return item.skills.find((skill) => skill === "React");
          })
          .map((item, i) => (
            <Card key={i} item={item} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
