"use client";
import { navData } from "../data";
import Link from "next/link";
import { useState } from "react";
// import { useStateContext } from "../context/settingContext";

const NavMobile = () => {

  const { items } = navData;

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`${
      navOpen ? "max-h-full" : "max-h-0 overflow-hidden"
    } top-[95px] lg:top-[150px] cursor fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}>
      <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
        <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-2xl font-primary uppercase"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;