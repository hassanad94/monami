'use client';
import { navData } from "../data";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavMobile = () => {

  const pathName = usePathname(); 

  const { items } = navData;

  return (
      <nav>
        <div className="menu-list">
          {items.map((item, index) => {
            return (
              <div className="menu-item" key={index+item.href}>
                <Link
                  className={`font-title uppercase ${pathName === item.href ? "active" : "" }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
  );
};

export default NavMobile;