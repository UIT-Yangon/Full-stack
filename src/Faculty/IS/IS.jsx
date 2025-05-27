import '../../Styles/Degree.css';
import '../../Styles/Faculty.css';
import Headline from '../Components/Headline';
import Vision from './Vision';
import useResize from '../../utils/useResize';
import React, { useState, useEffect } from 'react';
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
import axios from '../../utils/axiosInstance';

function Faculty(){

    const windowWidth = useResize("Faculty of Information Science");

    const header = [
        "Faculty of Information Science",
        "(FIS)"
      ]

      const headerMobile = [
        "Faculty of Information",
        "Science(FIS)",
      ]


      const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'staff';

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [url]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    let members = [];
    if (Array.isArray(data?.data)) {
        members = data.data
            .filter(staff => staff.department === "Faculty of Information Science")
            .map(staff => ({
                id: staff.id,
                name: staff.name,
                title: staff.position,
                image: staff.image
            }));
    }

    const numText = "two";
    const faculty= "FIS";
    const infoText = "lorem ipsum";

    const desktopLeftRow = [
      {
        name: "Software Engineering (SE)",
        image: High,
        link: "/academic/degree/bachelor/se"
      }
    ]

    const desktopRightRow = [
      {
        name: "Business Information System (BIS)",
        image: Img,
        link: "/academic/degree/bachelor/bis"
      }
    ]

    const mobile = [
      {
        name: "Software Engineering (SE)",
        image: High,
        link: "/academic/degree/bachelor/se"
      },
      {
        name: "Business Information System (BIS)",
        image: Img,
        link: "/academic/degree/bachelor/bis"
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