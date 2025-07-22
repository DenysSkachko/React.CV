import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div
      className="z-20 w-full bg-[var(--color-dark)] py-16"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col justify-center items-center h-full gap-5"
      >
        <a
          href="https://t.me/stormstyle"
          className="px-20 py-3 bg-[var(--color-accent)] rounded font-extrabold uppercase shadow-2xl cursor-pointer select-none hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
        >
          Contact Me
        </a>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default Footer;
