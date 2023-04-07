import { TextProps } from '@/interfaces';

const Text = ({ level, children, className }: TextProps) => {
  const HeadingTag = level;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Text;
