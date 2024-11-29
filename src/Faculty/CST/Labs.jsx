import Lab1 from './../../Images/sampleVisionLab.jpeg';
import Lab2 from './../../Images/sampleDDMLab.jpg';
import Lab3 from './../../Images/sampleMLLab.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const labs = [
    {src: Lab1, name: 'Hardware Lab', link: '/academic/academic-labs/hardware-lab'},
    {src: Lab2, name: 'Cisco Network Lab', link: '/academic/academic-labs/cisco-network-lab'},
    {src: Lab3, name: 'Internet of Things Lab', link: '/academic/academic-labs/iot-lab'},
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
        <div className="flex 2xl:flex-row flex-col  justify-between items-center mb-10">
            <h3 className="xl:text-[56px] text-[45px] xl:px-5 py-5">Academic Labs</h3>
            <div className="flex 2xl:flex-nowrap flex-wrap 2xl:justify-between gap-[20px] 2xl:gap-[2rem] 2xl:border-l-2 xl:ps-10">
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