import { useState, useContext } from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import { Button } from '@mantine/core';
import { HiHome, HiFolder, HiMail, HiSun, HiMoon } from "react-icons/hi";
import { ActionIcon } from '@mantine/core';
import ColorSchemeContext from '../../context/ColorSchemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const colorSchemeContext = useContext<any>(ColorSchemeContext);
  const dark = colorSchemeContext?.colorScheme === 'dark';

  return (
    <nav className="fixed md:absolute md:top-0 right-0 left-0 z-[1000]">
      <div className="bg-white md:bg-transparent px-4">
        <div className="flex justify-between items-center py-1">          
          <div className="flex items-center text-2xl z-[1000] font-bold text-black md:text-black md:dark:text-white">
            <img src='./images/wfp_logo.svg'/><span className='ml-3'>Hunger Map Live</span></div>      
          {/* Hamburger Icon for Mobile */}
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
          {/* Logo */}
          

          {/* Menu Links */}
          {!isOpen && 
            <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block z-[1000]`}>
              <Button
                justify="space-between" 
                fullWidth
                component="a"
                href="#"
                leftSection={<HiHome size="1rem" />}
                variant='filled'
                color="black"
              >About</Button>
              <Button
                justify="space-between" 
                fullWidth
                component="a"
                href="#"
                leftSection={<HiFolder size="1rem" />}
                variant='filled'
                color="black"
              >Media</Button>
              
              <Button
                justify="space-between" 
                fullWidth
                component="a"
                href="#"
                leftSection={<HiMail size="1rem" />}
                variant='filled'
                color="black"
              >Contact</Button>
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => colorSchemeContext?.onChange(dark ? 'light' : 'dark')}
                title="Toggle color scheme"
              >
                {dark ? (
                  <HiSun style={{ width: 18, height: 18 }} />
                ) : (
                  <HiMoon style={{ width: 18, height: 18 }} />
                )}
              </ActionIcon>
              <DarkThemeToggle className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"/>
            </div>
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white md:hidden z-[1000]">
          <div className="px-4 pb-4">
            <a href="#" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
              About
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
              Services
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600" onClick={closeMenu}>
              Contact
            </a>
            <DarkThemeToggle/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
