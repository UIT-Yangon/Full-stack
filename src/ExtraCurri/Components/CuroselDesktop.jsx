import FirstText from './FirstText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import React, { useRef,useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fusel from '../../Images/Clubs/football.svg';
import Swimming from '../../Images/Clubs/swimming.svg';
import Badminton from '../../Images/Clubs/badminton.svg';
import Chess from '../../Images/Clubs/chess.svg';
import TableTennis from '../../Images/Clubs/tt.svg';

function CuroselDesktop() {
  
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [stop, setStop] = useState(0);
  const { id } = useParams();
  

  // Ensure `id` is parsed to an integer
  const parsedId = parseInt(id, 10);


  const dataa = useSelector((state) => state.post.value).filter((item) => item.id !== parsedId);

  



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    }
  };

  const clubs = [
    {
      img: Fusel,
      name: "Futsal Club"
    },
    {
      img: Swimming,
      name: "Swimming Club"
    },
    {
      img: Badminton,
      name: "Badminton Club"
    },
    {
      img: Chess,
      name: "Chess Club"
    },
    {
      img: TableTennis,
      name: "Table Tennis Club"
    },
    {
      img: Fusel,
      name: "Futsal Club"
    }
  ]

  

  useEffect(() => {
    setStop((window.innerWidth < 1024) ? Math.ceil(clubs.length/2) : Math.ceil(clubs.length/3) )
  },[])

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const afterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
    if (currentSlide === 0) {
      setLeft(false);
    } else {
      setLeft(true);
    }
    if (currentSlide >= stop) {
      setRight(false);
    } else {
      setRight(true);
    }
  };


  return (
    <>
       <div className="lg:py-20 py-[18.5px] relative grid lg:grid-cols-2 grid-cols-1 gap-y-8 lg:gap-y-0  lg:gap-x-8 w-full ">
      <div className="flex  justify-center items-center w-full">
        <FirstText />
      </div>
      <div className="lg:pt-0 pt-6 block w-full cursor-grab active:cursor-grabbing">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          renderButtonGroupOutside={true}
          afterChange={afterChange}
        >

          {clubs.map((item, index) => (
           
                <div key={index} className="flex flex-col gap-y-2 lg:w-[165px] lg:me-8 me-4">
                  <div className="w-full flex justify-center align-top h-[108px]"><img  src={item.img} alt={item.name} className="flex-none lg:w-auto lg:h-auto w-[64px] h-[64px]" /></div>
                  
                  <h4 className="w-full text-center font-normal max-[1269px]:text-[32px] leading-7 text-base md:text-2xl lg:leading-[38px] ">{item.name}</h4>
                   
            </div>
              
            
          ))}
        </Carousel>
      </div>
      
      
    </div>
    <div className="w-full flex flex-col justify-center items-end lg:items-center  pt-10 lg:pt-9"><ButtonGroup handleNext={handleNext} handlePrevious={handlePrevious} left={left} right={right} /></div>
    </>
   
  );
}

const Div = styled.div`

    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center center;
    
    
        


    `;

    const Div2 = styled.div`

    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

export default CuroselDesktop;
