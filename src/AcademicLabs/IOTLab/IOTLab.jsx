


import '../..//Styles/Degree.css';
import useResize from '../../utils/useResize';
import UltiWrapper from '../../Components/UltiWrapper';
import Headline from '../../Components/Headline';
import Container1 from './Container1';
import LabsPhoto from '../RouteLabs/LabsPhoto';

function App({labType}) {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='Internet of Things Lab' MyanText='Internet of Things Lab'/>
            <div className='py-[5%] lg:px-[15%] px-[10%] flex flex-col gap-[30px] '>
                <Container1 />
                <LabsPhoto labType={labType} />
            </div>
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
