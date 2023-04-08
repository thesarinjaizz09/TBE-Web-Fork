import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  className: string;
  useSkeleton: boolean;
}

export const Logo = ({
  src,
  alt,
  className,
  useSkeleton = false,
}: LogoProps) => {
  return <Image src={src} alt={alt} className={className} />;
};
