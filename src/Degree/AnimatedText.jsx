import '../Styles/Degree.css';
import { motion, useInView, useAnimation, Variant,AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";


const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    },
   
  }
  export const AnimatedText = ({
    text,el: Wrapper = "p", className}) => {
      const ref = useRef(null);
      const isInView = useInView(ref, {amount: 0.8, once: true});
      return (<Wrapper className={className}>
        <AnimatePresence>
        <motion.span ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}  transition={{ staggerChildren: 0.04 }} aria-hidden>
          {text.split(" ").map((word) => (
            <span className="inline-block">
            {word.split('').map(char => <motion.span className="inline-block" variants={defaultAnimations}>{char}</motion.span>)}
            <span className="inline-block">&nbsp;</span>
            </span>
          ))}
          </motion.span>
        </AnimatePresence>
        </Wrapper>)
  
    };