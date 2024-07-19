"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PROJECTS from "../../data/projects";
function Projects() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = Array.isArray(PROJECTS)  ? [...new Set(PROJECTS.flatMap((PROJECT) => PROJECT.category || []))] : [];


  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => 
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((selected) => selected !== category)
        : [...prevSelectedCategories, category]
    );
  };
const filteredProjects = Array.isArray(selectedCategories) && selectedCategories.length === 0
    ? PROJECTS || [] // Ensure PROJECTS is an array or use an empty array
    : PROJECTS?.filter((project) =>
        selectedCategories.every((categoryOn) =>
          project.category?.includes(categoryOn)
        )
      );

  return (
    <div>
      <h2>Projects</h2>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={
              selectedCategories.includes(category)
                ? "selectedProjects"
                : "projects"
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {filteredProjects.map((PROJECT) => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))}
      </div>
    </div>
  );
}

const Project = (props) => {
  const { title, description, link, image } = props.project;
  const [isShowen, setIsShowen] = useState(false);

  useEffect(() => {
    setIsShowen(true);
  }, []);
  return (
    <div className={`card ${isShowen ? "show" : ""}`}>
      <Image src={image} alt="project image" layout="responsive" width={700} height={475} />
      <h3 style={{ fontSize: 20, color: "grey" }}>{title}</h3>
      <p style={{ fontSize: 17, padding: 4 }}>{description}</p>
      <button onClick={() => window.open(link, "_blank")}>View Project</button>
    </div>
  );
};

export default Projects;
