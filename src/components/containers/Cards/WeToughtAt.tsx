import { Section, Text, WeToughtAtCard } from '@/components';
import { WE_TAUGHT } from '@/constant';

// TODO: refactor
const WeToughtAt = () => {
  return (
    <Section>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='mb-4 flex'>
          <Text level='h3' className='heading-3'>
            We already <span className=' text-primary'>taught</span> at
          </Text>
        </div>
        <div className='w-88 flex items-center justify-between space-x-4'>
          {WE_TAUGHT.map((item) => {
            const { id } = item;
            return <WeToughtAtCard key={id} {...item} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default WeToughtAt;
