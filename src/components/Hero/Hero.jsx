// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import hero from '../../assets/Info-1.png'
import background_form from '../../assets/Mask group.png'
import list_itens_1 from '../../assets/computer.png'
import list_itens_2 from '../../assets/glob.png'
import list_itens_3 from '../../assets/papel.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="box-information">
        <img src={hero} alt="hero-principal" className='hero-left'/>
      </div>
      <div className="box-form">
        <img src={background_form} alt="imagem-fundo" className='background-form'/>
        <div className="container-search">
          <div className="search-box">
            <input type="text" className='search-input' placeholder='your domain name here ....' />
            <div className="search-btn">search now</div>
        </div>
        <div className="itens-seach">
          <img src={list_itens_1} alt="itens_1"  className='List-itens'/>
          <img src={list_itens_2} alt="itens_2"  className='List-itens'/>
          <img src={list_itens_3} alt="itens_3"  className='List-itens'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
