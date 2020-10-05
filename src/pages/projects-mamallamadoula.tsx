import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";
import GithubIcon from "../icons/GithubIcon";
import DemoIcon from "../icons/DemoIcon";

interface ProjectProps {
  location: {
    pathname: string;
  };
}

const MamallamaPage = ({ location }: ProjectProps) => (
  <Layout location={location}>
    <div className="project-specific-container">
      <div className="project-info-container">
        <div className="project-title-container">
          <div className="project-title-sub">
            <span>
              MAMA LLAMA DOULA<span className="year-line"></span>
            </span>
            <span>doula business website</span>
          </div>
          <div className="project-title-icons">
            <GithubIcon
              link={"https://github.com/projectunic0rn/travel-map-ui"}
            />
            <DemoIcon link={"https://geornal.herokuapp.com"} />
          </div>
        </div>

        <p>
          This is one-page, static website for my wife's business. It explains
          the services offered, a little about the role of a doula, and gives
          contact information to potential clients.
        </p>
        <p>
          This app was my first try at responsiveness and is nearly entirely an
          HTML/CSS-only website. It tried to emphasize readabiilty and
          simplicity with big text and lots of white-space.
        </p>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
      </div>
      <div className="project-challenges-container">
        <span>EXPERIENCE GAINED</span>
        <ul>
          <li>Very basic JS</li>
          <li>First try at responsiveness</li>
          <li>Deployment of a website</li>
        </ul>
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="main landing screen"
          img="mamallamamain"
          color="#E6E2ED"
        />
        <ProjectSpecific
          description="services offered"
          img="mamallamaservices"
          color="#f5ebf5"
        />
        <ProjectSpecific
          description="faq section"
          img="mamallamafaq"
          color="#ebf5f5"
        />
      </div>
    </div>
  </Layout>
);

export default MamallamaPage;
