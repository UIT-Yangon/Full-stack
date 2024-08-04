
import React,{useState,useEffect } from 'react';
import useResize from '../../../../utils/useResize';
import '../../../../Styles/Degree.css';
import Headline from '../../../../Components/Headline';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';

function HPC() {

  const windowWidth = useResize("Knowledge Engineering (KE)");
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Headline title='Knowledge Engineering (KE)' MyanText='Knowledge Engineering (KE)'/>
      <div className='px-[5%]'>
        <BodyPart />
      </div>      
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
