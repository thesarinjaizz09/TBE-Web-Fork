import { FooterLinksContainerProps, MicroCampFeatureCardProps } from '.';

export interface SKILLProps {
  id?: string;
  name: string;
  image: string;
  imageAltText: string;
}

export interface SKILLSProps {
  id: string;
  title: string;
  details: SKILLProps[];
}

export interface FooterNavigationDataProps extends FooterLinksContainerProps {
  id: string;
  isShow: boolean;
}

export interface MicroCampFeatureCardContentProps
  extends MicroCampFeatureCardProps {
  id: string;
}

export type PageSlug = '/' | '/junior-in-web-engineering' | '/404';
