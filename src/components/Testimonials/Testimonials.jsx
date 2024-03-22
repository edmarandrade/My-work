// eslint-disable-next-line no-unused-vars
import React,  { useState } from 'react'
import './Testimonials.css'
import member_1 from '../../assets/Member_1.png'
import member_2 from '../../assets/Member_2.png'
import member_3 from '../../assets/Member_3.png'
import line from '../../assets/Purple Line.png'
import feedback from '../../assets/Stars.png'

const Testimonials = () => {
  return (
    <div className='container-Testimonials'>
        <div className="box-image-member">
            <div className='member-one'>
                <div>
                <img src={member_1} alt="Member job" />
                </div>
                   <div>
                   <img src={member_2} alt="Member job" />
                   </div>
                <div>
                <img src={member_3} alt="Member job" />
                </div>
            </div>
            <div className='line-center'>
                <img src={line} alt="line" className='purper-line' />
            </div>
            <div className='member-two'>
            <div>
                <img src={member_1} alt="Member job" />
                </div>
                   <div>
                   <img src={member_2} alt="Member job" />
                   </div>
                <div>
                <img src={member_3} alt="Member job" />
                </div>
            </div>
        </div>
        <div className="box-informatin-toll">
            <h2>Cameron Williamson</h2>
            <p id='departament-member'>Ceo & Founder</p>
            <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='feeback'>
            <img src={feedback} alt="feedback" />
        </div>
    </div>
  )
}

export default Testimonials
