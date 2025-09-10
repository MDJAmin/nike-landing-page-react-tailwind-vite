import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { FaUser } from "react-icons/fa6";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='#'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[110px] h-[50px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href='#'
                className='leading-normal text-lg text-slate-gray hover:text-blue-500 transition-all hover:border-b-2 '
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a
            className='flex gap-3'
            href='#'
          >
            <FaUser className='mt-[1px] text-xl' />
            Sign in
          </a>
          <span>/</span>
          <a href='#'>Sing up</a>
        </div>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
