import React from "react";

export default function Greeting({ theme }) {
  return (
    <div className={`greeting ${theme}`}>
      <h3>Hi! My name is Jack and I am a Full Stack Web Developer.</h3>
      <p>
        A recent graduate of The University of Washington Full-Stack Coding
        Bootcamp program, looking to learn with a focus in React.
      </p>
    </div>
  );
}
