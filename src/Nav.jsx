import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <Link className="Nav__home" to={"/"}>
        Where in the world?
      </Link>
      <button className="Nav__dark-mode">
        <img
          className="Nav__dark-mode-icon"
          src="/darkmode.svg"
          alt="dark-mode"
        />{" "}
        Dark Mode
      </button>
    </nav>
  );
}
