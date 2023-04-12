import { CardGradientContainer, SkillCardItem, Text } from '@/components';
import { SkillCardProps } from '@/interfaces';

const SkillCard = ({ title, skilledDetails }: SkillCardProps) => {
  return (
    <CardGradientContainer className='flex-1'>
      <div className='flex w-full items-center justify-evenly gap-4'>
        {skilledDetails.map((skilledDetail) => {
          const { id, name, image, imageAltText } = skilledDetail;
          return (
            <SkillCardItem
              key={id}
              name={name}
              image={image}
              imageAltText={imageAltText}
            />
          );
        })}
      </div>
      <div className='pt-4'>
        <Text level='h5' className='heading-5 text-center'>
          {title}
        </Text>
      </div>
    </CardGradientContainer>
  );
};

export default SkillCard;
