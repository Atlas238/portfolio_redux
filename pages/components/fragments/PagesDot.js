import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PagesDot({ page }) {
  return (
    <>
      {page === 0 ? (
        <div className="dots">
          <FontAwesomeIcon icon={["fas", "circle"]} />
          <FontAwesomeIcon icon={["fas", "circle"]} />
        </div>
      ) : page === 1 ? (
        <div className="dots">
          <FontAwesomeIcon
            icon={["fas", "circle"]}
            style={{ opacity: 1, fontSize: "1rem" }}
          />
          <FontAwesomeIcon icon={["fas", "circle"]} />
        </div>
      ) : page === 2 ? (
        <div className="dots">
          <FontAwesomeIcon icon={["fas", "circle"]} />
          <FontAwesomeIcon
            icon={["fas", "circle"]}
            style={{ opacity: 1, fontSize: "1rem" }}
          />
        </div>
      ) : null}
    </>
  );
}
