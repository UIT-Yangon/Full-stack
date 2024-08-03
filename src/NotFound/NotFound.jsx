import React from 'react';
import './../Styles/Faq.css';
import UltiWrapper from '../Components/UltiWrapper';
import Name from '../utils/Name';
import Resize from '../utils/useResize.jsx';
import Logo from './Logo';
import NotFoundBox from './NotFoundBox';



function NotFound(){
    Name("Not Found");
    Resize();
 
 
   
 


    
    
    return (
        

            <UltiWrapper footer={false}>
                <div className="w-full bg-[#F0F8FF]">
                <div className=" mx-auto flex flex-col md:w-3/4 w-11/12">
                    <Logo />
                <NotFoundBox />

                </div>

                </div>
                
                
                
            </UltiWrapper>
    
        
            
     
    )
}


export default NotFound;