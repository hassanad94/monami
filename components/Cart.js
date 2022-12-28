"use client";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Image from "next/image";

function Cart() {

    const [opneCart, setOpneCart] = useState(false);

  return (
    <>
        <div className="cart-btn" onClick={()=> setOpneCart( (prev) => !prev )}>
            <Image width={22} height={22} src="../cart-icon.svg" alt="Logo" />
        </div>

        <Drawer
            anchor="right"
            open={opneCart}
            onClose={()=> setOpneCart(false)}
          >
            <div className="cart-container">Cart</div>
      </Drawer>
    </>
  )
}

export default Cart