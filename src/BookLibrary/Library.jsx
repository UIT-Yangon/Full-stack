import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import Heading from '../Components/Heading';
import Hero from './Hero';
import RoleDiffer from './RoleDiffer';
import ImgPartDiffer from './ImgPartDiffer';
import ImgPartDiffer2 from './ImgPartDiffer2';
import MainFocus from './MainFocus';
    
function Library() {
  const language = useSelector((state) => state.language.value);

  

  const title = "Library";
  const MyanText = "စာကြည့်တိုက်";

  const display = (language == "EN") ? title : MyanText;
  const windowWidth = useResize(title);

  const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };


  return (
    <>
     <Navbar sendDataToParent={handleDataFromNav} />

     <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2 bg-[#ffffff]' : 'main px-2 bg-[#ffffff]'}>
      <Heading name="Step inside and let your study begin - at our library"/>
      <Hero />
      <MainFocus />
      <RoleDiffer />
      <ImgPartDiffer />
      <ImgPartDiffer2 />

       
    
    
    
    </div>
   
    
  
    </>
  );

 
}



export default Library

