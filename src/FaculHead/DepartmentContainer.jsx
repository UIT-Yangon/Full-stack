import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import HeadingStyle1 from '../Components/HeadingStyle1';
import DepartmentData from './DepartmentData';





    
function DepartmentContainer
() {


  return(
    <div className="w-full grid grid-cols-1 lg:grid-cols-[0.36fr_1fr] lg:gap-x-32 gap-10 lg:py-[72px] py-14">
            <div className='flex flex-col lg:gap-y-[5em] '>
                <HeadingStyle1 name="UIT's four departments" tinyText="Departments" space="pt-[42px]" sizeLead="leading-[72px]" size="text-7xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" mb="mb-[20rem]" sticky={false}/>
                <h4 className='text-[#1c1d20]-400 lg:text-[24px] text-[16px] opacity-50 sm:mt-0 mt-[2.5rem] lg:mt-[4rem]'>Equipping students to lead and innovate in IT management globally.</h4>
            </div>
            <DepartmentData />
  </div>
  )

  

 
}

export default DepartmentContainer
;



