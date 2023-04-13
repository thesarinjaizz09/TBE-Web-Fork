import { FooterLink, Text } from '@/components';
import { FooterLinksContainerProps } from '@/interfaces';

const FooterLinksContainer = ({ title, urls }: FooterLinksContainerProps) => {
  return (
    <div>
      <Text level='p' className='paragraph text-grey-dark'>
        {title}
      </Text>
      <ul className='pt-1'>
        {urls.map((url) => {
          const { id, href, label } = url;
          return <FooterLink key={id} href={href} label={label} />;
        })}
      </ul>
    </div>
  );
};

export default FooterLinksContainer;
