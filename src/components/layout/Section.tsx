import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  children,
  className = 'md:px-8 md:py-12 px-4 py-6',
}: SectionProps) => {
  return <section className={className}>{children}</section>;
};

export default Section;
