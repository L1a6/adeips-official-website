export interface Facilitator {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
  specializations?: string[];
}

export const facilitators: Facilitator[] = [
  {
    id: '1',
    name: 'Raphael Edem',
    title: 'Visitor to the Institute & Facilitator',
    image: '/images/facilitators/raphael-edem.jpg',
    specializations: ['Public Speaking', 'Communication Skills'],
  },
  {
    id: '2',
    name: 'Ini Ememobong',
    title: 'Visitor to the Institute & Facilitator',
    image: '/images/facilitators/ini-ememobong.jpg',
    specializations: ['Leadership Communication', 'Presentation Skills'],
  },
  {
    id: '3',
    name: 'Mrs Eno Ekong',
    title: 'Visitor to the Institute & Facilitator',
    image: '/images/facilitators/eno-ekong.jpg',
    specializations: ['Executive Speaking', 'Corporate Training'],
  },
  {
    id: '4',
    name: 'Aniekeme Finbarr',
    title: 'Visitor to the Institute & Facilitator',
    image: '/images/facilitators/aniekeme-finbarr.jpg',
    specializations: ['Voice Modulation', 'Stage Presence'],
  },
  {
    id: '5',
    name: 'Aniekan Usoroh',
    title: 'Visitor to the Institute & Facilitator',
    image: '/images/facilitators/aniekan-usoroh.jpg',
    specializations: ['Persuasive Speaking', 'Business Communication'],
  },
];

