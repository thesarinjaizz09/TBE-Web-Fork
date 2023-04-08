import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../Reusable';
import { NavBar } from './NavBar';
interface HeaderProps {
  className: string;
}
export const Header = ({ className }: HeaderProps) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const handleNavBarToggle = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  const links = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Contact', label: 'Contact' },
  ];
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='logo'>
        <Link href='/'>
          <Logo src='' alt='' className='' useSkeleton={false} />
        </Link>
      </div>
      <NavBar
        useSkeleton={false}
        links={links}
        className={`navbar ${isNavBarOpen ? 'open' : ''}`}
      />
      <div className='hamburger-menu' onClick={handleNavBarToggle}>
        <div className={`bar ${isNavBarOpen ? 'open' : ''}`} />
        <div className={`bar ${isNavBarOpen ? 'open' : ''}`} />
        <div className={`bar ${isNavBarOpen ? 'open' : ''}`} />
      </div>
    </header>
  );
};
