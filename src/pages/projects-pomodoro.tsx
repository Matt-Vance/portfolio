import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";

const PomodoroPage = () => (
  <Layout location={null}>
    <div className="project-specific-container">
      <div className="project-info-container">
        <span>
          POMODORO<span className="year-line"></span>
        </span>
        <span>digital timer</span>
        <p>
          Adjustable pomodoro timer with a countdown clock as well as a
          countdown fill. Made as part of the FreeCodeCamp challenges.
        </p>
        <p>
          This was my first project using Javascript and it was a good
          introduction to input change logic. I wanted a modern looking pomodoro
          timer with bold colors and large text.
        </p>
        <span className = 'goto-website'>
          <a href="https://geornal.herokuapp.com">Go to Website</a>
        </span>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
      </div>
      <div className = 'project-challenges-container'>
        <span>EXPERIENCE GAINED</span>
        <ul>
          <li>First site with JS</li>
          <li>Working with time</li>
        </ul>
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="pomodoro timer set to 25 minutes"
          img="pomodoro"
          color="#fce7e3"
        />
      </div>
    </div>
  </Layout>
);

export default PomodoroPage;
