import React from "react";
import { useStateContext } from "./StateContext";
import { AnimatePresence, motion } from 'framer-motion';

const text = {
    mission: ["Provide a learning atmosphere to enhance innovations, problem solving skills, leadership qualities, team-spirit and ethical responsibilties.","Revise our curriculum yearly to be the quality education to meet the needs of profession and society.","Faster research-based projects/activities in the emerging areas of technology convergence.","Establish private-public partnership program to enhance the entrepreneurship skills","Educate our students with the quality of leadership skill and life-long learners."],
    vision: ["to become a center of excellence in teaching and research by building a strong research and teaching environment","to produce the highly qualified human resources as industry ready IT professionals and innovative leaders in the fields of computer science and the information technology related areas for the development of the country’s IT industry needs"]
}

export default function RightTextCon(){

    const { showFirst } = useStateContext();

    return(
        <div className="w-full">
            {showFirst ? 
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="vision" transition={{ duration: 0.5, ease: "linear"}} className="opacity-80 w-full list-disc ms-[16px]">
            {text.vision.map((item) => <>
            <div> <li className="mb-[10px] md:mb-[16px] w-full opacity-80"  >
                        <p className="text-sm md:text-lg font-[350px] leading-5 md:leading-6 text-[#1c1d20] opacity-80 ">{item}</p>
                        </li></div>
                           
                            
                            </>)}
            </motion.ul>:
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} key="mission" transition={{ duration: 0.5, ease: "linear"}} className="w-full list-disc ms-[16px] opacity-80">
            {text.mission.map((item) => <>
                            <li className="mb-[10px] md:mb-[16px] opacity-80"  >
                        <p className="text-sm md:text-lg font-thin leading-5 md:leading-6 text-[#1c1d20] opacity-80 ">{item}</p>    
                        </li>
                            
                            </>)}
            </motion.ul>}
            
           
        </div>
    )
}

