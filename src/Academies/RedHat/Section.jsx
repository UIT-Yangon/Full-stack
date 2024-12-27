

import React from 'react';
import HeadingStyle2 from '../../Components/HeadingStyle2';

import Sector from './Sector';
    
function Section({data}) {





 
  
return (
  <div className="lg:py-[72px] py-14 px-[5%]">
    <HeadingStyle2 name="Path to Mastery" name1="in Red Hat Linux" tinyText="Courses" space="pt-7" sizeLead="leading-[48px]" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" />
    <p className="font-[350] lg:leading-[27px] lg:text-lg text-justify text-[#1C1D20CC] mb-6">UIT-Red Hat Academy offers the first two courses covering the core system administration tasks needed to manage Red Hat Enterprise Linux servers:</p>
    <div className="w-full flex flex-col gap-6 ">
      {
        data.map(
          (a,index) => <Sector key={index} question={a.question} answer={a.answer} />
        )
      }
    
      
      

      </div>

    </div>
   

     


  
)

 
}



export default Section;