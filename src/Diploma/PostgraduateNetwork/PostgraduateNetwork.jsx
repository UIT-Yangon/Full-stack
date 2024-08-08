


import '../..//Styles/Degree.css';
import useResize from '../../utils/useResize';
import UltiWrapper from '../../Components/UltiWrapper';
import Headline from '../../Components/Headline';
import Container1 from './Container1';


function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='Post Graduate Diploma in Network Engineering' MyanText='Diploma Programs'/>
            <div className='py-[5%] lg:px-[15%] px-[10%] flex flex-col gap-[30px] '>
                <Container1 />
            </div>
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
