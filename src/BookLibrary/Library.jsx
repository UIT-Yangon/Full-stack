
import useResize from '../utils/useResize';
import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../Components/Heading';
import Hero from './Hero';
import RoleDiffer from './RoleDiffer';
import ImgPartDiffer from './ImgPartDiffer';
import ImgPartDiffer2 from './ImgPartDiffer2';
import MainFocus from './MainFocus';
import UltiWrapper from '../Components/UltiWrapper';
    
function Library() {
  // const language = useSelector((state) => state.language.value);

  

  const title = "Library";
  // const MyanText = "စာကြည့်တိုက်";

  // const display = (language == "EN") ? title : MyanText;
  const windowWidth = useResize(title);



  return (
    <>
     <UltiWrapper>
        <div className='p-[5%]'>
          <Heading name="Step inside and let your study begin - at our library"/>
          <Hero />
          <MainFocus />
          <RoleDiffer />
          <ImgPartDiffer />
          <ImgPartDiffer2 />
        </div>
     </UltiWrapper>
      

       
    
    
  
   
    
  
    </>
  );

 
}



export default Library

