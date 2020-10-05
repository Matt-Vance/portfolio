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
      portfolio: file(relativePath: { eq: "Portfolio_Main.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geornal: file(relativePath: { eq: "Geornal.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cryptophan: file(relativePath: { eq: "CryptoPhan.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mamallamadoula: file(relativePath: { eq: "Mamallamadoula.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tasklist: file(relativePath: { eq: "Todo_Tasks.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, maxHeight: 1450, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Link
      to={
        "/projects-" +
        name
          .toLowerCase()
          .split(" ")
          .join("") +
        "/"
      }
    >
      <div className="project-container">
        <div
          className="project-display-container"
          style={{ background: color }}
        >
          <span>
            <Img fluid={data[img].childImageSharp.fluid} />
          </span>
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
