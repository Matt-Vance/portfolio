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

import "../layouts/index.scss";

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
  index: number;
}

const Index = ({ data }: IndexPageProps) => {
  const [iconsActive, handleIconsActive] = useState([
    true,
    true,
    true,
    true,
    true,
    true
  ]);
  function iconClicked(iconIndex: IconIndex) {
    if (iconsActive.indexOf(false) === -1) {
      let newIconsActive = [false, false, false, false, false, false];
      newIconsActive[iconIndex.index] = true;
      handleIconsActive(newIconsActive);
    } else {
      let newIconsActive = [...iconsActive];
      newIconsActive[iconIndex.index] = !newIconsActive[iconIndex.index];
      if (newIconsActive.indexOf(true) === -1) {
        newIconsActive = [true, true, true, true, true, true];
        handleIconsActive(newIconsActive);
      } else {
        handleIconsActive(newIconsActive);
      }
    }
  }

  return (
    <Layout>
      <div>
        <div
          className="index-tagline"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>
            junior designer <span>and</span>
          </span>
          <span>web developer</span>
          <span>
            <span>based in</span> southern california
          </span>
        </div>
        <div
          className="project-language-container"
          id="language-container-main"
        >
          <span
            onClick={() => iconClicked({ index: 0 })}
            style={{ opacity: iconsActive[0] ? 1 : 0.25 }}
          >
            <JavascriptIcon />
          </span>
          <span
            onClick={() => iconClicked({ index: 1 })}
            style={{ opacity: iconsActive[1] ? 1 : 0.25 }}
          >
            <ReactIcon />
          </span>
          <span
            onClick={() => iconClicked({ index: 2 })}
            style={{ opacity: iconsActive[2] ? 1 : 0.25 }}
          >
            <TypescriptIcon />
          </span>
          <span
            onClick={() => iconClicked({ index: 3 })}
            style={{ opacity: iconsActive[3] ? 1 : 0.25 }}
          >
            <NodeJsIcon />
          </span>
          <span
            onClick={() => iconClicked({ index: 4 })}
            style={{ opacity: iconsActive[4] ? 1 : 0.25 }}
          >
            <GraphQlIcon />
          </span>
          <label className="language-filter-label">Click to Filter</label>
        </div>
        <div className="project-timeline-container">
          <Timeline year={2020} />
          <div className="timeline-projects">
            {iconsActive[0] || iconsActive[1] || iconsActive[2] ? (
              <Project
                name="PORTFOLIO"
                description="this website"
                img="geornal"
                color="#E7EAEE"
              />
            ) : null}
          </div>
          <Timeline year={2019} />
          <div className="timeline-projects">
            {iconsActive[0] ||
            iconsActive[1] ||
            iconsActive[3] ||
            iconsActive[4] ||
            iconsActive[5] ? (
              <Project
                name="GEORNAL"
                description="travel tracking web-app"
                img="geornal"
                color="#E7EAEE"
              />
            ) : null}
          </div>
          <Timeline year={2018} />
          <div className="timeline-projects">
            {iconsActive[0] ? (
              <Project
                name="CRYPTOPHAN"
                description="cryptocurrency tracker"
                img="cryptophan"
                color="#CFDCE8"
              />
            ) : null}
            {iconsActive[0] || iconsActive[1] ? (
              <Project
                name="TO DO LIST"
                description="daily/weekly/monthly task list"
                img="tasklist"
                color="#F3ECFA"
              />
            ) : null}
            {iconsActive[0] ? (
              <Project
                name="MAMA LLAMA DOULA"
                description="doula business website"
                img="mamallamadoula"
                color="#f0e3d5"
              />
            ) : null}
          </div>
          <Timeline year={2017} />
          <div className="timeline-projects">
            {iconsActive[0] ? (
              <Project
                name="POMODORO"
                description="digital timer"
                img="pomodoro"
                color="#ced5f5"
              />
            ) : null}
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
