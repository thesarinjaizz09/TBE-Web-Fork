import { LinkButtonProps } from '@/interfaces';
import React from 'react';
import { Button, Link } from '../..';

const LinkButton = ({
  href,
  className = '',
  buttonProps,
  target,
}: LinkButtonProps) => {
  return (
    <Link href={href} className={className} target={target}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default LinkButton;
