import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";



const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
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
            letterSpacing: "4px"
          }}
        >
          <span style={{ fontSize: "24px" }}>M</span>ATT{" "}
          <span style={{ fontSize: "24px" }}>V</span>ANCE
        </Link>
      </h1>
    </div>
    
  </div>
);

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
        title="Gatsby Default Starter"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
