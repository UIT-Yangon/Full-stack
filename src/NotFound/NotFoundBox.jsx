import React from 'react';
import { Link } from 'react-router-dom';



function NotFoundBox(){
 
 
 
 
 


    
    
    return (
        
        <div className="bg-[#FFFFFF] w-full h-[30vh] md:h-[50vh] flex justify-center items-center rounded-t-[32px]">
            <div className="flex flex-col items-center">
                <h1 className="lg:bigHeading bigHeadingMobile text-center text-[#3798A6]">404</h1>
                <h3 className="lg:first-line:normalHeading normalHeadingMobile text-center text-[#000000]  lg:mt-8 mt-7 mb-4">Page Not Found</h3>
                <h5 className="lg:lightText lightTextMobile text-center">The Page you are looking for is currently unavailable. 
               </h5>
                <h5 className="lg:lightText lightTextMobile text-center">
                We suggest you <span className="lg:text-lg text-sm leading-[21px] lg:leading-[27px] text-[#3798A6] underline underline-offset-1  "><Link reloadDocument to="/" id="navigation" >back to home</Link></span> or <span className="lg:text-lg lg:leading-[27px] text-sm leading-[21px] text-[#3798A6] underline underline-offset-1  "><Link reloadDocument to="/about/contacts" id="navigation" >contact us!</Link></span></h5>



            </div>
            



        </div>
        
            
     
    )
}


export default NotFoundBox;