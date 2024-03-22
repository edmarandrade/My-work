// eslint-disable-next-line no-unused-vars
import React from 'react'
import  './Title_second.css'

// eslint-disable-next-line react/prop-types
const Title_second = ({subTitle, title}) => {
  return (
    <div className='title-second'>
    <p>{subTitle}</p>
    <h2>{title}</h2>
  </div>
  )
}
export default Title_second
