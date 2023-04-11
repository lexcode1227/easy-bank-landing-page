import React from 'react'
import {Navbar} from './Navbar'
import MockupDesktop from '../images/image-mockups-rec.png'

const Home = () => {
  return (
    <div className='home' id='Home'>
        <Navbar></Navbar>
        <div className='home__container'>
            <div className='home__container-left'>
              <h1>Next generation digital banking</h1>
              <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
              <button className='btn'>Request Invite</button>
            </div>
            <div className='home__container-right'>
              <img src={MockupDesktop} alt='mockups de la app'/>
            </div>
        </div>
    </div>
  )
}

export {Home}