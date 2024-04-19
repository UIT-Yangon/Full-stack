import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Image from '../Degree/Image';

function Admission(){
    return (
        <>
            <Navbar/>
            <div className='main px-2'>
                <Headline/>
                <Image/>
            </div>
        </>
    )
}

export default Admission;