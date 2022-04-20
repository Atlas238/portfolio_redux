import React from "react";

export default function Greeting({ theme }) {
  return (
    <div className={`greeting ${theme}`}>
      <h3>Hi! My name is Jack and I am a Full Stack Web Developer.</h3>
      <p>
        A recent graduate of The University of Washington Full-Stack Coding
        Bootcamp program, looking to learn with a focus in React. I am currently enrolled
        in the Seattle U Computer Science Fundamentals Certificate course with the intention
        of continuing on to complete my masters. Feel free to reach out if there's something
        you'd like to work on together!
      </p>
    </div>
  );
}
