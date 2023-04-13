import { CardGradientContainer, Image, Text } from '@/components';
import { TestimonialCardProps } from '@/interfaces';

const TestimonialCard = ({
  image,
  imageAltText,
  title,
  content,
}: TestimonialCardProps) => {
  return (
    <CardGradientContainer variant={1} className='max-w-sm'>
      <Image className='w-24' src={`${image}`} alt={imageAltText} />
      <Text level='h5' className='heading-5 pt-4'>
        {title}
      </Text>
      <Text level='p' className='paragraph pt-1 text-grey-dark'>
        {content}
      </Text>
    </CardGradientContainer>
  );
};

export default TestimonialCard;
