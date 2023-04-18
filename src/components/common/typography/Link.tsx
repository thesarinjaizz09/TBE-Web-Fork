import Link from 'next/link';

import { LinkProps } from '@/interfaces';

const LinkText = ({ href, children, className, target }: LinkProps) => {
  return (
    <Link className={className + ' link'} href={href} target={target}>
      {children}
    </Link>
  );
};

export default LinkText;
