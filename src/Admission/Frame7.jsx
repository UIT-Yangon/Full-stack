import React from "react";
import './../Styles/Frame4.css';

function Frame7(){
    return (
        <div className=" md:max-w-screen-lg lg:pt-[80px] pt-[50px] pb-[80px] frame4 lg:max-w-full ps-4">
            <div className="frame3 mx-0 lg:mx-auto w-full  xl:pl-[10rem] xl:pr-[20rem]">
                <div className="frame1 mb-8">
                    <p className="font-light text-4xl md:text-6xl text-start leading-tight tracking-wide">Requirements<br/>for admissions</p>
                </div>
                <div className="frame2 flex md:justify-end justify-start ">
                    <p className=" text-base md:text-lg md:text-xl text-left tracking-wider lg:w-[530px] pale">The students are to get<span className="bold"> at least 450 marks</span>  in the Matriculation Examination to apply to the UIT. The candidates from all over Myanmar are applicable. The time to join this university is in <span className="bold">December</span>.<br/>
                    The basic requirements are:
                    <ul className="pl-5 list-disc">
                        <li><span className="bold">4 photographs </span>of the applicant</li>  
                        <li>copies and the original of the <span className="bold">applicant’s NRC </span>and copies of <span className="bold">parents’ NRC</span></li>  
                        <li>Copy and Original of <span className="bold block md:inline">Matriculation Exam Mark Receipt </span></li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Frame7;