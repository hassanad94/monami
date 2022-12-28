
import Image from "next/image";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import Cart from "./Cart";

const Header = () => {

  return (
          
    <header>
      {/* <div className="hidden xl:flex">
        <Nav />
      </div> */}
      
      <HamburgerMenu />

      <Link href="/" className="logo-container">
          <Image width={75} height={22} src="../vercel.svg" alt="Logo" />
      </Link>

      <Cart />
    </header>

  );
};

export default Header;