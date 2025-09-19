import React, { useState } from "react";
import "../../styles/navbar.css"
import { favorite, Recently, LeftBarDashboardData } from "../../data/LeftbarData";
import RecursiveMenu from "./RecursiveMenu";
const LeftBar = ({ show, toggle }) =>{
  const [topToggle, setTopToggle] = useState(true);

  const handleToggle = (showFavorites) =>{
    setTopToggle(showFavorites);
  }
  return(
    <div className={`sidebars leftbar ${show ? "show" : ""}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">ByeWind</h5>
        <button type="button" className="btn-close" onClick={toggle}></button>
      </div>
      <div className="offcanvas-body">
        <div>
          <button onClick={()=>handleToggle(true)} className="btn-style">Favorites</button>
          <button onClick={()=>handleToggle(false)} className="btn-style">Recently</button>
        </div>
        <ul className="">
          {topToggle
            ? favorite.map((item, idx) => <li key={idx}>{item}</li>)
            : Recently.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div>
        <RecursiveMenu  items={LeftBarDashboardData} />
        {/* <h3>Dashboard</h3>
        <h3>Pages</h3> */}
      </div>
    </div>
  )
}
export default LeftBar;