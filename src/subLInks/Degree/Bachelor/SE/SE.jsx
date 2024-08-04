
import React,{useState,useEffect } from 'react';
import useResize from '../../../../utils/useResize';
import '../../../../Styles/Degree.css';
import Headline from '../../../../Components/Headline';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';

function HPC() {

  const windowWidth = useResize("Software Engineering (SE)");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Headline title='Software Engineering (SE)' MyanText='Accommodation'/>
      <div className='px-[5%]'>
        <BodyPart />
      </div>
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
