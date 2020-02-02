import * as React from "react";
import { useState } from "react";

import Project from "../components/project";
import Timeline from "../components/timeline";
import Layout from "../components/layout";
import ReactIcon from "../icons/ReactIcon";
import NodeJsIcon from "../icons/NodeJsIcon";
import GraphQlIcon from "../icons/GraphQlIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import PostgresqlIcon from "../icons/PostgreSqlIcon";

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

interface IconIndex {
  index: number
}

const Index = ({ data }: IndexPageProps) => {
  const [iconsActive, handleIconsActive] = useState([1, 1, 1, 1, 1, 1]);
  console.log(iconsActive);
  function iconClicked(iconIndex: IconIndex) {
    console.log(iconIndex);
    let newIconsActive = [...iconsActive];
    newIconsActive[iconIndex.index] = !newIconsActive[iconIndex.index];
    handleIconsActive(newIconsActive);
  }


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
        <div className="project-language-container">
          <span onClick={() => iconClicked({index: 0})}>
            <JavascriptIcon />
          </span>
          <span>
            <ReactIcon />
          </span>
          <span>
            <TypescriptIcon />
          </span>
          <span>
            <NodeJsIcon />
          </span>
          <span>
            <GraphQlIcon />
          </span>
          <span>
            <PostgresqlIcon />
          </span>
        </div>
        <div className="project-timeline-container">
          <Timeline year={2019} />
          <div className="timeline-projects">
            <Project
              name="GEORNAL"
              description="travel tracking web-app"
              img="geornal"
              color="#E7EAEE"
            />
          </div>
          <Timeline year={2018} />
          <div className="timeline-projects">
            <Project
              name="CRYPTOPHAN"
              description="cryptocurrency tracker"
              img="cryptophan"
              color="#CFDCE8"
            />
            <Project
              name="MAMA LLAMA DOULA"
              description="doula business website"
              img="mamallamadoula"
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
