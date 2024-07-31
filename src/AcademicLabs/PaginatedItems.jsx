import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {Network,Vision,HPC,DDM,ML} from '../Images/Images';
import { motion } from 'framer-motion';
import './../Styles/Frame4.css'

const itemsData = [
  { id: 1, name: 'Hardware Lab', img: Network, labType: 'hardwareLab'},
  { id: 2, name: 'CISCO Network Lab', img: Vision, labType: 'ciscoNetworkLab' },
  { id: 3, name: 'K-Lab', img: HPC, labType: 'kLab' },
  { id: 4, name: 'Internet of Things Lab', img: DDM, labType: 'iotLab' },
  { id: 5, name: 'English Lab', img: ML, labType: 'engLab' },
  { id: 6, name: 'Physics Lab', img: Network, labType: 'physicsLab'}
  
];

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = itemsData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

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

  return (
    <div className='pt-[56px] pb-[72px] flex flex-col gap-[56px]'>
      <div className='relative '>
        <div className="absolute flex items-center top-0 md:left-[47%] left-[44%]">
            <span className="flex-none text-[#3798a6] text-lg me-[7sxan] lg:me-[10px] mb-2.5">.</span>
            <span className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Welcome</span>
        </div>
        <h1 className="text-[#1c1d20] text-center text-[20px] md:text-[36px] md:leading-[36px] md:pt-[3rem] pt-[2rem]">Commited <br/> to world-leading</h1>
        
      </div>
      <ul className='flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[30px] gap-x-[15px] justify-center w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px]'>
        {currentItems.map((item) => (
          <li key={item.id}>
            <Link to= {item.labType} >
              <div className='flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start'>
                <div className='2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[300px] rounded-[32px] cursor-pointer' style={{overflow: 'hidden'}}>
                  <motion.div
                    variants={variants}
                    initial='initial'
                    whileHover='hover'
                    className=' rounded-[32px] w-full h-full'
                    style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', aspectRatio: 16/9, objectFit: 'cover', backgroundPosition: 'center center'}}
                  >

                  </motion.div>
                </div>
                <div className='flex flex-col gap-[8px] '>
                  
                    
                  <h5 className='text-[#1c1d20]  md:text-[25px] text-[17px] ps-[5px]'>
                    {item.name}
                  </h5>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginatedItems;

const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;

  li {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;

    &.active a {
      background-color: #3798a6;
      opacity: .7;
      color: white;
    }

    @media (max-width: 640px) {
      margin: 0 1px;
    }

    a {
      width: 40px;
      height: 40px;
      text-decoration: none;
      color: #1c1d20;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding-top: 2px;

      &:hover {
        background: #3798a6;
        color: white;
        transition: all .3s ease-in-out;
      }

      &.disabled {
        color: #ddd;
        cursor: not-allowed;
      }

      @media (max-width: 640px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
      }
    }
  }

  .break-me {
    cursor: default;
  }
`;


