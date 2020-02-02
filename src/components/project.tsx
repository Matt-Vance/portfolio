import * as React from "react";
import Link from "gatsby-link";

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  color: string;
}

const Project = ({ name, description, img, color }: ProjectProps) => (
  <Link to="/page-2/">
    <div className="project-container">
      <div className="project-display-container" style={{ background: color }}>
        <img src={img} alt={name}></img>
      </div>
      <div className="project-info-container">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  </Link>
);

export default Project;
