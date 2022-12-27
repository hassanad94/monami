
import Image from "next/image";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {

  return (
          
    <header className="py-[10px] bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300">
      <div className="flex justify-between items-end h-full">
        {/* nav - initially is hidden - show on desktop*/}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        
        <HamburgerMenu />

        <Link href="/">
            <Image width={75} height={75} src="../vercel.svg" alt="Logo" />
        </Link>

        <div className="cart-btn ">

          <Image className="opacity-[0.7]" width={22} height={22} src="../cart-icon.svg" alt="Logo" />

        </div>

        {/* nav mobile - is showing by default - hidden on desktop mode */}  
        <NavMobile />
      </div>
    </header>

  );
};

export default Header;