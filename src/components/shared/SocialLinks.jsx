import { FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

const socials = [
  { Icon: FaInstagram, url: 'https://instagram.com/denys.skachko', color: '#E4405F' },
  { Icon: FaTelegramPlane, url: 'https://t.me/stormstyle', color: '#26A5E4' },
  { Icon: FaGithub, url: 'https://github.com/DenysSkachko', color: '#fff' },
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/denys-skachko-9ba871374/', color: '#0A66C2' },
  { Icon: FaYoutube, url: 'https://www.youtube.com/@DenysSkachko', color: '#FF0000' },
  { Icon: SiGmail, url: 'https://mail.google.com/mail/?view=cm&to=denya.skachko@gmail.com', color: '#EA4335' },
  { Icon: BsTwitter, url: 'https://x.com/denys_skachko', color: '#1DA1F2' },
]

const SocialLinks = ({ direction }) => {
  return (
    <div
      className={`flex flex-wrap max-w-[200px] justify-center sm:max-w-full gap-6 mt-4 ${direction === 'col' && 'flex-col'}`}
      aria-label="Social media links"
    >
      {socials.map(({ Icon, url, color }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl transition-transform duration-300 hover:scale-150"
          aria-label={`Link to ${url}`}
          style={{ color }}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
