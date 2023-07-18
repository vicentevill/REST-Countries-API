import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [themeText, setThemeText] = useState("Light Mode");
  const [themeIcon, setThemeIcon] = useState("/lightmode.svg");

  const handleThemeChange = () => {
    const root = document.documentElement;
    if (theme === "dark") {
      setTheme("light");
      root.style.setProperty("--dark-grey", "#fafbfb");
      root.style.setProperty("--grey", "white");
      root.style.setProperty("--white", "unset");
      root.style.setProperty("--filter-white", "unset");
      setThemeText("Dark Mode");
      setThemeIcon("/darkmode.svg");
    } else {
      setTheme("dark");
      root.style.setProperty("--dark-grey", "#202d36");
      root.style.setProperty("--grey", "#2b3743");
      root.style.setProperty("--white", "white");
      root.style.setProperty(
        "--filter-white",
        "brightness(0) saturate(100%) invert(100%) sepia(11%) saturate(7487%) hue-rotate(169deg) brightness(120%) contrast(101%)"
      );
      setThemeText("Light Mode");
      setThemeIcon("/lightmode.svg");
    }
  };

  return (
    <nav className="Nav">
      <Link className="Nav__home" to={"/"}>
        Where in the world?
      </Link>
      <button className="Nav__dark-mode" onClick={handleThemeChange}>
        <img className="Nav__dark-mode-icon" src={themeIcon} alt="theme" />
        {themeText}
      </button>
    </nav>
  );
}
