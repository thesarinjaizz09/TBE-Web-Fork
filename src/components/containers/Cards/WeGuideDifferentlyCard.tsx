import { Image, Text } from '@/components';
import { WeGuideDifferentlyCardProps } from '@/interfaces';

const WeGuideDifferentlyCard = ({
  image,
  imageAltText,
  title,
  content,
}: WeGuideDifferentlyCardProps) => {
  return (
    <div className='flex-1'>
      <div className='bg-gray-950 block h-full overflow-hidden rounded-lg  border-2'>
        <div className='p-4 '>
          <Image
            className=' rounded-t-lg '
            src={`${image}`}
            alt={imageAltText}
          />
          <Text level='h4' className='heading-4 py-4 '>
            {title}
          </Text>

          <Text level='p' className='paragraph text-justify'>
            {content}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default WeGuideDifferentlyCard;
