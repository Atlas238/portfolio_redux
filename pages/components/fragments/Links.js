import React from "react";

import Icon from "./Icon";

export default function Links() {
  return (
    <div className="links">
      <ul style={{ listStyle: "none" }}>
        <li>
          <a href="https://www.github.com/Atlas238">
            <Icon icon={["fab", "github"]} />
          </a>
          <a href="https://www.linkedin.com/in/jack-bentsen">
            <Icon icon={["fab", "linkedin"]} />
          </a>
          <a href="">
            <Icon icon={["fab", "facebook"]} />
          </a>
        </li>
      </ul>
    </div>
  );
}
