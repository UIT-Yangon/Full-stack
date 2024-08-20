import '../../Styles/Degree.css';
import '../../Styles/Faculty.css';
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
import Name from '../../utils/Name';
import ImageHeader from '../../Components/ImageHeader';
import Objectives from '../Components/Objectives';

import SubjectOffer from '../../subLInks/Degree/Bachelor/Components/SubjectOffer';
import Labs from './Labs';

function Faculty(){

    useResize();
    Name("Department of English");


    const header = [
        "Department of English",
        ""
      ]

      const content = [
        "Different levels of English Language Proficiency",
        "Different levels of English Language Proficiency",
        "Different levels of English Language Proficiency",
        
      ];

      const headerMobile = [
        "Department of English",
        "",
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
            <UltiWrapper className='p-[5%]'>
                    <ImageHeader name="Department of English" />

                    <Vision />
                    <div className="lg:py-10 py-7 ">
                    <SubjectOffer content={content} svgType={2}/>

                    </div>
                    
                    <Objectives />
                    <Labs />
                    <Member members={members} condition={1} />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;