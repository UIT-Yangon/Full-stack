import '../Styles/Degree.css';
import { AnimatedText } from './AnimatedText';
import { AnimatePresence, motion,useInView } from 'framer-motion';
import { useRef } from "react";



function Text() {
  const TextRef = useRef(null);
  const isInView = useInView(TextRef, {amount: 0.8,once: true});

  return (
    <div className="text-section w-100 h-fit py-8 overflow-hidden fade">
      
      <AnimatePresence>
      <motion.p ref={TextRef} initial={{ opacity: 0, rotate: 2, y: 30 }} animate={{ rotate: isInView? 0: 2, opacity:isInView? 1: 0,y: isInView? 0: 30 }} transition={{ type: "spring", stiffness: 130 }} className="m-auto ps-4 md:w-4/6 md:ps-0 leading-8 sm:leading-10 font-thin text-[18px] sm:text-[24px] md:text-[28px] text-left tracking-wide"
>The University of Information Technology offers undergraduate and

postgraduate courses for bachelor’s, diploma, master’s, and doctoral level

students in a wide range of subject areas: software engi  neering, knowledge

engineering, high performance computing, business information system.</motion.p>
  

  </AnimatePresence>
    
      
      
      
    </div>
  );
}


export default Text;

