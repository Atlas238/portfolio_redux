import React from "react";
import Icon from "./fragments/Icon";

export default function Footer() {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
      }}
    >
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
  );
}
