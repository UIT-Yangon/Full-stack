import '../../Styles/Degree.css';
import '../../Styles/Faculty.css';
import Headline from '../../Faculty/Components/Headline';
import Vision from './Vision';
import useResize from '../../utils/useResize';
import React from 'react';
import Member from '../../Faculty/Components/Member';
import UltiWrapper from '../../Components/UltiWrapper';
import Img1 from '../../Images/Faculty/CS/Teachers/Teacher_1.png';
import Img2 from '../../Images/Faculty/CS/Teachers/Teacher_2.png';
import Img3 from '../../Images/Faculty/CS/Teachers/Teacher_3.png';
import Img4 from '../../Images/Faculty/CS/Teachers/Teacher_4.png';
import Img5 from '../../Images/Faculty/CS/Teachers/Teacher_5.png';
import High from '../../Images/Faculty/CS/Trivia/High_Performance_Computing.png';
import Img from '../../Images/Faculty/CS/Trivia/Knowledge_Engineering.png';
import SubjectOffer from '../../subLInks/Degree/Bachelor/Components/SubjectOffer';
import Labs from './Labs';

function Faculty(){

    const windowWidth = useResize("Department of Physics ");

    const header = [
        "Department of Physics  ",
        ""
      ]

      const content = [
        "Mechanics (First Semester)",
        "Electromagnetism (Second  Semester)"
        
      ];

      const headerMobile = [
        "Department of ",
        "Physics ",
      ]


      const members = [
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img1
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img2
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img3
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img4
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img5
        }
    
    
    
    
    
    
    ]

    // const numText = "two";
    // const faculty= "FCS";
    // const infoText = "lorem ipsum";

    // const desktopLeftRow = [
    //   {
    //     name: "Software Engineering (SE)",
    //     image: High
    //   }
    // ]

    // const desktopRightRow = [
    //   {
    //     name: "Software Engineering (SE)",
    //     image: Img
    //   }
    // ]

    // const mobile = [
    //   {
    //     name: "Software Engineering (SE)",
    //     image: High
    //   },
    //   {
    //     name: "Business Information System (BIS)",
    //     image: Img
    //   }
    // ]


 


 

    
    return (
        <div className='faculty overflow-x-hidden' style={{background:'#fff'}}>
            <UltiWrapper className="p-[5%]">
                    <Headline header={header} headerMobile={headerMobile} />
                    <Vision />
                    <SubjectOffer content={content} />
                    <Labs />
                    <Member members={members} />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;