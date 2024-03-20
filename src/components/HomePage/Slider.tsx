import { useEffect, useState } from 'react'
import './styles/Slider.css'

const Slider = () => {

    const [imgSelected, setImgSelected] = useState(0)
    const [slideMove, setSlideMove] = useState(true)

    const objStyle={

        transform: `translateX(calc(-${imgSelected}/14*100%))`,
        width: `calc(14*100%)`,
    
    }   
    
    useEffect(() => {
        const timer = setInterval(() => {
            if(slideMove){
                if(imgSelected>=13){
                    setSlideMove(!slideMove)
                    setImgSelected(imgSelected-1);
            
                }else{
                    setImgSelected(imgSelected+1);

                }
            }else{
                setImgSelected(imgSelected-1);
                if(imgSelected==1){
                    setSlideMove(!slideMove)            
                }

            }
            
        }, 1800);
      
        // Clean up the timer when the component unmounts
        return () => {
          clearInterval(timer);
        };
      }, [imgSelected]);




    const handlePrev=()=>{
        if(imgSelected-1>=0){
            setImgSelected(imgSelected-1)
        }    
    }
    
    const handleNext=()=>{
    
        if(imgSelected+1<=13){
        
            setImgSelected(cv=>cv+1)
        }    
    }

    return (

        <div className='slider'>
        <button onClick={handlePrev} className='slider__btn'>&lt;</button>
        <div className='slider__exterior'>
            <div style={objStyle} className='slider__interior'>
                            <div className='slider__img-container'>
                                <img className='slider__img'src="/logos/js.png"/>
                                <h4 className='tech__name'>JavaScript</h4>
                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/react.svg"/>
                                <h4 className='tech__name'>React</h4>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/html.svg"/>
                                <h4 className='tech__name'>HTML</h4>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/css.svg"/>
                                <h4 className='tech__name'>Css</h4>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/illustrator.svg"/>
                                <h2 className='tech__name'>Illustrator</h2>
                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/Figma-logo.svg"/>
                                <h2 className='tech__name'>Figma</h2>
                            </div>      
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/node.png"/>
                                <h4 className='tech__name'>Node</h4>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/photoshop.svg"/>
                                <h2 className='tech__name'>Photoshop</h2>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/python.png"/>
                                <h2 className='tech__name'>Python</h2>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img'src="/logos/vite.png"/>
                                <h2 className='tech__name'>Vite</h2>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/ts.png"/>
                                <h2 className='tech__name'>TypeScript</h2>

                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/postgres.png"/>
                                <h2 className='tech__name'>PostgreSQL</h2>
                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/php-1.svg"/>
                                <h2 className='tech__name'>PHP</h2>
                            </div>
                            <div className='slider__img-container'>
                                <img className='slider__img' src="/logos/JQuery.png"/>
                                <h2 className='tech__name'>jQuery</h2>
                            </div>
                             
                   
            </div>
        </div>
        <button onClick={handleNext} className='slider__btn'>&gt;</button>
    </div>
     
    )
}

export default Slider