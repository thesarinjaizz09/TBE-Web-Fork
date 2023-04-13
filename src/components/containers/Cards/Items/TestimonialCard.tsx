import { Image, Text } from '@/components';
import { TestimonialCardProps } from '@/interfaces';

const TestimonialCard = ({
  image,
  imageAltText,
  title,
  content,
}: TestimonialCardProps) => {
  return (
    <div className='flex-1'>
      <div className='bg-gray-950 block h-full overflow-hidden rounded-lg  border-2'>
        <div className='p-4 '>
          <Image
            className=' w-16 rounded-t-lg'
            src={`${image}`}
            alt={imageAltText}
          />
          <Text level='h4' className='heading-4 py-4 '>
            {title}
          </Text>
          <Text level='p' className='paragraph text-justify text-grey-dark'>
            {content}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
