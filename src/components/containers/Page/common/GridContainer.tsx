import { GridContainerProps } from '@/interfaces';

const GridContainer = ({
  children,
  columns = 'auto',
  rows = 'auto',
  className,
}: GridContainerProps) => {
  return (
    <div className={`grid-cols-${columns} grid-rows-${rows} grid ${className}`}>
      {children}
    </div>
  );
};

export default GridContainer;
