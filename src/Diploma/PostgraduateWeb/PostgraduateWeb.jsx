
import '../..//Styles/Degree.css';
import useResize from '../../utils/useResize';
import UltiWrapper from '../../Components/UltiWrapper';
import Headline from '../../Components/Headline';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';

function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='Post Graduate Diploma in Web Engineering' MyanText='Diploma Programs'/>
            <div className='py-[5%] lg:px-[15%] px-[10%] flex flex-col gap-[30px] '>
                <Container1 />
                <Container2 />
                <Container3 />
            </div>
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
