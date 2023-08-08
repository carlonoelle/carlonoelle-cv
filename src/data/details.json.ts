export interface IDetailsTemplate {
  link?: string;
  title: string;
  location: string;
  locationLink?: string;
  date: string;
}

export const details: IDetailsTemplate[] = [
  {
    title: 'Freelance Software Engineer (Part time)',
    link: 'https://codeattack.io',
    location: 'Remote - CodeAttack.io',
    date: '2021 - ongoing',
  },
  {
    title: 'Software Engineer (Full time)',
    location: 'Cologne - TIMETOACT Software & Consulting GmbH',
    locationLink: 'https://www.timetoact.de',
    date: '2020 - ongoing',
  },
  {
    title: 'Bachelor of Science - Wirtschaftsinformatik',
    location: 'Cologne - FOM Hochschule für Oekonomie & Management',
    date: '2018 - ongoing',
  },
  {
    title: 'Ausbildung Fachinformatiker für Anwendungsentwicklung',
    location: 'Cologne - TIMETOACT Software & Consulting GmbH',
    locationLink: 'https://www.timetoact.de',
    date: '2018 - 2020',
  },
  {
    title: 'Abitur',
    location: 'Cologne - Gymnasium Rodenkirchen',
    date: '2018',
  },
];
