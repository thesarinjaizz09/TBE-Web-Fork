import { ImageContainerProps } from '@/interfaces';
import Image from 'next/image';

const ImageContainer = ({
  src,
  alt,
  fill,
  className,
  loading = 'lazy',
}: ImageContainerProps) => {
  return (
    <div className='h-full w-full'>
      <Image
        src={src}
        alt={alt}
        fill={fill ?? true}
        loading={loading}
        className={className}
      />
    </div>
  );
};

export default ImageContainer;
