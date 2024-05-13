import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Image from '../Degree/Image';
import Frame4 from './Frame4';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';

function Admission(){
    const windowWidth = useResize("Admissions information and requirements");
    

    
 
    const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

 

    
    return (
        <>
            <Navbar sendDataToParent={handleDataFromNav}/>
            
                <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'}>
                    <Headline />
                    <Image />
                    <Frame4 />
                    <Frame6 />
                    <Frame7 />
                </div>

            
        </>
    )
}


export default Admission;