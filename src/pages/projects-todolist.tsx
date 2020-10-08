import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";
import ReactIcon from "../icons/ReactIcon";
import GithubIcon from "../icons/GithubIcon";
import DemoIcon from "../icons/DemoIcon";

interface ProjectProps {
  location: {
    pathname: string;
  };
}

const TodolistPage = ({ location }: ProjectProps) => (
  <Layout location={location}>
    <div className="project-specific-container">
      <div className="project-info-container">
        <div className="project-title-container">
          <div className="project-title-sub">
            <span>
              TO DO LIST<span className="year-line"></span>
            </span>
            <span>daily/weekly/monthly task list</span>
          </div>
          <div className="project-title-icons">
            <GithubIcon link={"https://github.com/mvance43776/todo-list-app"} />
            <DemoIcon link={"https://objective-hodgkin-95dbf3.netlify.app"} />
          </div>
        </div>
        <p>
          This to do list is for recurring tasks and was made as a concept and
          learning project only. Tasks can be added/deleted as well as
          "completed" but as there is no backend, nothing will be saved.
        </p>
        <p>
          The to do list was my first try at React and was made using
          create-react-app. The goal was to make a modern looking, fairly
          minimal to do list which would let me focus on front-end elements of a
          basic web app like working with dates, nav menus, and state/props of
          components.
        </p>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
        <ReactIcon />
      </div>
      <div className="project-challenges-container">
        <span>EXPERIENCE GAINED</span>
        <ul>
          <li>Introduction to React</li>
          <li>More responsiveness practice</li>
        </ul>
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="to do list showing three time frames"
          img="tasklist"
          color="#E6E2ED"
        />
        <ProjectSpecific
          description="edit tasks view"
          img="tasklistEdit"
          color="#e2e2e2"
        />
      </div>
    </div>
  </Layout>
);

export default TodolistPage;
