
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import Image from './Image';
import Text from './Text';
import Navbar from '../Nav/Navbar';
import React,{useState,useEffect} from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataFromNav, setDataFromNav] = useState(true);

  const handleDataFromNav = (data) => {
      setDataFromNav(data);
  };

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []); 

  
  return (
      <>
          <Navbar sendDataToParent={handleDataFromNav}/>
          
          <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'}>
          
          <Headline />
          <Image />
          <Text />
          <MainSec />
          <Trivia />
      
    </div>
    </>
    
  );
}

export default App;
