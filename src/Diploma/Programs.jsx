import { motion, spring } from "framer-motion"

export default function Programs(){
    return(
        <motion.div className="p-[5%]" initial={{x: '-100%'}} animate={{x: 0, transition: {duration: 1}, }}>
            <h3 className="pt-5 text-[#077d81] md:text-[32px] text-[24px] border-b-4 border-[#a0a0a0] md:w-[50%] w-[90%] xl:w-[30%]">Post Graduate Diploma</h3>
            <ul className="list-disc p-5">
                <motion.li className="py-2 md:text-[20px] text-[16px]" initial={{color: '#1c1d20'}} whileHover={{color: '#077d81',cursor: 'pointer'}}>Post Graduate Diploma in Web Engineering</motion.li>
                <motion.li className="py-2 md:text-[20px] text-[16px]" initial={{color: '#1c1d20'}} whileHover={{color: '#077d81',cursor: 'pointer'}}>Post Graduate Diploma in Network Engineering</motion.li>
                
            </ul>
        </motion.div>
    )
}