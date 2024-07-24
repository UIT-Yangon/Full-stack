import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import icon1 from './../Images/MonthlyPrice.svg';
import icon2 from './../Images/availableRoom.svg';
import icon3 from './../Images/roomIcon.svg';
import icon4 from './../Images/totalRoom.svg';

const Inledata = [
    { img: icon1, title: 'Monthly Price', value: '10000 MMK' },
    { img: icon3, title: 'Room Type', value: 'Twin' },
    { img: icon4, title: 'Total Rooms', value: '400+' },
    { img: icon2, title: 'Available Rooms', value: '30+' },
];

const Thazindata = [
    { img: icon1, title: 'Monthly Price', value: '10000 MMK' },
    { img: icon3, title: 'Room Type', value: 'Twin' },
    { img: icon4, title: 'Total Rooms', value: '300+' },
    { img: icon2, title: 'Available Rooms', value: '20+' },
];

export default function HostelInfo() {
    const [isThazin, setIsThazin] = useState(false);

    const handleArrowClick = () => {
        setIsThazin(!isThazin);
    };

    const data = isThazin ? Thazindata : Inledata;
    const hostelName = isThazin ? 'Thazin Hostel' : 'Inle Hostel';
    const arrowIcon = isThazin ? faArrowLeft : faArrowRight;

    return (
        <div>
            <h3 className="xl:text-[64px] text-[35px] text-[#3798a6]">Hostel Info</h3>
            <div className='relative py-[56px]'>
                <AnimatePresence mode='exit'>
                    <motion.h4
                        key={hostelName}
                        className='md:text-[32px] text-[25px] opacity-50 absolute right-[25%] md:top-0 top-[50%] '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {hostelName}
                    </motion.h4>
                </AnimatePresence>
                <div className="md:grid md:grid-cols-4 flex flex-col items-center justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[288px] md:h-[377px] h-[300px] justify-around mb-5 mt-5">
                            <div className='h-[200px] flex justify-center items-center'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[#3798a6] md:text-[32px] text-[25px]'>{item.title}</h4>
                                <h4 className='text-[#1c1d20] opacity-50 md:text-[32px] text-[25px]'>{item.value}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <motion.div
                    className='absolute top-[50%] bg-[#f0f8ff] cursor-pointer p-[10px] flex justify-center items-center rounded-full right-0'
                    animate={{ rotate: isThazin ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleArrowClick}
                >
                    <FontAwesomeIcon icon={arrowIcon} />
                </motion.div>
            </div>
        </div>
    );
}
