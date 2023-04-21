import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={Logo} alt='Logo de la empresa'/>
        </div>
        <ul className='navbar__links'>
            <li ><a href='#Home' className='underline'>Home</a></li>
            <li ><a href='#Home' className='underline'>About</a></li>
            <li ><a href='#Home' className='underline'>Contact</a></li>
            <li ><a href='#Articles' className='underline'>Blog</a></li>
            <li ><a href='#Home' className='underline'>Careers</a></li>
        </ul>
        <div className='navbar__btn'>
          <button className='btn'>Request Invite</button>
        </div>
    </nav>
  )
}

export {Navbar}