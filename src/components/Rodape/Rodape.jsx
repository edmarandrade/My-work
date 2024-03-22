// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Rodape.css'
import logo from '../../assets/Logo.png'

const Rodape = () => {
  return (
    <div className='footer'>
        <div className='logo-box'>
            <img src={logo} alt="logotype" />
            <h2>House : 3/A (2nd Floor), new york,13/17, Washington (City Road),United-1217.</h2>
        </div>
        <div className='footer-nav'>
        <div className='Hosting-service'>
        <h3>Hosting service</h3>
            <ul>
            <li>Web hosting</li>
            <li>Cloud hosting</li>
            <li>Dedicated Server</li>
            <li>Shared Hosting</li>
            <li>VPS Hosting</li>
            <li>WordPress Hostings</li>
            </ul>
        </div>
        <div className='Domain-Services'>
            <h3>Domain Services</h3>
        <ul>
        <li>Web hosting</li>
            <li>Cloud hosting</li>
            <li>Dedicated Server</li>
            <li>Shared Hosting</li>
            <li>VPS Hosting</li>
            <li>WordPress Hostings</li>
            </ul>
        </div>
        <div className='Customer-Service'>
        <h3>Customer Service</h3>
        <ul>
            <li>Customer Portal</li>
            <li>Support Portal</li>
            <li>Video tutorials</li>
            <li>Live chat</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Rodape
