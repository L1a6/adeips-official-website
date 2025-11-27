export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
}

export const leadershipTeam: LeadershipMember[] = [
  {
    id: '1',
    name: 'Pharm. Akan David',
    title: 'The Chancellor',
    image: '/images/leadership/akan-david.jpg',
    bio: 'Leading ADEIPS with vision and excellence in public speaking education.',
  },
  {
    id: '2',
    name: 'Professor Effiong Johnson',
    title: 'Chairman, Board of Studies',
    image: '/images/leadership/effiong.png',
    bio: 'Guiding academic excellence and curriculum development.',
  },
  {
    id: '3',
    name: 'Regina Edem',
    title: 'Administrative Lead',
    image: '/images/leadership/regina-edem.jpg',
    bio: 'Ensuring smooth operations and administrative excellence.',
  },
  {
    id: '4',
    name: 'Ubong S. Akpan',
    title: 'Head of Corporate Communications',
    image: '/images/leadership/ubong-akpan.jpg',
    bio: 'Managing communications and public relations for the institute.',
  },
];