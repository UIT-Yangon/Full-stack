import React from "react";
import { useSelector } from 'react-redux';
import {styled} from 'styled-components';

const url = process.env.REACT_APP_NEWS_IMAGE;

const Div = styled.div`

    background: url(${props => (props.image === "default.jpg") ? require(`../Images/${props.image}`) : url + props.image});
    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    width: 60px;
    height: 60px;
        


    `;

export default function KeynoteSpeakers() {

  

  const data = useSelector((state) => state.data.value.keynote_speakers);


    return (
      <>
      {
        (data.length > 0) && 
        <div className="py-7 md:py-8 w-full" id="invited">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full" >Keynote Speakers</h3>   
        <div className="flex flex-row gap-[15px] flex-wrap w-full justify-between">
            {data.map((item,index) => 
            <div className=" flex justify-start gap-[10px] w-[350px]" key={index}>
            <Div className="flex-none w-[50px] md:w-[75px] rounded-md" image={item[0]}></Div>
            <div className="flex flex-col">
              <p className="text-[11px] md:text-[16px] text-[#3798a6]">{item[1].split(",")[0]}</p>
              <p className="text-[10px] md:text-[16px] text-[#1c1d20]">{item[1].split(",")[1]}</p>
              <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{item[1].split(",")[2]}</p>
            </div>
          </div>

            )}
        

            
            
            
        </div>

        

      </div>
      }
        
      </>
      
    );
  
   
  }

  