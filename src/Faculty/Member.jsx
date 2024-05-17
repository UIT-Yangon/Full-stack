import React from "react";
import styled from 'styled-components';
import Img1 from '../Images/Faculty/CS/Teachers/Teacher_1.png';
import Img2 from '../Images/Faculty/CS/Teachers/Teacher_2.png';
import Img3 from '../Images/Faculty/CS/Teachers/Teacher_3.png';
import Img4 from '../Images/Faculty/CS/Teachers/Teacher_4.png';
import Img5 from '../Images/Faculty/CS/Teachers/Teacher_5.png';

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



const Div = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    opacity: 70%;



    


`

const Div2 = styled.div`



`

export default function Member(){
    return(
        <div className="memberWrap py-[72px] pt-[80px]">
            <div className="member">
                <div className="memberTitle md:w-[506px] w-[253px]">
                    <div className="smallMemberTitle top-[-10px]">
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Members</p>
                    </div>
                    <h2 className="text-[36px] md:text-[72px] font-normal leading-[38px] md:leading-[72px]">Meet our lovely members</h2>
                </div>
                <Div2 className="grid gap-5 md:gap-8 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[5%]">
                    {members.map((img) => 
                    <>
                        <div className="memberImgCon w-full">
                        <Div className="rounded-[32px] aspect-[4/5] w-[100%]" image={img.image}></Div>
                        <div className="memberDetails">
                            <p>{img.name}</p>
                            <p>{img.title}</p>
                        </div>
                    </div>

                    </>)}
                    
                </Div2>
            </div>
        </div>
    )
}




// .memberImg{
//     width: 206px;
//     height: 257.75px;
// }

// .memberImg{
//     width: 288px;
//     border-radius: 32px;
//     height: 360px;
//     background-color: #d9d9d9!important; 
//  }