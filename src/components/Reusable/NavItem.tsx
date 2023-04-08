import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  className: string;
  useSkeleton: boolean;
}

export const NavItem = ({
  href,
  label,
  className,
  useSkeleton = false,
}: NavItemProps) => {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};
