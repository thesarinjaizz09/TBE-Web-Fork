import { LinkButtonProps } from '@/interfaces';
import React from 'react';
import { Button, Link } from '../..';

const LinkButton = ({ href, className = '', buttonProps }: LinkButtonProps) => {
  return (
    <Link href={href} className={className}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default LinkButton;
