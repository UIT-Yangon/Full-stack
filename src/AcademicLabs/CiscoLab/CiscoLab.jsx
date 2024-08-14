


import '../..//Styles/Degree.css';
import useResize from '../../utils/useResize';
import UltiWrapper from '../../Components/UltiWrapper';
import Headline from '../../Components/Headline';
import Container1 from './Container1';
import PaginatedItems from './PaginatedItems';


function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper>
          
            <Headline title='CISCO Network Lab' MyanText='CISCO Network Lab'/>
            <div className='py-[5%] lg:px-[15%] px-[10%] flex flex-col gap-[30px] '>
                <Container1 />
                <PaginatedItems />
            </div>
      
          </UltiWrapper>
    </>
    
  );
}

export default App;
