import Lab1 from './../../Images/sampleVisionLab.jpeg';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const labs = [
    {src: Lab1, name: 'Physics Lab', link: '/academic/academic-labs/phy-lab'},
    
];

const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

export default function Labs(){
    return (
        <div className="flex 2xl:flex-row flex-col  justify-center items-center my-10">
            <h3 className="xl:text-[56px] text-[45px] 2xl:pr-20">Academic Labs</h3>
            <div className="flex 2xl:flex-nowrap flex-wrap 2xl:justify-between gap-[20px] 2xl:gap-[2rem] 2xl:border-l-2 2xl:pl-20">
                {labs.map((lab,index) => (
                    <Link to={lab.link} className='flex flex-col xl:gap-[5px]'>
                        <div className='2xl:w-[400px] xl:w-[380px] xl:h-[380px] w-[300px] h-[300px] rounded-[32px] cursor-pointer' style={{overflow: 'hidden'}}>
                  <motion.div
                    variants={variants}
                    initial='initial'
                    whileHover='hover'
                    className=' rounded-[32px] w-full h-full'
                    style={{backgroundImage: `url(${lab.src})`, backgroundSize: 'cover', aspectRatio: 16/9, objectFit: 'cover', backgroundPosition: 'center center'}}
                  >

                  </motion.div>
                </div>
                        <motion.h3 className='text-[25px] xl:text-start text-center'>{lab.name}</motion.h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}