// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CTA.css'
import image_cta from '../../assets/CTA.png'

const CTA = () => {
  return (
    <div className='box-cta'>
        <div className='backgound-image'>
            <img src={image_cta} alt="imagem-fundo" />
        </div>
    </div>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export default CTA
