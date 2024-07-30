import React from 'react';
import styled from 'styled-components';
import TextGp from './TextGp';

const Div = styled.div`
background-color: #D9D9D9;
    background-size: cover;
    object-fit: cover;
    background-position: center center;

`;


 
    
function Body() {

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 lg:gap-x-[48px] lg:py-[72px] py-14">
        <Div className="w-full rounded-[32px] aspect-square">
        </Div>
        <div className="w-full flex justify-center items-center">
            <TextGp />

        </div>

    </div>
   
  );

 
}

export default Body;