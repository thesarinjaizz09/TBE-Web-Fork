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
          const { id, href, label, target } = url;
          return (
            <FooterLink key={id} href={href} label={label} target={target} />
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinksContainer;
