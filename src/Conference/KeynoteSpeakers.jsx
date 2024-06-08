import React,{useState} from "react";
import {motion,AnimatePresence} from 'framer-motion';

export default function KeynoteSpeakers() {


    return (
      <>
        <div className="py-7 md:py-8 w-full" id="invited">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Keynote Speakers</h3>   
        <div className="flex flex-row gap-[15px] flex-wrap w-full justify-between">
            
        <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Professor.John Doe</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Head of Department</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Havard University USA</p>
                </div>
              </div>

              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Senior Lecturer.Michael Brown</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Research Lead</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Melbourne Australia</p>
                </div>
              </div>

              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Assistant Professor.Olivia Martinez</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Coordinator</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Barcelona Spain</p>
                </div>
              </div>
            
            
        </div>

        

      </div>
      </>
      
    );
  
   
  }

  