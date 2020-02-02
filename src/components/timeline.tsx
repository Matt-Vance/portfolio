import * as React from "react";
import Link from "gatsby-link";

interface TimelineProps {
  year: number;
}

const Timeline = ({ year }: TimelineProps) => (
  <div className="timeline-year-line">
    <span className="year-line year-line-left"></span>
    <span className="year">{year}</span>
    <span className="year-line year-line-right"></span>
  </div>
);

export default Timeline;
