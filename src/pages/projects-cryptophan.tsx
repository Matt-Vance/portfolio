import * as React from "react";

import Layout from "../components/layout";
import ProjectSpecific from "../components/projectSpecific";
import JavascriptIcon from "../icons/JavascriptIcon";
import GithubIcon from "../icons/GithubIcon";
import DemoIcon from "../icons/DemoIcon";
interface ProjectProps {
  location: {
    pathname: string
  }
}

const CryptophanPage = ({location}: ProjectProps) => (
  <Layout location={location}>
    <div className="project-specific-container">
      <div className="project-info-container">
        <div className="project-title-container">
          <div className="project-title-sub">
            <span>
            CRYPTOPHAN<span className="year-line"></span>
            </span>
            <span>cryptocurrency tracker</span>
          </div>
          <div className="project-title-icons">
            <GithubIcon link={"https://github.com/matt-vance/Cryptophan-JSOnly"}/>
            <DemoIcon link={"https://optimistic-noether-af9fdc.netlify.app/"} />
          </div>
        </div>
        <p>
          Cryptophan uses the cryptocompare api to track price history, all time
          high, weekly, and hourly patterns for cryptocurrencies. It provides an
          easy-to-use interface with a slider to choose how much data (from cryptocompare api) is
          displayed on a Plotly chart.
        </p>
        <p>
          Cryptophan is a project I created as my first javascript-based website
          to try to make an easy-to-use web application capable of showing
          cryptocurrency data 3+ years in the past. I also wanted to be able to
          compare a cryptocurrency's current price with its all-time-high data.
          This was my first attempt at using a graphing library in combination
          with an api
        </p>
      </div>
      <div className="project-language-container">
        <JavascriptIcon />
      </div>
      <div className = 'project-challenges-container'>
        <span>EXPERIENCE GAINED</span>
        <ul>
          <li>Working with graphing libraries</li>
          <li>Use of multiple currency/stock apis</li>
          <li>Dealing with dates</li>
        </ul>
      </div>
      <div className="timeline-container">
        <ProjectSpecific
          description="price tracking tool (candlestick chart)"
          img="cryptophanPrice"
          color="#E6E2ED"
        />
        <ProjectSpecific
          description="comparison against all-time-high price"
          img="cryptophanATH"
          color="#DAE4F4"
        />
        <ProjectSpecific
          description="confidence interval of % change by day of the week"
          img="cryptophanWeekly"
          color="#e7eaee"
        />
      </div>
    </div>
  </Layout>
);

export default CryptophanPage;
