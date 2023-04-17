import {
  FlexContainer,
  GridContainer,
  LinkButton,
  PricingFeatureCard,
  Section,
  Text,
} from '@/components';
import { FRONTEND_MICROCAMP_CURRICULUM } from '@/constant';

const MicrocampPricing = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer direction='col'>
          <Text level='p' className='strong-text '>
            TECH EDUCATION FOR EVERYONE
          </Text>
          <FlexContainer direction='col' className='pt-2'>
            <Text level='h3' className='heading-3'>
              Simple <span className='text-primary'>Pricing.</span>
            </Text>
            <Text level='h3' className='heading-3'>
              Transparent <span className='text-primary'>Pricing.</span>
            </Text>
          </FlexContainer>
          <Text
            level='p'
            className='subtitle pt-1 text-center text-grey md:w-2/3'
          >
            We don't believe in variable pricing for our products. We don't sell
            you anything blindly.
          </Text>
        </FlexContainer>

        <div className='gradient-2  mt-4 w-1/2 grid-cols-1 gap-2 rounded-lg px-4 py-6'>
          <div className='flex flex-col items-center justify-between'>
            <Text level='p' className='strong-text'>
              PRICE YOU PAY
            </Text>
            <Text level='h2' className='heading-2 pt-2'>
              ₹6000
            </Text>
          </div>
          <div className='flex flex-col items-center justify-between pt-4'>
            <Text level='p' className='strong-text'>
              VALUE YOU GET
            </Text>
            <GridContainer className='grid-cols-2 gap-2 rounded-2 pt-2'>
              {FRONTEND_MICROCAMP_CURRICULUM.map((item) => {
                const { id } = item;
                return <PricingFeatureCard key={id} {...item} />;
              })}
            </GridContainer>
          </div>
          <div className='flex flex-col items-center pt-8 text-center'>
            <Text level='p' className='paragraph text-contentDark'>
              CAN'T DECIDE?
            </Text>
            <Text level='h4' className='heading-4 pt-1'>
              Talk to our counsellors
            </Text>
            <FlexContainer justifyCenter={true} className='w-full pt-2'>
              <LinkButton
                href='#'
                buttonProps={{
                  variant: 'PRIMARY',
                  text: 'Book FREE Tech Consultation',
                }}
              />
            </FlexContainer>
          </div>
          {/* <MicrocampRegisterForm /> */}
        </div>
      </FlexContainer>
    </Section>
  );
};

export default MicrocampPricing;
