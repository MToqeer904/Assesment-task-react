import React from 'react'
import icon1 from "../../images/icon1.svg"
import icon2 from "../../images/icon2.svg"
import icon3 from "../../images/icon3.svg"

const Feature = () => {
    let featuresDetails = [
        {
            src: `${icon1}`,
            alt: "feature Img",
            title: "24/7 Support",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            src: `${icon2}`,
            alt: "feature Img",
            title: "1000+ of reviews",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
        }, 
        {
            src: `${icon3}`,
            alt: "feature Img",
            title: "And more!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
        },
    ]
  return (
        <section className="features">
                {featuresDetails.map((item) => {
                    return <div className='featuresMainDiv'> 
                        <img src={`${item.src}`} alt={`${item.alt}`} />
                        <div>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                })}
        </section>
  )
}

export default Feature