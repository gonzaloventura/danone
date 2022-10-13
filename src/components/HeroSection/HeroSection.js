import React from 'react'
import './HeroSection.scss'
import rombos from '../../assets/img/rombos.png'
import wearedanone from '../../assets/img/wearedanone.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <img src={wearedanone} alt="We Are Danone"/>
    </div>
  )
}

export default HeroSection