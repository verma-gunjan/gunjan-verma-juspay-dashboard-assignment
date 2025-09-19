import React from "react";
import "../../styles/navbar.css"
const LeftBar = ({ show, toggle }) =>{
  return(
    <div className={`sidebars leftbar ${show ? "show" : ""}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button type="button" className="btn-close" onClick={toggle}></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </div>
    </div>
  )
}
export default LeftBar;