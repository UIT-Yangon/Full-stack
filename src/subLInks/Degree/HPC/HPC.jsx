
import React,{useState,useEffect } from 'react';
import Navbar from '../../../Nav/Navbar';
import useResize from '../../../utils/useResize';
import '../../../Styles/Degree.css';
import Heading from './Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';

function HPC() {

  const windowWidth = useResize("High Performance Computing");
  const [dataFromNav, setDataFromNav] = useState(true);
  const [windowWide, setWindowWide ] = useState(0);
  const { pathname } = useLocation();

  const handleDataFromNav = (data) => {
      setDataFromNav(data);
  };

  useEffect(()=>{
    const handleResize = () => {
        setWindowWide(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    window.scrollTo(0, 0);
    return () => {
        window.removeEventListener('resize', handleResize); 
        
    }

},[pathname])
   


 

  
  return (
      <>
      <Navbar sendDataToParent={handleDataFromNav} />
      <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'} style={{ backgroundColor: "#FFFFFF"}}>
      <Heading name="High Performance Computing (HPC)" />
      <BodyPart />
      </div>
          
      
    
    </>
    
  );
}

export default HPC;
