
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import useResize from '../utils/useResize';
import UltiWrapper from '../Components/UltiWrapper';

function App() {
    const windowWidth = useResize("Degree Programs");


 

  
  return (
      <>
      <UltiWrapper className="overflow-hidden p-[5%]">
      
          <Headline />
            <div className="w-[112%] ms-[-6%] bg-[#f0f8ff] h-fit text-[#ffffff] rounded-t-[32px] mb-[56px] lg:mb-[72px] overflow-hidden lg:mt-[72px] mt-14">
            <MainSec />
            <Trivia />
            </div>
          
          
      
    </UltiWrapper>
    </>
    
  );
}

export default App;
