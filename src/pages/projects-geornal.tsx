import * as React from "react";
import Link from "gatsby-link";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import ReactIcon from "../icons/ReactIcon";
import NodeJsIcon from "../icons/NodeJsIcon";
import GraphQlIcon from "../icons/GraphQlIcon";

const GeornalPage = () => (
  <Layout>
    <div className="project-specific-container">
      <div className="project-info-container">
        <span>
          GEORNAL<span className="year-line"></span>
        </span>
        <span>travel tracking web-app</span>
        <p>
          Geornal is a map-based website which allows users to showcase cities
          they have been or will travel to on an interactive map and record
          memories (reviews) of the specific things they have done in their
          travels. The main goal of the project is to provide a resource which
          will help guide people's trips by letting them learn from the
          experiences and reviews of people they actually know.
        </p>
        <p>
          Geornal was an idea my wife and I had to try to improve our trip
          planning process. It is still in "beta" and was built with a couple of
          people on the online coding group "Project Unicorn"
        </p>
        <span>
          <a href="https://geornal.herokuapp.com">Go to Website</a>
        </span>
      </div>
      <div className="project-language-container">
        <ReactIcon />
        <NodeJsIcon />
        <GraphQlIcon />
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="login/sign-up screen with tutorials"
          img="geornalSignup"
          color="#E7EAEE"
        />
        <ProjectSpecific
          description="adding countries/cities via popup"
          img="geornalPersonal"
          color="#DAE4F4"
        />
        <ProjectSpecific
          description="shows cities of all friends"
          img="geornalFriends"
          color="#E6E2ED"
        />
      </div>
    </div>
  </Layout>
);

export default GeornalPage;
