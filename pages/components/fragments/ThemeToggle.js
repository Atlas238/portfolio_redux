import React from "react";

import Icon from "../fragments/Icon";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="themeIcons">
      {theme === "light" ? (
        <div className="sun" onClick={() => setTheme("dark")}>
          <Icon icon="sun" />
        </div>
      ) : (
        // <div className="sun" onClick={() => setTheme("dark")}>
        //   <Icon icon="sun" />
        // </div>
        <div className="moon" onClick={() => setTheme("light")}>
          <Icon icon="moon" />
        </div>
      )}
    </div>
  );
}
