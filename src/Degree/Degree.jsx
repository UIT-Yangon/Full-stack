
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import Image from './Image';
import Text from './Text';
import Navbar from '../Nav/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className="main px-2">
      
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
