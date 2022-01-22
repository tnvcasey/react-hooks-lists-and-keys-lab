import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a href="#home" key="home">{links[0]}</a>
      <a href="#about" key="about">{links[1]}</a>
      <a href="#projects" key="projects">{links[2]}</a>
    </nav>)
}

export default NavBar;
