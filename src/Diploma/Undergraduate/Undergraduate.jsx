
import '../..//Styles/Degree.css';
import useResize from '../../utils/useResize';
import UltiWrapper from '../../Components/UltiWrapper';
import Headline from '../../Components/Headline';
import Tables from './Tables';

function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='Under Graduate Diploma in Information Technology (Dip.IT)' MyanText='Diploma Programs'/>
            <Tables />
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
