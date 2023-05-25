import { useState } from 'react';
import logo from "../images/aj-high-resolution-logo-color-on-transparent-background.png";
import { styles } from "../styles";
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center top-0 py-5 z-20 fixed bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div>  
          <Link to='/' className='flex items-center gap-2'
              onClick={() => {setActive(""); window.scrollTo(0,0)}}>
            <img src={logo} alt="logo" className='w-9 h-9' />
            <p className='text-white text-[18px] cursor-pointer font-bold flex'>
             &nbsp; Aditya &nbsp; <span className='sm:block hidden'> |&nbsp;&nbsp;Web Developer</span></p>
          </Link>
        </div>
        <div>
          <ul className='list-none hidden sm:flex flex-grow gap-10'>
            {navLinks.map((link) => (
              <li key={link} onClick={() => setActive(link.title)}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" 
            onClick={() => setToggle(!toggle)}
            className='w-7 h-7 object-contain cursor-pointer' />
           
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start  flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link} onClick={() => {setToggle(!toggle); setActive(link.title)}}
                className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar