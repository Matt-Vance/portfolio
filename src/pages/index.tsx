import * as React from "react";
import Link from "gatsby-link";

import Project from "../components/project";
import Timeline from "../components/timeline";
import Header from "../components/header";
import Layout from "../components/layout";

import "../layouts/index.css";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <div>
        <div
          className="index-tagline"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>
            designer <span>and</span>
          </span>
          <span>front-end developer</span>
          <span>
            <span>based in</span> southern california
          </span>
        </div>
        <div className="project-timeline-container">
          <Timeline year={2019} />
          <div className="timeline-projects">
            <Project
              name="GEORNAL"
              description="travel tracking web-app"
              img="../images/Geornal.PNG"
              color="#E7EAEE"
            />
          </div>
          <Timeline year={2018} />
          <div className="timeline-projects">
            <Project
              name="CRYPTOPHAN"
              description="cryptocurrency tracker"
              img=""
              color="#CFDCE8"
            />
            <Project
              name="MAMA LLAMA DOULA"
              description="doula business website"
              img=""
              color="#F3ECFA"
            />
          </div>
        </div>

        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
