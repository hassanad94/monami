"use client";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import NavMobile from "./NavMobile";

function HamburgerMenu() {

    const [opneMenu, setOpneMenu] = useState(false);

  return (
    <>
      <div onClick={()=>setOpneMenu( (prev) => !prev )} className="hamburger-menu-container rounded-md pointer">
          <div className={`hamburger opacity-[0.7] hamburger--collapse js-hamburger ${opneMenu ? "active" : ""}`}>
          <div className="hamburger-box">
              <div className="hamburger-inner"></div>
          </div>
          </div>
      </div>

      <Drawer
            anchor="left"
            open={opneMenu}
            onClose={()=> setOpneMenu( false )}
            className="menu-modal"
          >   
            <NavMobile />
              
      </Drawer>

    </>
  )
}

export default HamburgerMenu