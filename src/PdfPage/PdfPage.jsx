import '../Styles/Faq.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import PdfView from './PdfView';
import Footer from './Footer';


function PdfPage(){

    const windowWidth = useResize("High Performance Computing (HPC)");
 
    const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

 

    
    return (
        <div className='pdfPage' style={{background:'#fff'}}>
            <Navbar sendDataToParent={handleDataFromNav}/>
            
                <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main' : 'main'} >
                    <Headline />
                    <PdfView/>
                </div>

            <Footer/>
        </div>
    )
}


export default PdfPage;