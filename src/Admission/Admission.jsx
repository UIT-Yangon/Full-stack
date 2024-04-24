import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Image from '../Degree/Image';
import Frame4 from './Frame4';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import React,{useState,useEffect} from 'react';

function Admission(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    
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