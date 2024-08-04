
import React,{ useEffect } from 'react';
import '../../../../Styles/Degree.css';
import Headline from '../../../../Components/Headline';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';
import Name from '../../../../utils/Name';

function HPC() {

  Name("High Performance Computing (HPC)")
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Headline title='High Performance Computing (HPC)' MyanText='High Performance Computing (HPC)'/>
      <div className='px-[5%]'>
        <BodyPart />
        
      </div>   
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
