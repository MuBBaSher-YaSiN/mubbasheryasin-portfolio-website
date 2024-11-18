import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'DIGITAL MARKETER',
          'SOFTWARE ENGINEER',
          'Full-Stack Web Developer',
          'WordPress & Shopify EXPERT',
          'CERTIFIED SEO EXPERT',
          'GOOGLE ADS EXPERT',
          'META (FB & INSTA) ADS EXPERT' 
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
