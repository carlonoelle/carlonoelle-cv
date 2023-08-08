export interface IContactTemplate {
  link: string;
  type: string;
  title: string;
}

export const contact: IContactTemplate[] = [
  {
    link: 'mailto:hello@carlonoelle.de',
    type: 'Email',
    title: 'hello@carlonoelle.de',
  },
];
