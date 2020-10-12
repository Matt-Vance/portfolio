import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import LocationIcon from '../icons/LocationIcon';
import BirthdayIcon from '../icons/BirthdayIcon';
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
        <div className = 'about-basics-container'>
         <span><LocationIcon /> Temecula, CA</span> 
         <span><BirthdayIcon /> 27</span> 
        </div>
        <p>
          For the past 3+ years I have been learning Web Development as a hobby
          through FreeCodeCamp, Youtube, Medium articles, you name it. I have
          created some projects on my own and through the collaborative group
          Project Unicorn -- my goal at the moment is to find a job where I can contribute to a project alongside
          other dedicated developers.
        </p>
        <p>
          When I was younger I always said that I wanted to be an architect. I didn't end up pursuing it when I realized that my house
          drawing skills peaked in Kindergarten but in looking back the reasons I was drawn to that career is that you get to dream something up, 
          plan it out, and then go forth and make it happen until you have something physical and long-lasting to show for it.
          It is this same set of motivating factors that has led me to enjoy web development -- it offers a unique opportunity 
          to express creativity and flair through designing a webpage while also requiring clever problem solving solutions to logic
          puzzles. It allows me to fulfill my need to build things with the only real costs being time and energy. 
        </p>
        <p>
          Outside of coding, I enjoy playing the electric guitar, basketball, and relaxing with my wife, daughter, and dog.
        </p>
      </div>
    </Layout>
  );
}

export default About;
