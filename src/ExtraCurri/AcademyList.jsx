import React from 'react';
import Cisco from '../Images/Academies/cisco.png';
import RedHat from '../Images/Academies/RedHat.png';
import Oracle from '../Images/Academies/Oracle.png';
import Aws from '../Images/Academies/aws.png';
import styled from 'styled-components';


const Academies = [
    {
        img: Cisco,
        name: 'Cisco Networking Academy'
    },
    {
        img: RedHat,
        name: 'Red Hat Academy'
    },
    {
        img: Oracle,
        name: 'Oracle Academy'
    },
    {
        img: Aws,
        name: 'Amazon Web Service Academy'
    }
]

const Div = styled.div`
background: url(${props => props.img});
background-size: cover;
object-fit: cover;
background-position: center center;

`;





 
    
function AcademyList() {

  return (
    <div className="w-full py-10 grid grid-cols-2 lg:gap-y-0 gap-y-[38px] lg:grid-cols-4 gap-x-4 lg:gap-x-[150px] lg:px-0 px-[5%]">
        {
            Academies.map(
                (academy, index) => <div key={index} className="w-full flex flex-col gap-y-2">
                    <Div img={academy.img} className="aspect-video w-full"></Div>
                    <h4 className="font-normal text-2xl lg:text-[32px] leading-7 lg:leading-9 text-center">
                        {academy.name}

                    </h4>



                </div>
            )
        }
       
    
    </div>
   
  );

 
}

export default AcademyList;