const themeColor = ["warning", "danger", "secondary", "primary", "success"];
import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  function toggleMode() {
    changeMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={toggleMode}
        />
      </div>
      <div className="theme-links">
        {themeColor.map((color) => (
          <span
            key={color}
            onClick={() => changeColor(color)}
            className={`bg-${color}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
