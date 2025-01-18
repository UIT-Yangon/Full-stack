import React from "react";
import './../Styles/Frame4.css';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import styled from "styled-components";

const StyledContainer = styled.span`
    p {
        font-size: 1rem; /* equivalent to text-base */
        @media (min-width: 768px) {
            font-size: 1.125rem; /* equivalent to md:text-lg */
        }
        @media (min-width: 1024px) {
            font-size: 1.25rem; /* equivalent to md:text-xl */
        }
        text-align: left;
        letter-spacing: 0.05em; /* equivalent to tracking-wider */
        max-width: 530px; /* equivalent to lg:w-[530px] */
        color: #1c1d20ad !important;
       font-weight: 500;    
    }


    strong {
    color: #1c1d20c9!important;
    font-weight: 600;
    }


    ul {
        padding-left: 1.25rem; /* equivalent to pl-5 */
        list-style-type: disc;
         font-size: 1rem; /* equivalent to text-base */
        @media (min-width: 768px) {
            font-size: 1.125rem; /* equivalent to md:text-lg */
        }
        @media (min-width: 1024px) {
            font-size: 1.25rem; /* equivalent to md:text-xl */
        }
        text-align: left;
        letter-spacing: 0.05em; /* equivalent to tracking-wider */
        max-width: 530px; /* equivalent to lg:w-[530px] */
        color: #1c1d20ad !important;
       font-weight: 500;    
    }

    span.block {
        display: block;
        @media (min-width: 768px) {
            display: inline;
        }
    }
`;

function Frame7({requirement}){
    const language = useSelector((state) => state.language.value);
    let head1 = ["Requirements","ဝင်ခွင့်",];
    let head2 = ["for admissions","လိုအပ်ချက်များ"];
    const require = DOMPurify.sanitize(requirement);

    return (
        <div className=" md:max-w-screen-lg lg:pt-[80px] pt-[50px] pb-[80px] frame4 lg:max-w-full ps-4">
            <div className="frame3 mx-0 lg:mx-auto w-full  xl:pl-[10rem] xl:pr-[20rem]">
                <div className="frame1 mb-8">
                    <p className={(language == "EN") ? "font-light text-4xl md:text-6xl text-start leading-tight tracking-wide" : "font-light text-3xl md:text-5xl text-start leading-tight tracking-wide "}>{(language == "EN") ? head1[0] : head1[1] }<br/>{(language == "EN") ? head2[0] : head2[1]  }</p>
                </div>
                <div className="frame2 flex md:justify-end justify-start ">
                    <StyledContainer
            dangerouslySetInnerHTML={{ __html: require }}
        />
                    
                    {/* {(language == "EN") ? <p className=" text-base md:text-lg md:text-xl text-left tracking-wider lg:w-[530px] pale">The students are to get<span className="bold"> at least 450 marks</span>  in the Matriculation Examination to apply to the UIT. The candidates from all over Myanmar are applicable. The time to join this university is in <span className="bold">December</span>.<br/>
                    The basic requirements are:
                    <ul className="pl-5 list-disc">
                        <li><span className="bold">4 photographs </span>of the applicant</li>  
                        <li>copies and the original of the <span className="bold">applicant’s NRC </span>and copies of <span className="bold">parents’ NRC</span></li>  
                        <li>Copy and Original of <span className="bold block md:inline">Matriculation Exam Mark Receipt </span></li>
                    </ul>
                    </p> : 
                    <p className=" text-sm md:text-base md:text-lg text-left tracking-wider lg:w-[530px] pale">ကျောင်းသားများသည် UIT တွင်လျှောက်ထားရန် တက္ကသိုလ်ဝင်တန်းစာမေးပွဲတွင် အနည်းဆုံး <span className="bold">အမှတ် 450</span> ရရှိရမည်ဖြစ်သည်။ မြန်မာနိုင်ငံတစ်ဝှမ်းမှ ကိုယ်စားလှယ်လောင်းများ လျှောက်ထားနိုင်ပါသည်။ ဒီတက္ကသိုလ်တက်ရမယ့်အချိန်က <span className="bold">ဒီဇင်ဘာလ</span>ထဲမှာပါ။<br/>
                    အခြေခံလိုအပ်ချက်များမှာ-
                
                    <ul className="pl-5 list-disc mt-5">
                        <li>လျှောက်ထားသူ၏ <span className="bold">ဓာတ်ပုံ ၄ ပုံ</span></li>  
                        <li>လျှောက်ထားသူ၏ NRC မိတ္တူနှင့် မိဘများ၏ NRC မိတ္တူ</li>  
                        <li><span className="bold">တက္ကသိုလ်ဝင်တန်း စာမေးပွဲ</span> အမှတ်အသား ပြေစာ မိတ္တူနှင့် မူရင်း</li>
                    </ul>
                    
                </p>} */}


                </div>
            </div>
        </div>
    )
}

export default Frame7;