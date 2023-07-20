import { useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";



function Slideshow(props){
    const [slide, slideIndex] = useState(0)
    const length = props.length
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow_container img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }
    const nextSlide =() =>{
        slideIndex(slide === length - 1 ? 0 : slide + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		slideIndex(slide === 0 ? length - 1 : slide - 1); // on repart au dernier slide quand on est au premier
	};
    return(
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${slideIndex * imgSize()}px)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className='slideshow_controls'>
                <i className='slideshow_controls_chevron' onClick={prevSlide}>{left}</i>
                <i className='slideshow_controls_chevron' onClick={nextSlide}>{right}</i>
            </div>
            <div className='slideshow_idx'>{slideIndex + 1} / {props.img.length}</div>
            </>}
        </div>
    )

}

export default Slideshow;