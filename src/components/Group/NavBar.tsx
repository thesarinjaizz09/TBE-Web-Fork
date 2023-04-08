import React from 'react';
import { NavItem } from '../Reusable';

interface NavBarProps {
  links: {
    href: string;
    label: string;
  }[];
  className: string;
  useSkeleton: boolean;
}

export const NavBar = ({ links, className, useSkeleton }: NavBarProps) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <NavItem
            key={link.label}
            useSkeleton={useSkeleton}
            href={link.href}
            label={link.label}
            className={className}
          />
        ))}
      </ul>
    </nav>
  );
};
