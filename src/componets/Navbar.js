import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={Logo}/>
        </div>
        <ul className='navbar__links'>
            <li ><a href='#'>Home</a></li>
            <li ><a href='#'>About</a></li>
            <li ><a href='#'>Contact</a></li>
            <li ><a href='#'>Blog</a></li>
            <li ><a href='#'>Careers</a></li>
        </ul>
        <div className='navbar__btn'>
          <button className='btn'>Request Invite</button>
        </div>
    </nav>
  )
}

export {Navbar}