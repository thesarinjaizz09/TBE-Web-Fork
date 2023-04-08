import React from 'react';
import Image from 'next/image';
import { Button, Heading } from '../Reusable';
interface CardProps {
  imageURL: string;
  alt: string;
  content: string;
  title: string;
  buttonText: string;
  onClick: () => void;
}

export const ProgramCard = ({
  imageURL,
  alt,
  title,
  content,
  buttonText,
  onClick,
}: CardProps) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
      <Image className='h-48 w-full object-cover' src={imageURL} alt={alt} />
      <div className='px-4 py-4'>
        <Heading level='h3' className='mb-2 text-xl font-semibold'>
          {title}
        </Heading>
        <p className='text-gray-500'>{content}</p>
        <Button variant='primary' onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
