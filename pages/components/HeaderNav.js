import React from "react";
import Link from "next/link";
import Icon from "./fragments/Icon";

export default function HeaderNav({ theme, setView, view }) {
  return (
    <div className={`navbar ${theme}`}>
      <div className={`brand ${theme}`}>
        {theme === "light" ? <Icon icon="mug-hot" /> : <Icon icon="star" />}
        <h1>
          <Link
            href="https://www.github.com/Atlas238"
          >
            Jack Ryan Bentsen
          </Link>
        </h1>
      </div>
      <div className={`navlinks ${theme}`}>
        <ul>
            <li>
              <Link
                href="#work"
              >
                My Work
              </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
