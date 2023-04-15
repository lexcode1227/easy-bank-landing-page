import React from 'react'
// import {ReactComponent as Logo} from '../images/logo.svg'
import FooterLogo from './FooterLogo'
import Fbicon from '../images/icon-facebook.svg'
import Yticon from '../images/icon-youtube.svg'
import Twicon from '../images/icon-twitter.svg'
import Pticon from '../images/icon-pinterest.svg'
import Igicon from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <div className='footer__left-company'>
                <FooterLogo className='footer_logo'/>
                <div className='socialMedia'>
                    <a><img src={Fbicon} /></a> 
                    <a><img src={Yticon} /></a>
                    <a><img src={Twicon} /></a>
                    <a><img src={Pticon} /></a>
                    <a><img src={Igicon} /></a>
                </div>
            </div>
            <div className='footer__left-links'>
                <ul className='links'>
                    <li ><a >About us</a></li>
                    <li ><a >Contact</a></li>
                    <li ><a >Blog</a></li>
                </ul>
                <ul className='links'>
                    <li ><a >Careers</a></li>
                    <li ><a >Support</a></li>
                    <li ><a >Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className='footer__right'>
            <button className='btn'>Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
        </div>
    </div>
  )
}

export {Footer}