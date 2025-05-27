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
import Labs from './Labs';
import axios from '../../utils/axiosInstance';


function Faculty(){

    const windowWidth = useResize("Faculty of Computer Systems and Technologies");

    const header = [
        "Faculty of Computer Systems and Technologies",
        "(FCST)"
      ]

      const headerMobile = [
        "Faculty of Computer Systems ",
        "and Technologies(FCST)",
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
            .filter(staff => staff.department === "Faculty of Computer Systems and Technologies")
            .map(staff => ({
                id: staff.id,
                name: staff.name,
                title: staff.position,
                image: staff.image
            }));
    }

    const numText = "three";
    const faculty= "FCST";
    const infoText = "lorem ipsum";

    const desktopLeftRow = [
      {
        name: "Embedded Systems (ES)",
        image: High,
        link: "/academic/degree/bachelor/es"
      },
      {
        name: "Cyber Security (CSec)",
        image: High,
        link: "/academic/degree/bachelor/csec"
      }
    ]

    const desktopRightRow = [
      {
        name: "Communication and Networking (CN)",
        image: Img,
        link: "/academic/degree/bachelor/networking"
      }
    ]

    const mobile = [
      {
        name: "Embedded Systems (ES)",
        image: High,
        link: "/academic/degree/bachelor/es"
      },
      {
        name: "Communication and Networking (CN)",
        image: Img,
        link: "/academic/degree/bachelor/networking"
      },
      {
        name: "Cyber Security (CSec)",
        image: Img,
        link: "/academic/degree/bachelor/csec"
      }
    ]


 


 

    
    return (
        <div className='faculty overflow-x-hidden' style={{background:'#fff'}}>
            <UltiWrapper className='p-[5%]'>
                    <Headline header={header} headerMobile={headerMobile} />
                    <Vision />
                    <Major numText={numText} desktopLeftRow={desktopLeftRow} desktopRightRow={desktopRightRow} mobile={mobile} faculty={faculty} infoText={infoText}/>
                    <Labs />
                    <Member members={members} />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;