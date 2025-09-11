import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <div
      className="z-20 w-full bg-[var(--color-dark)] py-5"
      style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}
    >
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
