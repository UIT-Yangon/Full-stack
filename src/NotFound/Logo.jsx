import React from 'react';
import uitLogo from '../Images/UIT-Logo-big.png';
import styled from 'styled-components';



const Div = styled.div`
    background: url(${uitLogo});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    background-repeat: no-repeat;


`;

const Host = styled.div`

    height: calc(50vh - 123px);

    @media (max-width: 768px) {
    height: calc(70vh - 123px);
  }
`

function Logo(){
 
 
 
   
 


    
    
    return (
        
        <Host className="w-full flex justify-center items-center">
            
            <Div className="w-[233px] h-[208px] "></Div>

        </Host>
        
            
     
    )
}


export default Logo;