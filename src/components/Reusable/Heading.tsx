interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ level, children, className }: HeadingProps) => {
  const HeadingTag = level;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};
