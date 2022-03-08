import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'


const delay = 2500;

function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    React.useEffect(() => {
        timeoutRef.current = setTimeout (
            () => 
                setSlideIndex ((prevIndexSongTuan) => 
                    prevIndexSongTuan === dataSlider.length ? 1 : prevIndexSongTuan + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [slideIndex])

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }
    return (
    <div className='container-slider'>
        {dataSlider.map((obj,index)=>{
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={process.env.PUBLIC_URL + `/image/img${index + 1}.jpg`}
                  alt={""}
                />
              </div>
            );
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
    </div>
    )
} 

export default Slider