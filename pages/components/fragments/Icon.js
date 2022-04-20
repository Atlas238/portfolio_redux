import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Icon({ icon }) {
  return (
    <div style={{ padding: 5 }}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
