import React, { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/shared_components/Navbar"
import LeftBar from "./components/shared_components/LeftBar"
import RightBar from "./components/shared_components/RightBar"

function App() {
  const [leftBar, setLeftBar] = useState(true);
  const [rightbar, setRightBar] = useState(true);
  const handleLeftBar = ()=>{
    setLeftBar(!leftBar);
  }
  const handleRightBar = ()=>{
    setRightBar(!rightbar);
  }
  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLeftBar(false);
        setRightBar(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])
  return (
    <>
      <LeftBar show={leftBar} toggle={handleLeftBar} />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: leftBar ? "250px" : "0",
          marginRight: rightbar ? "280px" : "0",
          transition: "all 0.3s ease",
        }}
      >
        <Navbar
          toggleLeft={() => setLeftBar(!leftBar)}
          toggleRight={() => setRightBar(!rightbar)}
        />
        <Dashboard/>
      </div>
      <RightBar show={rightbar} toggle={handleRightBar}/>
    </>
  )
}

export default App
