import React, { useRef, useEffect, useState } from "react";
import PagesDot from "./PagesDot";

import TimelineCard from "./TimelineCard";

const pageOne = [
  {
    title: "Swim Instructor + Summer Team Coach",
    desc: "Entered into the working world as a swim coach and personal instructor for a neighborhood club.",
    dates: {
      start: "5/2015",
      end: "8/2015",
    },
  },
  {
    title: "Marketing Intern - I.M.P.",
    desc: "Worked part time as a marketing intern for one of the largest music venue operators in Washington D.C.",
    dates: {
      start: "5/2017",
      end: "8/2017",
    },
  },
  {
    title: "Founder - Bencoolen",
    desc: "Helped to found and manage a full-time music group, Formed an LLC and assisted with general management.",
    dates: {
      start: "5/2015",
      end: "12/2019",
    },
  },
];
const pageTwo = [
  {
    title: "Research Assistant - Eastside Research Associates",
    desc: "Aided ERA in the conduct of multiple covid related studies being run through Evergreen Hospital's Emergency Department",
    dates: {
      start: "3/2020",
      end: "5/2020",
    },
  },
  {
    title: "Barista - Woods Coffee",
    desc: "Worked as a barista following the conclusion of the previously mentioned studies.",
    dates: {
      start: "6/2020",
      end: "4/2021",
    },
  },
  {
    title: "Student - University of Washington: Full-Stack Coding Bootcamp",
    desc: "Enrolled in UW Coding Bootcamp to pivot career search and focus on tech, leveraging my past experience",
    dates: {
      start: "7/2021",
      end: "9/2021",
    },
  },
];

export default function Timeline({ theme, page, setPage }) {
  const ref = useRef();

  return (
    <div className={`timeline-container ${theme}`}>
      <h5 id={"timeline"}>My Timeline</h5>
      <a href="#top" className={`topbtn ${theme}`}>
        To Top
      </a>
      <div className={`timeline-featured ${theme}`}>
        <PagesDot page={page} />
        <div ref={ref} className="timeline-featured-cards">
          {page === 1 ? (
            <div className={`year-active`}>
              <TimelineCard theme={theme} timelineItem={pageOne[0]} num={0} />
              <TimelineCard theme={theme} timelineItem={pageOne[1]} num={1} />
              <TimelineCard theme={theme} timelineItem={pageOne[2]} num={2} />
              <svg
                className="squiqly-1"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 0 0 c 180 100 -40 140 160 240"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
              <svg
                className="squiqly-2"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 160 15 c -60 30 -40 220 -150 230"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
            </div>
          ) : (
            <div className={`year-inactive`}>
              <TimelineCard theme={theme} timelineItem={pageOne[0]} num={0} />
              <TimelineCard theme={theme} timelineItem={pageOne[1]} num={1} />
              <TimelineCard theme={theme} timelineItem={pageOne[2]} num={2} />
              <svg
                className="squiqly-1"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 0 0 c 180 100 -40 140 160 240"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
              <svg
                className="squiqly-2"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 160 15 c -60 30 -40 220 -150 230"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
            </div>
          )}

          {page === 2 ? (
            <div className={`year-active`}>
              <TimelineCard theme={theme} timelineItem={pageTwo[0]} num={0} />
              <TimelineCard theme={theme} timelineItem={pageTwo[1]} num={1} />
              <TimelineCard theme={theme} timelineItem={pageTwo[2]} num={2} />
              <svg
                className="squiqly-1"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 0 0 c 180 100 -40 140 160 240"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
              <svg
                className="squiqly-2"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 160 15 c -60 30 -40 220 -150 230"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
            </div>
          ) : (
            <div className={`year-inactive`}>
              <TimelineCard theme={theme} timelineItem={pageTwo[0]} num={0} />
              <TimelineCard theme={theme} timelineItem={pageTwo[1]} num={1} />
              <TimelineCard theme={theme} timelineItem={pageTwo[2]} num={2} />
              <svg
                className="squiqly-1"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 0 0 c 180 100 -40 140 160 240"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
              <svg
                className="squiqly-2"
                height={500}
                width={500}
                strokeWidth={5}
                fillOpacity={0}
              >
                <path
                  d={"m 160 15 c -60 30 -40 220 -150 230"}
                  stroke={theme === "light" ? "black" : "whitesmoke"}
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
