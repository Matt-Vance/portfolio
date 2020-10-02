import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

interface ProjectProps {
  location: {
    pathname: string;
  };
}

function About({ location }: ProjectProps) {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "IMG_5454.JPG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout location={location}>
      <div className="about-container">
        <div className="profile-image">
          <Img fixed={data['aboutImage'].childImageSharp.fixed} />
        </div>
        <p>
          I am a 27 year old manufacturing engineer from Southern California.
          For the past 3+ years I have been learning Web Development as a hobby
          through FreeCodeCamp, Youtube, Medium articles, you name it. I have
          created some projects on my own and through the collaborative group
          Project Unicorn -- my goal at the moment is to find a remote
          freelance/part time job where I can contribute to a project alongside
          other dedicated developers.
        </p>
        <p>
          Outside of coding, I enjoy playing the guitar, basketball, and relaxing with my wife, daughter, and dog.
        </p>
      </div>
    </Layout>
  );
}

export default About;
