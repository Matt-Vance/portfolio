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
        childImageSharp {          fixed(width: 1200, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptophan: file(relativePath: { eq: "CryptoPhan.PNG" }) {
        childImageSharp {
          fixed(width: 1200, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mamallamadoula: file(relativePath: { eq: "Mamallamadoula.PNG" }) {
        childImageSharp {
          fixed(width: 740, height: 370){
            ...GatsbyImageSharpFixed
          }
        }
      }
      tasklist: file(relativePath: { eq: "Todo_Tasks.PNG" }) {
        childImageSharp {
          fixed(width: 1200, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pomodoro: file(relativePath: { eq: "Pomodoro.PNG" }) {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link to={"/projects-" + name.toLowerCase().split(' ').join('') + "/"}>
      <div className="project-container">
        <div
          className="project-display-container"
          style={{ background: color }}
        >
          <span>
            <Img fixed={data[img].childImageSharp.fixed} />
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
