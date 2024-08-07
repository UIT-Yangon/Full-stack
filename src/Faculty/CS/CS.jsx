import '../../Styles/Degree.css';
import '../../Styles/Faculty.css';
import Headline from '../Components/Headline';

import Vision from './Vision';
import useResize from '../../utils/useResize';
import React from 'react';
import Major from '../Components/Major';
import Member from '../Components/Member';
import UltiWrapper from '../../Components/UltiWrapper';
import Img1 from '../../Images/Faculty/CS/Teachers/Teacher_1.png';
import Img2 from '../../Images/Faculty/CS/Teachers/Teacher_2.png';
import Img3 from '../../Images/Faculty/CS/Teachers/Teacher_3.png';
import Img4 from '../../Images/Faculty/CS/Teachers/Teacher_4.png';
import Img5 from '../../Images/Faculty/CS/Teachers/Teacher_5.png';
import High from '../../Images/Faculty/CS/Trivia/High_Performance_Computing.png';
import Img from '../../Images/Faculty/CS/Trivia/Knowledge_Engineering.png'

function Faculty(){

    const windowWidth = useResize("Faculty of Computer Science");

    const header = [
        "Faculty of Computer Science",
        "(FCS)"
      ]

      const headerMobile = [
        "Faculty of computer",
        "science(FCS)",
      ]


      const members = [
        {
            name: "Dr. ",
            title: "Pro-rector & Dean",
            image: Img1
        },
        {
            name: "Dr. ",
            title: "Pro-rector & Dean",
            image: Img2
        },
        {
            name: "Dr. ",
            title: "Pro-rector & Dean",
            image: Img3
        },
        {
            name: "Dr. ",
            title: "Pro-rector & Dean",
            image: Img4
        },
        {
            name: "Dr. ",
            title: "Pro-rector & Dean",
            image: Img5
        }
    
    
    
    
    
    
    ]

    const numText = "two";
    const faculty= "FCS";
    const infoText = "lorem ipsum";

    const desktopLeftRow = [
      {
        name: "High Performance Computing (HPC)",
        image: High,
        link: "/academic/degree/bachelor/hpc"
      }
    ]

    const desktopRightRow = [
      {
        name: "Knowledge Engineering (KE)",
        image: Img,
        link: "/academic/degree/bachelor/ke"
      }
    ]

    const mobile = [
      {
        name: "High Performance Computing (HPC)",
        image: High,
        link: "/academic/degree/bachelor/hpc"
      },
      {
        name: "Knowledge Engineering (KE)",
        image: Img,
        link: "/academic/degree/bachelor/ke"
      }
    ]


 


 

    
    return (
        <div className='faculty overflow-x-hidden' style={{background:'#fff'}}>
            <UltiWrapper className='p-[5%]'>
                    <Headline header={header} headerMobile={headerMobile} />
                    <Vision />
                    <Major numText={numText} desktopLeftRow={desktopLeftRow} desktopRightRow={desktopRightRow} mobile={mobile} faculty={faculty} infoText={infoText}/>
                    <Member members={members} />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;