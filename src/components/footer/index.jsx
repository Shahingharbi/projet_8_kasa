import React from 'react'
import logo from "../../assets/images/logo_blanc_kasa.png"

function Footer() {
  return (
    <footer className='footer'>
        <img className ="footer__logo" src= {logo} alt="logo kasa" />
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer