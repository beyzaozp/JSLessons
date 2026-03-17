const themeColor = ["warning", "danger", "secondary", "primary", "success"];
import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { setColor } = useContext(ThemeContext);
  return (
    <div className="container theme-selector">
      <div className="theme-links">
        {themeColor.map((color) => (
          <span
            key={color}
            onClick={() => setColor(color)}
            className={`bg-${color}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
