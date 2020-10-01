import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface ProjectSpecificProps {
  description: string;
  img: string;
  color: string;
}

function ProjectSpecific({
  description,
  img,
  color
}: ProjectSpecificProps) {
  const data = useStaticQuery(graphql`
    query {
      geornalSignup: file(relativePath: { eq: "Geornal_Landing.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      geornalPersonal: file(relativePath: { eq: "Geornal_AddCities.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      geornalFriends: file(relativePath: { eq: "Geornal_Friends.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptophanPrice: file(relativePath: { eq: "Cryptophan_PriceTracker.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptophanATH: file(relativePath: { eq: "Cryptophan_ATH.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptophanWeekly: file(relativePath: { eq: "Cryptophan_Weekly.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tasklist: file(relativePath: { eq: "Todo_Tasks.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tasklistEdit: file(relativePath: { eq: "Todo_Tasks_Edit.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 320, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mamallamamain: file(relativePath: { eq: "Mamallamadoula.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mamallamaservices: file(relativePath: { eq: "Mamallamadoula_Services.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mamallamafaq: file(relativePath: { eq: "Mamallamadoula_FAQ.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pomodoro: file(relativePath: { eq: "Pomodoro.PNG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 260, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="project-container">
      <div className="project-display-container" style={{ background: color }}>
        <Img fixed={data[img].childImageSharp.fixed} />
      </div>
      <div className="project-info-container">
        <span></span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ProjectSpecific;
