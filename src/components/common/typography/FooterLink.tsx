import { Link } from '@/components';
import { FooterLinkProps } from '@/interfaces';

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <li>
      <Link href={href} className='paragraph text-grey hover:underline'>
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
