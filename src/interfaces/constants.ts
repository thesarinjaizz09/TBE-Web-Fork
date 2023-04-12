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
