import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface ProjectSpecificProps {
  description: string;
  img: string;
  color: string;
}

function ProjectSpecific({ description, img, color }: ProjectSpecificProps) {
  const data = useStaticQuery(graphql`
    query {
      geornalSignup: file(relativePath: { eq: "Geornal_Landing.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geornalPersonal: file(relativePath: { eq: "Geornal_AddCities.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geornalFriends: file(relativePath: { eq: "Geornal_Friends.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cryptophanPrice: file(
        relativePath: { eq: "Cryptophan_PriceTracker.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cryptophanATH: file(relativePath: { eq: "Cryptophan_ATH.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cryptophanWeekly: file(relativePath: { eq: "Cryptophan_Weekly.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tasklist: file(relativePath: { eq: "Todo_Tasks.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tasklistEdit: file(relativePath: { eq: "Todo_Tasks_Edit.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mamallamamain: file(relativePath: { eq: "Mamallamadoula.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mamallamaservices: file(
        relativePath: { eq: "Mamallamadoula_Services.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mamallamafaq: file(relativePath: { eq: "Mamallamadoula_FAQ.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 2800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="project-container">
      <div className="project-display-container" style={{ background: color }}>
        <span>
          <Img fluid={data[img].childImageSharp.fluid} />
        </span>
      </div>
      <div className="project-info-container">
        <span></span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ProjectSpecific;
