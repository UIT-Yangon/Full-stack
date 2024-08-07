import React,{useState} from "react";
import { useStateContext } from "./StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function TitleCon(){
    const { showFirst, setShowFirst } = useStateContext();

    const handleClick = () => {
        setShowFirst(!showFirst);
    };

    return(
        <div className="titleCon lg:w-[346px] lg:h-[92px] w-[261px] h-[76px] rounded-[20px] p-[8px] pb-[4px] md:pb-[40px] flex gap-[16px] mb-3 flex-row justify-center">
            <div className={`rectangle ${showFirst?'visionWrap':'missionWrap'} w-[113px] h-[60px] lg:w-[152px] lg:h-[76px]`}></div>
            <div className={`w-[50%] items-center lg:leading-[90px] leading-[70px] z-10 ${showFirst?'':'cursor-pointer'}`} onClick={handleClick}>
                <div className="w-full ps-[15px] lg:ps-[24px]">
                <FontAwesomeIcon className="md:w-[20px] md:h-[20px] w-[16px] h-[16px] inline-block  me-[8.67px]  mt-[-7px]" icon={faBullseye} style={{color:'#3798a6'}} />
                <span className={`${showFirst?'':'cursor-pointer'} lg:text-xl leading-7 font-normal text-base `}>Goal</span>
                </div>
            
            </div>
            <div className={`w-[50%] items-center lg:leading-[90px] leading-[70px] z-10 ${showFirst?'cursor-pointer':''} `} onClick={handleClick}>
                <div className="w-full ps-[17px]  lg:ps-[29px]">
                <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[20px] md:h-[20px] w-[16px] h-[16px] inline-block  me-[8.67px]  mt-[-7px]">
<path d="M19.7313 1.17444C19.6848 0.958374 19.4712 0.744751 19.2544 0.698364C17.9967 0.428589 17.012 0.428589 16.0315 0.428589C11.999 0.428589 9.58082 2.58496 7.77548 5.42859H3.7046C3.06602 5.4292 2.31567 5.89246 2.02934 6.46314L0.0982664 10.323C0.0385895 10.4546 0.0052086 10.5967 0 10.7411C8.97915e-05 10.9897 0.0989219 11.2282 0.274767 11.404C0.450612 11.5798 0.689075 11.6786 0.937727 11.6786H4.99282L4.11491 12.5563C3.67095 13.0001 3.60725 13.8163 4.11491 14.3239L6.10335 16.3124C6.53914 16.7494 7.35945 16.8263 7.872 16.3124L8.74991 15.4347V19.4911C8.75 19.7397 8.84883 19.9782 9.02468 20.154C9.20052 20.3298 9.43898 20.4286 9.68764 20.4286C9.8321 20.4232 9.97415 20.3899 10.1059 20.3303L13.9625 18.401C14.5339 18.116 14.9979 17.3658 14.9979 16.7268V12.6472C17.8338 10.8381 19.9993 8.4126 19.9993 4.40137C20.0029 3.41687 20.0029 2.43237 19.7313 1.17444ZM15.0016 6.99109C14.6926 6.99101 14.3905 6.89931 14.1336 6.72758C13.8767 6.55584 13.6765 6.31179 13.5583 6.02627C13.4401 5.74075 13.4092 5.4266 13.4695 5.12353C13.5299 4.82046 13.6787 4.54208 13.8972 4.3236C14.1158 4.10512 14.3942 3.95634 14.6973 3.89608C15.0003 3.83583 15.3145 3.86679 15.6 3.98506C15.8855 4.10334 16.1295 4.30361 16.3012 4.56055C16.4728 4.81749 16.5645 5.11957 16.5645 5.42859C16.5642 5.84298 16.3995 6.24033 16.1064 6.53331C15.8134 6.8263 15.416 6.99095 15.0016 6.99109Z" fill="#3798A6"/>
</svg>
                <span className={`${showFirst?'cursor-pointer':''} lg:text-xl leading-7 font-normal text-base`}>Mission</span>
                </div>
            
            </div>    

            
        </div>
    )
}

