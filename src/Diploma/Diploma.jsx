
import '../Styles/Degree.css';
import useResize from '../utils/useResize';
import UltiWrapper from '../Components/UltiWrapper';
import Headline from '../Components/Headline';
import Programs from './Programs';

function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='Diploma Programs' MyanText='Diploma Programs'/>
            <Programs />
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
