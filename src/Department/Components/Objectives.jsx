import React from "react";
import SubjectOffer from '../../subLInks/Degree/Bachelor/Components/SubjectOffer';
import Head from "./Head";

const content = [
    "Development of the ability to solve experimental  problems on the basis of methods, processes and techniques commonly used in experimental physics",
    "",
    "Development of the ability to solve experimental  problems on the basis of methods, processes and techniques commonly used in experimental physics"
    
  ];


export default function Objectives(){
    return (
        <div className=" rounded-[32px] py-[56px] md:py-[72px] px-[5%] w-[112%] ms-[-6%] bg-[#F7F7F7]">
            <Head />
            <SubjectOffer title="Objectives"  content={content} svgType={2} headerStyle="lg:leading-[36px] leading-[28px]  lg:text-[32px] text-2xl text-[#3798A6]" space="mb-6"/>
            <div className="mt-[-48px]">
            <SubjectOffer title="Activities"  content={content} svgType={2} headerStyle="lg:leading-[36px] leading-[28px]  lg:text-[32px] text-2xl text-[#3798A6]" space="mb-6"/>
            </div>
            
            
        </div>
      
    )
}