import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((project) => {
        return (
          <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
        )
        })
      })
      </div>
    </div>
  );
}

export default ProjectList;