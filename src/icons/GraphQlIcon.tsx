import * as React from "react";
import { useState } from "react";

function GraphQlIcon() {
  const [hovered, handleHover] = useState(false);
  return (
    <>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="GraphQL_Logo"
    viewBox="0 0 400 400"
    version="1.1"
    enable-background="new 0 0 400 400"
    onMouseOver={() => handleHover(true)}
    onMouseOut={() => handleHover(false)}
  >
    <g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.866, -0.5, 0.5, -0.866, 163.32, 363.314)"
            x="122"
            y="-0.4"
            width="16.6"
            height="320.3"
          />
        </g>
      </g>
      <g>
        <g>
          <rect fill="#aec6cf" x="39.8" y="272.2" width="320.3" height="16.6" />
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.866, -0.5, 0.5, -0.866, 83.0693, 663.341)"
            x="37.9"
            y="312.2"
            width="185"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.866, -0.5, 0.5, -0.866, 463.341, 283.069)"
            x="177.1"
            y="71.1"
            width="185"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.5, -0.866, 0.866, -0.5, 126.79, 232.122)"
            x="122.1"
            y="-13"
            width="16.6"
            height="185"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.5, -0.866, 0.866, -0.5, 266.083, 473.377)"
            x="109.6"
            y="151.6"
            width="320.3"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <rect fill="#aec6cf" x="52.5" y="107.5" width="16.6" height="185" />
        </g>
      </g>
      <g>
        <g>
          <rect fill="#aec6cf" x="330.9" y="107.5" width="16.6" height="185" />
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="#aec6cf"
            transform="matrix(-0.5, -0.866, 0.866, -0.5, 126.795, 714.287)"
            x="262.4"
            y="240.1"
            width="14.5"
            height="160.9"
          />
        </g>
      </g>
      <path
        fill="#aec6cf"
        d="M 369.5 297.9 c -9.6 16.7 -31 22.4 -47.7 12.8 c -16.7 -9.6 -22.4 -31 -12.8 -47.7 c 9.6 -16.7 31 -22.4 47.7 -12.8 C 373.5 259.9 379.2 281.2 369.5 297.9"
      />
      <path
        fill="#aec6cf"
        d="M 90.9 137 c -9.6 16.7 -31 22.4 -47.7 12.8 c -16.7 -9.6 -22.4 -31 -12.8 -47.7 c 9.6 -16.7 31 -22.4 47.7 -12.8 C 94.8 99 100.5 120.3 90.9 137"
      />
      <path
        fill="#aec6cf"
        d="M 30.5 297.9 c -9.6 -16.7 -3.9 -38 12.8 -47.7 c 16.7 -9.6 38 -3.9 47.7 12.8 c 9.6 16.7 3.9 38 -12.8 47.7 C 61.4 320.3 40.1 314.6 30.5 297.9"
      />
      <path
        fill="#aec6cf"
        d="M 309.1 137 c -9.6 -16.7 -3.9 -38 12.8 -47.7 c 16.7 -9.6 38 -3.9 47.7 12.8 c 9.6 16.7 3.9 38 -12.8 47.7 C 340.1 159.4 318.7 153.7 309.1 137"
      />
      <path
        fill="#aec6cf"
        d="M 200 395.8 c -19.3 0 -34.9 -15.6 -34.9 -34.9 c 0 -19.3 15.6 -34.9 34.9 -34.9 c 19.3 0 34.9 15.6 34.9 34.9 C 234.9 380.1 219.3 395.8 200 395.8"
      />
      <path
        fill="#aec6cf"
        d="M 200 74 c -19.3 0 -34.9 -15.6 -34.9 -34.9 c 0 -19.3 15.6 -34.9 34.9 -34.9 c 19.3 0 34.9 15.6 34.9 34.9 C 234.9 58.4 219.3 74 200 74"
      />
    </g>
  </svg>
  {hovered ? <div className="language-title">GraphQL</div> : null}
    </>
  );
}

export default GraphQlIcon;
