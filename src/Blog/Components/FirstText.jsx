import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { AnimationButton } from '../../Components/Footer';

function FirstText() {


   

    return (
        <div className="lg:w-[255px] w-[226px]">
            <div className=" relative w-full  pt-[38px] mb-6">
        <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">The news</li>
        </ul>
        <h3 className="font-normal leading-[38px] lg:leading-[48px] text-4xl lg:text-5xl w-full">You might also like</h3>

        

       

    </div>
    <div className="lg:scale-100 scale-70"> <AnimationButton value='News Overview' /></div>
   

        </div>
     
      
    );
}

export default FirstText;



