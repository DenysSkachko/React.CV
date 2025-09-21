import { FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';

const socials = [
  { Icon: FaInstagram, top: 'top-0', left: 'left-10', color: '#E4405F', url: 'https://instagram.com/denys.skachko' },
  { Icon: FaTelegramPlane, top: '-top-3', left: 'left-20', color: '#26A5E4', url: 'https://t.me/stormstyle' },
  { Icon: FaYoutube, top: 'top-5', left: 'left-20', color: '#FF0000', url: 'https://www.youtube.com/@DenysSkachko' },
  { Icon: FaGithub, top: '-top-4', left: 'left-30', color: '#fff', url: 'https://github.com/DenysSkachko' },
  { Icon: FaLinkedin, top: 'top-6', left: 'left-30', color: '#0A66C2', url: 'https://www.linkedin.com/in/denys-skachko-9ba871374/' },
  { Icon: SiGmail, top: 'top-0', left: 'left-40', color: '#EA4335', url: 'https://mail.google.com/mail/?view=cm&to=denya.skachko@gmail.com' },
  { Icon: BsTwitter, top: '-top-4', left: 'left-50', color: '#1DA1F2', url: 'https://x.com/denys_skachko' },
];

export default function HeaderSocial() {
  return (
    <div className="absolute top-2 right-2 w-[250px] h-[80px]">

      {socials.map(({ Icon, top, left, color, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute ${top} ${left} text-4xl transition-transform duration-300 hover:scale-110 z-10 shadow-2xl`}
          style={{ color }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
