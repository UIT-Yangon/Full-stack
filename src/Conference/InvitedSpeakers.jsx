import React,{useState} from "react";
import {motion,AnimatePresence} from 'framer-motion';

export default function InvitedSpeakers() {

    const content = [
        ['General chair by','Prof. Daw Saw Sanda Aye','Rector'],
        ['General co-chair by','Prof. Daw Saw Sanda Aye','Rector'],
        ['Program chair by','Prof. Daw Saw Sanda Aye','Rector'],
        ['Program chair by','Prof. Daw Saw Sanda Aye','Rector'],
        
    ]

    return (
      <>
        <div className="py-7 md:py-8 w-full" id="invited">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Invited Speakers</h3>   
        <div className="flex flex-row gap-[15px] flex-wrap w-full justify-start">
            {content.map((item,index) => 
              <div className="w-[47.6%] md:w-[300px] flex justify-center gap-[10px] " key={index}>
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">{item[0]}</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">{item[1]}</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{item[2]}</p>
                </div>
              </div>
            )}
            
        </div>

        

      </div>
      </>
      
    );
  
   
  }

  