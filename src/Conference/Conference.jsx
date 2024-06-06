
import React,{useState,useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import Heading from './Heading';
import BodyPart from './BodyPart';
import UltiWrapper from '../Components/UltiWrapper';


function Conference() {

  
   
  const windowWidth = useResize("The 5th International Conference On Advanced Information Technologies (ICAT 2024)");

 
 



  
  return (
      <>
     <UltiWrapper>
     <Heading name="The 5th International Conference On Advanced Information Technologies (ICAT 2024)" />
      <BodyPart />
     </UltiWrapper>
      
      
          
      
    
    </>
    
  );
}

export default Conference;
