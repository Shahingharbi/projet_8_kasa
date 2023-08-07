import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_kasa.png'
import React from 'react'

function Header() {
  return (
    <header className='header'>
                <img src= {logo} alt="logo_kasa" />
            <nav className='header__nav'>
                <NavLink to= "/"  className={({isActive}) => isActive ? "active" : "" }>Accueil</NavLink>
                <NavLink to ="/about" className={({isActive}) => isActive ? "active" : ""}>A propos</NavLink>
            </nav>
    </header>
  )
}

export default Header