import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';





const Div2 = styled.div``;
const url = process.env.REACT_APP_NEWS_IMAGE;
const Div = styled.div`
background: url("${props => `${url}${props.image}`}");
background-size: cover;
object-fit: cover;
background-position: center center;
opacity: 70%;`;


export default function Member({members,condition}){

 


    return(
        
        <div className="memberWrap py-[72px] pt-[80px]">
            <div className="member">
                <div className={`memberTitle md:w-[${condition ? "719px" : "506px"}] w-[${condition ? "360px" : "253px"}]`}>
                    <div className="smallMemberTitle top-[-10px]">
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Members</p>
                    </div>
                    <h2 className="text-[36px] md:text-[72px] font-normal leading-[38px] md:leading-[72px]">Meet our {condition ? "Department" : "Faculty"} members</h2>
                </div>
                <Div2 className="grid gap-5 md:gap-8 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {members.map((img,index) => 
                    <Link 
                        to="/about/staff"
                        state={{ id: img.id }} // <-- Correct way in React Router v6
                        key={index} // Pass data in the 'state' object
                      >
                    <div key={index}>
                        <div className="memberImgCon w-full">
                        <Div className="rounded-[32px] aspect-[4/5] w-[100%]" image={img.image}></Div>
                        <div className="memberDetails">
                            <p>{img.name}</p>
                            <p>{img.title}</p>
                        </div>
                    </div>

                    </div>
                    </Link>)}
                    
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