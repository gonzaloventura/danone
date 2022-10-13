import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/danonelogo.png'

const NavBar = () => {
  return (
    <div className='center'>
      <img src={logo} alt="logo" className='logo' />
    </div>
  )
}

export default NavBar