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
        name: 'Structured Clarity',
        description: 'Structured thinking under chaos',
      },
      { name: 'Seamless Switching', description: 'Fast context switcher' },
      {
        name: 'Clear by Default',
        description: 'Clarity-first communicator',
      },
      {
        name: 'Preventive Thinker',
        description: 'Built-in debug mindset',
      },
      { name: 'Keep Calm', description: 'Calm under irrational pressure' },
      
      { name: 'Learn Daily', description: 'Every day I learn something new to upgrade my thinking, tools, or workflow' },
    ],
  },
];

export default infoData;
