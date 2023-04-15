import React from 'react'
import online from '../images/icon-online.svg'
import onboarding from '../images/icon-onboarding.svg'
import budgeting from '../images/icon-budgeting.svg'
import api from '../images/icon-api.svg'

const Reasons_Cards = () => {
    const reasonsCardData = [
        {
            id: "01",
            image: online,
            title: "Online Banking",
            text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
            altText: "df",
        },
        {
            id: "02",
            image: budgeting,
            title: "Simple Budgeting",
            text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
            altText: "df",
        },
        {
            id: "03",
            image: onboarding,
            title: "Fast Onboarding",
            text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
            altText: "df",
        },
        {
            id: "04",
            image: api,
            title: "Open API",
            text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            altText: "df",
        }
    ]
    return (
    <div className='reasons__container'>
        {
            reasonsCardData.map( (data)=> (
                <div className='reasons__container-cards' key={data.id}>
                    <img src={data.image} alt={data.altText} />
                    <h4>{data.title} </h4>
                    <p>{data.text} </p>
                </div>
            ))
        }
    </div>
  )
}

export {Reasons_Cards}