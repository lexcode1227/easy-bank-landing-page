import React from 'react'
import currency from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

const Articles = () => {
    const articlesData = [
        {
            image: currency,
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        },
        {
            image: restaurant,
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        },
        {
            image: plane,
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        },
        {
            image: confetti,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
    ]
  return (
    <div className='articles'>
        <h2>Why choose Easybank?</h2>
        <div className='articles__container'>
            {
                articlesData.map( (data)=> (
                    <div className='articles__container-cards'>
                        <img src={data.image} />
                        <h5>{data.author} </h5>
                        <h4>{data.title} </h4>
                        <p>{data.text} </p>
                    </div>
                    ))
            }
        </div>
    </div>
  )
}

export {Articles}