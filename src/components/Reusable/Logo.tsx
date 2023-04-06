import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  useSkeleton: boolean;
}

export const Logo = ({
  src,
  alt,
  width,
  height,
  className,
  useSkeleton = false,
}: LogoProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
