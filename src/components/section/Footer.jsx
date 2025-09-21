import React from 'react'
import SocialLinks from '../shared/SocialLinks'

const Footer = () => {
  return (
    <div className="z-20 w-full bg-dark py-5" style={{ boxShadow: '0 0px 100px 1px rgba(0, 0, 0, 0.50)' }}>
      <SocialLinks />
    </div>
  )
}

export default Footer
