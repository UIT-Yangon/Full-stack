
import React,{useState,useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import Heading from './Heading';
import BodyPart from './BodyPart';


function Conference() {

  const windowWidth = useResize("The 5th international conference on advanced information technologies (ICAT 2024)");
  const [dataFromNav, setDataFromNav] = useState(true);
  const [windowWide, setWindowWide ] = useState(0);

  const handleDataFromNav = (data) => {
      setDataFromNav(data);
  };

  useEffect(()=>{
    const handleResize = () => {
        setWindowWide(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize); 
    }

},[])
   

 

  
  return (
      <>
      <Navbar sendDataToParent={handleDataFromNav} />
      <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'} style={{ backgroundColor: "#FFFFFF"}}>
      <Heading name="The 5th international conference on advanced information technologies (ICAT 2024)" />
      <BodyPart />
      </div>
          
      
    
    </>
    
  );
}

export default Conference;
