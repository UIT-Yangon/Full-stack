
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import Image from './Image';
import Text from './Text';
import Navbar from '../Nav/Navbar';
import React,{useState} from 'react';
import useResize from '../utils/useResize';

function App() {
    const windowWidth = useResize("Degree Programs");
  const [dataFromNav, setDataFromNav] = useState(true);

  const handleDataFromNav = (data) => {
      setDataFromNav(data);
  };


 

  
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
