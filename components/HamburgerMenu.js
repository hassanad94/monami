"use client";
import { useState } from "react";

function HamburgerMenu() {

    const [opneMenu, setOpneMenu] = useState(false);

  return (
    <div onClick={()=>setOpneMenu( (prev) => !prev )} className="xl:hidden bg-dark rounded-md cursor-pointer">
        <div className={`hamburger opacity-[0.7] hamburger--collapse js-hamburger ${opneMenu ? "active" : ""}`}>
        <div className="hamburger-box">
            <div className="hamburger-inner"></div>
        </div>
        </div>
    </div>
  )
}

export default HamburgerMenu