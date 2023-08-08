export interface IContactTemplate {
  link: string;
  type: string;
  title: string;
}

export const contact: IContactTemplate[] = [
  {
    link: 'https://www.linkedin.com/in/carlonoelle/',
    type: 'LinkedIn',
    title: 'carlonoelle',
  },
  {
    link: 'mailto:hello@carlonoelle.de',
    type: 'Email',
    title: 'hello@carlonoelle.de',
  },
  {
    link: 'https://www.xing.com/profile/Carlo_Noelle',
    type: 'Xing',
    title: 'Carlo_Noelle',
  },
];
