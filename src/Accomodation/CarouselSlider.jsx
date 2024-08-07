import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Images/BookLibrary/photo/satkhan.jpg'
import img2 from '../Images/BookLibrary/photo/sixyearjourney.jpg'
import img3 from '../Images/BookLibrary/photo/library1.jpg'
import img4 from '../Images/BookLibrary/photo/entrance.jpg'
import { AnimationButton } from '../Components/Footer';

const images = [
  {
    id:1,
    image: img1,
    text1: "Study at UIT:",
    text2: "Experience",
    text3: "New Technology",
  },
  {
    id:2,
    image: img2,
    text1: "",
    text2: "Center of",
    text3: "Excellence",
  },
  {
    id:3,
    image: img3,
    text1: "",
    text2: "Center of",
    text3: "Excellence",
  },
  {
    id:4,
    image: img4,
    text1: "",
    text2: "Explore",
    text3: "UIT Campus",
  }
]
const CarouselSlider = () => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} >
      {images.map((image)=>(
        <div key={image.id} className='relative' >
          <img src={image.image} alt="Slide 1" className='w-[95%] md:h-[690px] h-[300px] '/>
          <div className='absolute w-[95%] md:h-[690px] h-[300px] flex flex-col bg-gradient-to-bottom top-0 '>
            
          </div>
        </div>)
      )}
    </Slider>
  );
};

export default CarouselSlider;
  