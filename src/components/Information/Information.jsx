/* eslint-disable no-unused-vars */
import React,{useEffect, useState }from 'react'
import './Information.css'
import Inform_left from '../../assets/Item 01.png'
import Imag_back from '../../assets/Rectangle 56.png'
import Inform_rigth from '../../assets/Items 02.png'
import 'animate.css';


const Information = () => {
  return (
    <div className='container-information'>
        <div className="Inform_left-imag">
        <img src={Inform_left} alt="Inform-user" />
        </div>
        <div className='Imag_back-imag'>
        <img src={Imag_back} alt="Degradient-back" />
        </div>
        <div className='Inform_rigth-imag' >
        <img src={Inform_rigth} alt="Inform-user" />
        </div>
    </div>
  )
}
export default Information
