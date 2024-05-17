import styled from 'styled-components'
import { useState } from 'react';
import React from 'react';
import { AnimatePresence,motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';


function NavBody2() {

    const [data, setData ] = useState(0);
    const [prev, setPrev ] = useState(0);
    const [appear, setAppear ] = useState(false);

    const links = [
        ["Overview","#overview"],
        ["Research lab","#image"],
        ["Offering subjects","#subjectOffer"],
        ["Career opportunities","#career"],
        ["Syllabus","#syllabus"],
    ]

    const Ball = styled.div`
        width: 10px;
        height: 100%;
        position: absolute;
        left: -9%;
        


    `;

    const Element = styled(motion.div)`
            background-color: #1C1D20;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            position: absolute;
            transition: all .1s ease-out;
        }

    `;

    const handleClick = (event,index) => {
        event.stopPropagation();
        setPrev(data);
        setData(index);
    }

    const handleAppear = (event) => {
        event.stopPropagation();
        setAppear(!appear);
    }

    console.log(appear)


    return (
      <>
      <AnimatePresence>
      {
        (appear) ?
        <motion.div className="p-[32px] rounded-[32px] bg-[#F5F5F5] relative z-100" initial={{ y: 1000}} key="navinavi" animate={{ y: (!appear) ? 1000 : 0 }} exit={{ opacity: 0,y: 1000 }}>
           <div className="flex flex-row justify-between align-middle"><h5 className="text-left leading-[18px] text-[#1C1D2080] font-normal text-base mb-5">Contents</h5><div className="hover:cursor-pointer" onClick={(event) => handleAppear(event)}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.27455 6L11.686 2.58852C12.1047 2.16989 12.1047 1.49114 11.686 1.07216L10.9278 0.313977C10.5092 -0.104659 9.83045 -0.104659 9.41148 0.313977L6 3.72545L2.58852 0.313977C2.16989 -0.104659 1.49114 -0.104659 1.07216 0.313977L0.313977 1.07216C-0.104659 1.4908 -0.104659 2.16955 0.313977 2.58852L3.72545 6L0.313977 9.41148C-0.104659 9.83011 -0.104659 10.5089 0.313977 10.9278L1.07216 11.686C1.4908 12.1047 2.16989 12.1047 2.58852 11.686L6 8.27455L9.41148 11.686C9.83011 12.1047 10.5092 12.1047 10.9278 11.686L11.686 10.9278C12.1047 10.5092 12.1047 9.83045 11.686 9.41148L8.27455 6Z" fill="#1C1D20"/>
</svg></div></div>
                <div className="relative">
                <Ball>
                    <Element index={data} initial={{ top: `${20*prev + 3}%` }} animate={{top: `${20*data + 3}%` }} ></Element>    
                </Ball> 
                <nav className="list-none flex-col text-left hover:cursor-pointer">
                    {links.map((li,index) =>
                        <HashLink style={{ margin: 0, marginBottom: '8px', padding: 0}}  smooth to={li[1]}  key={index} className="text-base font-normal leading-[18px] mb-[8px] text-[#1C1D20]" onClick={(event) => handleClick(event,index)}>{li[0]}</HashLink>)}
                </nav>
                </div>
    </motion.div>
    :
    <motion.div className="bg-[#f5f5f5] py-5 ps-8 w-[134px] h-[58px] rounded-[32px] fixed bottom-[4%] right-[6%]" initial={{ y: 1000}} key="content" animate={{ y: (appear) ? 1000 : 0 }} exit={{ opacity: 0,y: 1000 }}><h6 className="text-base font-normal leading-[18px] text-left text-[#1C1D2080] inline-block pr-[32px]"   onClick={(event) => handleAppear(event)}>Contents</h6></motion.div>
      }
      
      </AnimatePresence>
      
      </>
      
    );
  
   
  }
  
  export default NavBody2;



//   width: Hug (134px)px;
//   height: Hug (58px)px;
//   padding: 20px 32px 20px 32px;
//   gap: 20px;
//   border-radius: 32px 0px 0px 0px;
//   opacity: 0px;
  
