// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Information from './components/Information/Information'
import Title from './components/Title_first/Title'
import CTA from './components/CTA/CTA'
import Title_second from './components/Title_second/Title_second'
import Testimonials from './components/Testimonials/Testimonials'
import CTApublish from './components/CTApublish/CTApublish'
import Rodape from './components/Rodape/Rodape'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container-box">
      <Title subTitle='Realible & Quick Setup' title='User Friendly Control Panel'/>
      <Information/>
      </div>
      <CTA/>
      <Title_second subTitle='Realible & Quick Setup' title='User Friendly Control Panel'/>
      <Testimonials/>
      <CTApublish/>
      <Rodape/>
    </div>
  )
}

export default App