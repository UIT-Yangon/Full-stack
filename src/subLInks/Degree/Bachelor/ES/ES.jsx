
import React,{useState,useEffect } from 'react';
import useResize from '../../../../utils/useResize';
import '../../../../Styles/Degree.css';
import Headline from '../../../../Components/Headline';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';

function HPC() {

  const windowWidth = useResize("Embedded Systems (ES)");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Headline title='Embedded Systems (ES)' MyanText='Embedded Systems (ES)'/>
      <div className='px-[5%]'>
        <BodyPart />
        
      </div>   
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
