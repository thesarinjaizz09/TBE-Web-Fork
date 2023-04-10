import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = 'px-8 py-12' }: SectionProps) => {
  return <section className={className}>{children}</section>;
};

export default Section;
