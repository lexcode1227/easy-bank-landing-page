import React from 'react'
import { Reasons_Cards } from './Reasons_Cards'

const Reasons = () => {
  return (
    <div className='reasons' id='Reasons'>
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. <br/> Control your finances like never before.</p>
        <Reasons_Cards/>
    </div>
  )
}

export {Reasons}