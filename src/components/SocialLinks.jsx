import React from 'react';
import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';

const socials = [
  { Icon: FaInstagram, url: 'https://instagram.com/denys.skachko' },
  { Icon: FaTelegramPlane, url: 'https://t.me/stormstyle' },
  { Icon: FaGithub, url: 'https://github.com/DenysSkachko' },
  { Icon: FaLinkedin, url: 'https://linkedin.com' },
  { Icon: SiGmail, url: 'mailto:denya.skachko@gmail.com' },
  { Icon: FaDiscord, url: 'https://discord.com' },
  { Icon: BsTwitter, url: 'https://twitter.com' },
];

const SocialLinks = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-wrap max-w-[200px] justify-center sm:max-w-full gap-6 mt-4"
      aria-label="Social media links"
    >
      {socials.map(({ Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          data-social-icon
          className="text-[var(--color-light)] text-4xl transition-transform duration-300 hover:text-[var(--color-accent)] hover:scale-150"
          aria-label={`Link to ${url}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
});

export default SocialLinks;
