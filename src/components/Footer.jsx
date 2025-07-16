import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return <div className="z-20 w-[100%] h-30 bg-[var(--color-dark)] py-30">
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <a href="" className="px-20 py-3 bg-[var(--color-accent)] rounded font-extrabold uppercase shadow-2xl cursor-pointer"> Contact Me</a>
      <SocialLinks/>
    </div>
  </div>;
};

export default Footer;
