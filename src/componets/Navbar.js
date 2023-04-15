import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={Logo} alt='Logo de la empresa'/>
        </div>
        <ul className='navbar__links'>
            <li ><a href='#Home'>Home</a></li>
            <li ><a href='#Home'>About</a></li>
            <li ><a href='#Home'>Contact</a></li>
            <li ><a href='#Articles'>Blog</a></li>
            <li ><a href='#Home'>Careers</a></li>
        </ul>
        <div className='navbar__btn'>
          <button className='btn'>Request Invite</button>
        </div>
    </nav>
  )
}

export {Navbar}