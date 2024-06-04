import React,{useState} from "react";
import {motion,AnimatePresence} from 'framer-motion';

export default function InvitedSpeakers() {


    return (
      <>
        <div className="py-7 md:py-8 w-full" id="invited">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Invited Speakers</h3>   
        <div className="flex flex-row gap-[15px] flex-wrap w-full justify-between ">
            
              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Associate Professor.Jane Smith</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Deputy Head</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Oxford University Myanmar</p>
                </div>
              </div>

              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Professor.Sofia Davis</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Chair of Faculty</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Heidelberg University Germany</p>
                </div>
              </div>

              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Professor.Liam Anderson</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Deputy Head</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Rome Italy</p>
                </div>
              </div>
            
            
        </div>

        

      </div>
      </>
      
    );
  
   
  }

  