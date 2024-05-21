import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


const header = [
  "Admissions information",
  "and requirements"
]


const headerMobile = [
  "Admissions",
  "information and",
  "requirements"
]



    
function Headline() {


  

  // const title = "Admissions infromation and requirements";
  // const MyanText = "Admissions infromation and requirements";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
    <div className="hide hero ps-14 pt-[8rem] lg:pb-24">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-[3.4rem] font-medium"
          language="EN"
          
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero ps-4 pt-[5rem] lg:pt-72">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="lg:text-7xl text-4xl font-medium"
       language="EN"
       
     />
       </span>
       
 
)}

  </div>
    </motion.div>
     
  
    </>
  );

 
}

export default Headline;



