import React from "react";

export default function TimelineCard({ theme, timelineItem, num }) {
  return (
    <div className={`timeline-card card-${num} ${theme}`}>
      <div className={`timeline-card-header ${theme}`}>
        <h4>{timelineItem.title}</h4>
      </div>
      <div className={`timeline-card-body ${theme}`}>
        <p>{timelineItem.desc}</p>
      </div>
      <div className={`timeline-card-dates ${theme}`}>
        {timelineItem.dates.start && timelineItem.dates.end ? (
          <ul>
            <li>From {timelineItem.dates.start}</li>
            <li>To {timelineItem.dates.end}</li>
          </ul>
        ) : (
          <ul>
            <li>{timelineItem.dates.start}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
