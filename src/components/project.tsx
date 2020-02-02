import * as React from "react";
import Link from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  color: string;
}

function Project({ name, description, img, color }: ProjectProps) {
  const data = useStaticQuery(graphql`
    query {
      geornal: file(relativePath: { eq: "Geornal.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptophan: file(relativePath: { eq: "CryptoPhan.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mamallamadoula: file(relativePath: { eq: "Mamallamadoula.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link to={"/projects-" + name.toLowerCase() + "/"}>
      <div className="project-container">
        <div
          className="project-display-container"
          style={{ background: color }}
        >
          <Img fixed={data[img].childImageSharp.fixed} />
        </div>
        <div className="project-info-container">
          <span>{name}</span>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
}

export default Project;

