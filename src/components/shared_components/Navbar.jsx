import React, { useState } from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Navbar = () => {
  const [leftSideBar, setLeftSideBar] = useState(true);
  const [rightSideBar, setRightSideBar] = useState(true);

  const handleLeftBar = ()=>{
    setLeftSideBar(!leftSideBar);
  }
  const handleRightBar = ()=>{
    setRightSideBar(!rightSideBar);
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
           <button onClick={()=>handleLeftBar()}>
            File
           </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">
              Star
            </button>
          </li>
          <li className="nav-item">
            Dashboards
          </li>
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
            <button className="nav-link" href="#">
              <i className="bi bi-star">Theme</i>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">
              <i className="bi bi-bell">remind</i>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">
              <i className="bi bi-bell">noti</i>
            </button>
          </li>
          <li className="nav-item">
            <button onClick={()=>handleRightBar()}>
              <i className="bi bi-bell">file</i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <LeftBar show={leftSideBar} toggle={handleLeftBar} />
    <RightBar show={rightSideBar} toggle={handleRightBar}/>
    </>
  );
};

export default Navbar;
