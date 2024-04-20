import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Image from '../Degree/Image';
import Frame4 from './Frame4';

function Admission(){
    return (
        <>
            <Navbar/>
            <div className='main px-2'>
                <Headline/>
                <Image/>
                <Frame4/>
            </div>
            
        </>
    )
}

export default Admission;