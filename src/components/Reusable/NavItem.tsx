import Link from 'next/link';

interface NavItemProps {
  href: string;
  text: string;
  className: string;
  useSkeleton: boolean;
}

export const NavItem = ({
  href,
  text,
  className,
  useSkeleton = false,
}: NavItemProps) => {
  return (
    <Link href={href} className={className}>
      <a>{text}</a>
    </Link>
  );
};
