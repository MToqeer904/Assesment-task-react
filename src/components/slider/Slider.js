import React, {useRef, useState, useEffect} from 'react'
import vectorSlider from "../../images/vectorSlider.svg"
import cola from "../../images/cola.svg"
import microsoft from "../../images/microsoft.svg"
import twitter from "../../images/twitter.svg"

const Slider = () => {
  const sliderRef = useRef(null);
  const [slider, setSlider] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);

  const images1 = [
    {
    name: microsoft,
    alt: "Microsoft",
    classList: "previous_Img"},
    {
      name: twitter,
      alt: "twitter",
      classList: "current_Img"
    },
    {
      name: cola,
      alt: "cola",
      classList: "next_Img"
    }
  ]
  useEffect(() => {
    setSlider(sliderRef.current)
  }, []);
  function moveSlider(direction) {
      const images = document.querySelectorAll(".slider img");
      if (direction === "right") {
        slider.appendChild(images[0]);
        currentIndex === 2 ? setCurrentIndex((currentIndex) => currentIndex - 2) : setCurrentIndex((currentIndex) => currentIndex + 1)
      } else if (direction === "left") {
          slider.insertBefore(images[2], images[0]);
          currentIndex === 0 ? 
            setCurrentIndex((currentIndex) => currentIndex + 2)
            :
            setCurrentIndex((currentIndex) => currentIndex -1 )
            
      }
      
        
  }
  return (
    <section className='sliderSection'>
        <div className='sliderUpperContent'>
        <div className='textWithCurve'>
            <h1 className='SliderH1'>Trusted by</h1>
            <img src={`${vectorSlider}`} alt='featureVector' className='curveLine' />
        </div>
        <p className='sliderInfoContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
        </div>
        <div className="sliderContainer">
          <div className="slider" ref={sliderRef}>
        {images1.map((item, index) => {
          console.log(index, currentIndex, `current index in image`)
       return  <img
          key={index}
          className={index  === currentIndex ? `${item.classList} center` : `${item.classList}`}
          src={`${item.name}`}
          alt={`${item.alt} ${index}`}
        />
        })}
      </div>
                <button className="arrow leftArrow" onClick={() => moveSlider("left")}>&lt;</button>
                <button className="arrow rightArrow" onClick={() => moveSlider("right")} >&gt;</button>
            </div>
    </section>
  )
}

export default Slider