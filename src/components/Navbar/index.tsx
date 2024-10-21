import { useState } from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { HiHome, HiFolder, HiMail } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed md:absolute md:top-0 right-0 left-0 z-[1000]">
      <div className="bg-white md:bg-transparent px-4">
        <div className="flex justify-between items-center py-1">          
          <div className="flex items-center text-2xl z-[1000] font-bold text-black md:text-black md:dark:text-white">
            <img src='./images/wfp_logo.svg'/><span className='ml-3'>Hunger Map Live</span></div>      
          <div className="md:hidden z-[1000]">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        

          {/* Menu Links */}
          {!isOpen && 
            <div className={`md:flex space-x-2 ${isOpen ? 'block' : 'hidden'} md:block z-[1000]`}>
              <Link to="/">
                <Button
                  justify="space-between" 
                  w={100}
                  size="compact-md"
                  leftSection={<HiHome size="1rem" />}
                  variant='filled'
                  color="black"
                >Home</Button>
              </Link>
              <Link to="/about">
                <Button
                  justify="space-between" 
                  w={100}
                  size="compact-md"
                  leftSection={<HiFolder size="1rem" />}
                  variant='filled'
                  color="black"
                >About</Button>
              </Link>
              
              <Link to="/contact">
                <Button
                  justify="space-between" 
                  size="compact-md"
                  w={100}
                  leftSection={<HiMail size="1rem" />}
                  variant='filled'
                  color="black"
                >Contact</Button>  
              </Link>
              <DarkThemeToggle className="hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-1 me-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"/>
            </div>
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white md:hidden z-[1000]">
          <div className="px-4 pb-4">            
            <Link to="/">
                <a href="/" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
                  Home
                </a>
            </Link>    
            <Link to="/about">
              <a href="/about" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
                About
              </a>
            </Link>
            <Link to="/contact">
              <a href="/contact" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
                Contact
              </a>
            </Link>     
            <DarkThemeToggle className='hidden'/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
