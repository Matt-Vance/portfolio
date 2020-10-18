import * as React from "react";
import Link from "gatsby-link";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import ReactIcon from "../icons/ReactIcon";
import NodeJsIcon from "../icons/NodeJsIcon";
import GraphQlIcon from "../icons/GraphQlIcon";
import GithubIcon from "../icons/GithubIcon";
import DemoIcon from "../icons/DemoIcon";

interface ProjectProps {
  location: {
    pathname: string;
  };
}

const PortfolioPage = ({ location }: ProjectProps) => (
  <Layout location={location}>
    <div className="project-specific-container">
      <div className="project-info-container">
        <div className="project-title-container">
          <div className="project-title-sub">
            <span>
              PORTFOLIO<span className="year-line"></span>
            </span>
            <span>personal project gallery</span>
          </div>
        </div>
        <p>
          The goal of this portfolio is to showcase my previous work and give
          insight into who I am as both a developer and person. It should be
          easy to work with and navigate, responsive and flexible with all user
          requests, and should get up to speed (load) quickly.
        </p>
        <p>
          I wanted to use the portfolio as an opportunity to try out Gatsby and
          make a simple, minimalist design with soft edges and colors while emphasizing
          a gallery of images.
        </p>
      </div>
      <div className="project-language-container">
        <span>
          <ReactIcon />
        </span>
        <span>
          <NodeJsIcon />
        </span>
        <span>
          <GraphQlIcon />
        </span>
      </div>
      <div className="project-challenges-container">
        <span>EXPERIENCE GAINED</span>
        <ul>
          <li>Working with Gatsby</li>
          <li>Introduction to TypeScript</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default PortfolioPage;
