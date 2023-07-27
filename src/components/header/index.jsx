import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_kasa.png'
import React from 'react'

function Header() {
  return (
    <header className='header'>
               
                <img src= {logo} alt="logo_kasa" />
            
            <nav className='header__nav'>
                <Link to= "/" >Accueil</Link>
                <Link to ="/about">A propos</Link>
            </nav>
    </header>
  )
}

export default Header