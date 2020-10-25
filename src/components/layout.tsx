import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../layouts/index.scss";

import favicon from "../images/favicon.png";
import GithubIcon from "../icons/GithubIcon";

function Header() {
  const data = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Vance_Resume_Programming" }) {
        name
        extension
        publicURL
      }
    }
  `);
  const [hamburgerActive, handleHamburgerClick] = useState(false);
  return (
    <div
      className="header"
      style={{
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "10px 0 20px 0",
          textAlign: "center",
        }}
      >
        <div className="header-github">
          <GithubIcon link={"https://github.com/matt-vance"} />
        </div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "rgb(94, 109, 110)",
              textDecoration: "none",
              borderBottom: "2px solid #BFBFBF",
              paddingBottom: "8px",
              fontSize: "20px",
              fontFamily: "Segoe UI, sans-serif",
              letterSpacing: "4px",
            }}
          >
            <span style={{ fontSize: "24px" }}>M</span>ATT{" "}
            <span style={{ fontSize: "24px" }}>V</span>ANCE
          </Link>
        </h1>
      </div>
      <div
        className={hamburgerActive ? "ham active" : "ham"}
        onClick={() => handleHamburgerClick(!hamburgerActive)}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={hamburgerActive ? "nav-menu" : "nav-menu hide"}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <a href={data.pdf.publicURL} target="_blank">
          resume
        </a>
      </div>
    </div>
  );
}

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

const DefaultLayout = ({ location, children }: DefaultLayoutProps) => {
  return (
    <div>
      <Helmet
        title="Portfolio"
        meta={[
          {
            name: "description",
            content:
              "My developer portfolio with projects showcasing current and previous skill levels",
          },
          {
            name: "keywords",
            content: "portfolio, react, developer, gatsby, graphql, mapbox",
          },
        ]}
      >
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <div
        className="main"
        role="main"
        style={{
          maxWidth: 960,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
