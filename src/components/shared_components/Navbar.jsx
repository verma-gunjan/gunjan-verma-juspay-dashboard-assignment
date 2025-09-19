import { useState } from "react";

const Navbar = ({ toggleLeft, toggleRight }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn" onClick={toggleLeft}>
              File
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn">
              Star
            </button>
          </li>
          <li className="nav-item">Dashboards</li>
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
          <li className="nav-item">
            <button className="nav-link btn">
              <i className="bi bi-star"></i> Theme
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn">
              <i className="bi bi-bell"></i> remind
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn">
              <i className="bi bi-bell"></i> noti
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn" onClick={toggleRight}>
              <i className="bi bi-bell"></i> file
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
