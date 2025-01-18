

import React from 'react';
import HeadingStyle2 from '../../Components/HeadingStyle2';
import styled from 'styled-components';

    
function Objective({text,img}) {

    const Div = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    `;

 
 
  
return (
  <div className="lg:py-[72px] py-14 px-[5%] lg:grid lg:grid-cols-[65%_35%] flex flex-col lg:gap-0 gap-6">
    <div className="flex flex-col lg:gap-6 lg:pe-[76px]">
    <HeadingStyle2 name="Foundation" name1="and Growth" tinyText="History" space="pt-[38px]" sizeLead="leading-[48px]" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" />
    <p className="lg:leading-[27px] leading-[21px] lg:text-lg text-sm font-[350] text-justify ">{text}</p>
    </div>
    
    <Div image={img} className="w-[100%] aspect-video rounded-[32px]"></Div>
    
    

     


  </div>
)

 
}



export default Objective;