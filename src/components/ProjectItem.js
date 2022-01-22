import React from "react";
import ProjectList from "./ProjectList";
import user from "../data/user"

function ProjectItem({ name, about, technologies }) {
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
      </div>
    </div>
  );
}

export default ProjectItem;
