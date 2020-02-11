import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";
import ReactIcon from "../icons/ReactIcon";

const TodolistPage = () => (
  <Layout>
    <div className="project-specific-container">
      <div className="project-info-container">
        <span>
          TO DO LIST<span className="year-line"></span>
        </span>
        <span>daily/weekly/monthly task list</span>
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
        <span className = 'goto-website'>
          <a href="https://geornal.herokuapp.com">Go to Website</a>
        </span>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
        <ReactIcon />
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="to do list showing three time frames"
          img="tasklist"
          color="#E6E2ED"
        />
      </div>
    </div>
  </Layout>
);

export default TodolistPage;
