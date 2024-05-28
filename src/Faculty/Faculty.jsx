import '../Styles/Degree.css';
import '../Styles/Faculty.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Vision from './Vision';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import Major from './Major';
import Member from './Member';
import UltiWrapper from '../Components/UltiWrapper';

function Faculty(){

    const windowWidth = useResize("Computer Science");
 


 

    
    return (
        <div className='faculty' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline />
                    <Vision />
                    <Major />
                    <Member />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;