// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import circle from '../../assets/Ellipse 1.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo-doomain" className='logo' />
        <ul className='container-items'>
            <li className='items-nav'>HOME <img src={circle} alt="circle-Home"  className='ellipse-circle'/></li>
            <li className='items-nav' >DOMAIN <img src={circle} alt="circle-Domain" className='ellipse-circle'/></li>
            <li className='items-nav'>PLAN <img src={circle} alt="circle-plan" className='ellipse-circle'/></li>
            <li className='items-nav'>SUPORT <img src={circle} alt="circle-Home" className='ellipse-circle'/></li> 
            <li className='btn-contact'><button className='btn-member'>MEMBER AREA</button></li>
        </ul>
    </nav>
  )
}

export default Navbar