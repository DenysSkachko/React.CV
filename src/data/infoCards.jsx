import { MapPin, Cake, Languages, CalendarDays, Sparkles } from 'lucide-react';

const infoData = [
  {
    id: 'location',
    label: 'Location',
    value: 'Kharkiv, Ukraine',
    icon: <MapPin className="w-6 h-6" />,
    flag: 'ua',
  },
  {
    id: 'age',
    label: 'Age',
    value: '25 Years',
    icon: <Cake className="w-6 h-6" />,
  },
  {
    id: 'birthdate',
    label: 'Birthdate',
    value: '25.10.1999',
    icon: <CalendarDays className="w-6 h-6" />,
  },
  {
    id: 'english',
    label: 'English',
    value: 'B2 Level',
    icon: <Languages className="w-6 h-6" />,
    flag: 'gb',
  },
  {
    id: 'ukrainian',
    label: 'Ukrainian',
    value: 'Native',
    icon: <Languages className="w-6 h-6" />,
    flag: 'ua',
  },
  {
    id: 'softskills',
    label: 'Soft Skills',
    value: 'Click to explore',
    icon: <Sparkles className="w-6 h-6" />,
    isInteractive: true,
    skills: [
      {
        name: 'Problem Solving',
        description: 'Analytical & creative problem solving.',
      },
      { name: 'Teamwork', description: 'Effective collaboration skills.' },
      {
        name: 'Adaptability',
        description: 'Thriving in changing environments.',
      },
      {
        name: 'Communication',
        description: 'Clear and persuasive communication.',
      },
      { name: 'Time Management', description: 'Prioritization & planning.' },
    ],
  },
];

export default infoData;
