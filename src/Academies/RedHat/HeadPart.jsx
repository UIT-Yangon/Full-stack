

import React from 'react';
import HeadingStyle2 from '../../Components/HeadingStyle2';
import {AnimationButton} from '../../Components/Footer';
import { Link } from 'react-router-dom';

    
function HeadPart({text}) {

  

 
 
  
return (
  <div className="lg:py-[72px] py-14 px-[5%]">

      <HeadingStyle2 name="Your journey with" name1="Red Hat Begins here" tinyText="About Red Hat" space="pt-7" sizeLead="leading-[48px]" size="text-5xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" />
      <p className="mb-6  lg:leading-[27px] leading-[21px] font-[350] lg:text-lg text-[#1C1D20CC] text-justify text-sm">{text}</p>
      <Link to="https://www.redhat.com/en/services/training/red-hat-academy">
        <AnimationButton value="Learn More about Red Hat" />
      </Link>
      

     


  </div>
)

 
}



export default HeadPart;