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
      aboutImg: file(relativePath: { eq: "IMG_5454.JPG" }) {
        childImageSharp {
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
          <Img fixed={data["aboutImg"].childImageSharp.fixed} />
        </div>
        <h3>hello</h3>
        <p>
          When I was younger I always said that I wanted to be an architect. I
          didn't end up pursuing it when I realized that my house drawing skills
          peaked in Kindergarten but, in looking back, the reason I was drawn to
          that career is that you get to dream something up, plan it out, and
          then go forth and make it happen until you have something long-lasting
          to show for it.
        </p>
        <p>
          It is this same set of motivating factors that has led me to web
          development -- it offers a unique opportunity to express creativity
          and flair through designing a webpage while also requiring clever
          problem solving solutions to logic puzzles. It allows me to fulfill my
          need to build things with the only real costs being time and energy.
        </p>
        <p>
          Outside of coding, you can find me playing basketball, relaxing with
          my wife, daughter, and dog, and playing the electric guitar on
          YouTube.
        </p>
      </div>
    </Layout>
  );
}

export default About;
