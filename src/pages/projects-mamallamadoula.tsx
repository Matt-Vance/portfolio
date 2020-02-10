import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";

const MamallamaPage = () => (
  <Layout>
    <div className="project-specific-container">
      <div className="project-info-container">
        <span>
          MAMA LLAMA DOULA<span className="year-line"></span>
        </span>
        <span>doula business website</span>
        <p>
          This is one-page, static website for a local doula business. It
          explains the services offered, a little about the role of a doula, and
          gives contact information to potential clients.
        </p>
        <p>
          This app was my first try at responsiveness and is nearly entirely an
          HTML/CSS-only website. It tried to emphasize readabiilty and
          simplicity with big text and lots of white-space.
        </p>
        <span>
          <a href="https://geornal.herokuapp.com">Go to Website</a>
        </span>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
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
