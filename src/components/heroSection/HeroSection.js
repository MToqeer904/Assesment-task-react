import React from 'react'
import p1 from "../../images/p1.png"
import p2 from "../../images/p2.png"
import p3 from "../../images/p3.png"
import heroSection from "../../images/heroSection.png"



const HeroSection = () => {
    let detail = [
        {src: `${p1}`,
        alt: "p1_img",
        name: "Andrew Schultz",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },
    {src: `${p2}`,
    alt: "p1_img",
    name: "Andrew Schultz",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
},
{src: `${p3}`,
alt: "p1_img",
        name: "Andrew Schultz",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },
    {}
]
  return (
    <section className='heroSection'>
        <div>
    <h1 className='heroSH'>Lorem ipsum <span className='heroSHSpan'>dolor</span> sit amet yo 👋</h1>
    {detail.map((item) => {
        return <div className='heroSecCard'>
            <div>
        {item.src && <img src= {`${item.src}`} alt = {`${item.alt}`}></img>}
        </div>
        <div className='personDetailDiv'>
        <span className='personDetailSpan'>{item.name}</span>
        <p className='personDetailPara'>{item.detail}</p>
        </div>
        </div>
    })}
    </div>
    <div>
        <img src={`${heroSection}`} alt="heroSection" className='heroSectionImg'></img>
    </div>
    </section>
  )
}

export default HeroSection