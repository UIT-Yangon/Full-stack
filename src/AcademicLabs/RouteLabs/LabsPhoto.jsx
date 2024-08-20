import { useParams,useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import cisco2 from './../../Images/CISCONetworkLabPhotos/Cisco_2.jpg';
import cisco4 from './../../Images/CISCONetworkLabPhotos/Cisco_4.jpg';
import cisco5 from './../../Images/CISCONetworkLabPhotos/Cisco_5.jpg';
import cisco6 from './../../Images/CISCONetworkLabPhotos/Cisco_6.jpg';
import cisco7 from './../../Images/CISCONetworkLabPhotos/Cisco_7.jpg';
import cisco8 from './../../Images/CISCONetworkLabPhotos/Cisco_8.jpg';
import cisco9 from './../../Images/CISCONetworkLabPhotos/Cisco_9.jpg';
import cisco10 from './../../Images/CISCONetworkLabPhotos/Cisco_10.jpg';
import cisco11 from './../../Images/CISCONetworkLabPhotos/Cisco_11.jpg';

import hardware1 from './../../Images/HardwareLabPhotos/HardwareLab_1.jpg';
import hardware2 from './../../Images/HardwareLabPhotos/HardwareLab_2.jpeg';
import hardware3 from './../../Images/HardwareLabPhotos/HardwareLab_3.jpg';
import hardware4 from './../../Images/HardwareLabPhotos/HardwareLab_4.jpg';
import hardware5 from './../../Images/HardwareLabPhotos/HardwareLab_5.jpg';
import hardware6 from './../../Images/HardwareLabPhotos/HardwareLab_6.jpg';

import iot1 from './../../Images/IOTLabPhotos/IoT-1-1.png';
import iot2 from './../../Images/IOTLabPhotos/IoT-2.png';
import iot3 from './../../Images/IOTLabPhotos/IoT-3.png';
import iot4 from './../../Images/IOTLabPhotos/iot1.png';
import iot5 from './../../Images/IOTLabPhotos/iot2-1.png';
import iot6 from './../../Images/IOTLabPhotos/iot2.png';
import iot7 from './../../Images/IOTLabPhotos/iot3.png';

import eng1 from './../../Images/EnglishLabPhotos/EnglishLab_1.jpg';
import eng2 from './../../Images/EnglishLabPhotos/EnglishLab_2.jpg';
import eng3 from './../../Images/EnglishLabPhotos/EnglishLab_3.jpg';
import eng4 from './../../Images/EnglishLabPhotos/EnglishLab_4.jpg';
import eng5 from './../../Images/EnglishLabPhotos/EnglishLab_5.jpg';

import phy1 from './../../Images/PhysicsLabPhotos/PhysicsLab_1.jpg';
import phy2 from './../../Images/PhysicsLabPhotos/PhysicsLab_2.jpg';
import phy3 from './../../Images/PhysicsLabPhotos/PhysicsLab_3.jpg';
import phy4 from './../../Images/PhysicsLabPhotos/PhysicsLab_4.jpg';
import phy5 from './../../Images/PhysicsLabPhotos/PhysicsLab_5.jpg';
import phy6 from './../../Images/PhysicsLabPhotos/PhysicsLab_6.jpg';




function LabsPhoto({labType}){
  const ciscoPics = [cisco2,cisco4,cisco5,cisco6,cisco7,cisco8,cisco9,cisco10,cisco11];
const hardwarePics = [hardware1,hardware2,hardware3,hardware4,hardware5,hardware6];
const engPics = [eng1,eng2,eng3,eng4,eng5];
const iotPics = [iot1,iot2,iot3,iot4,iot5,iot6,iot7];
const phyPics = [phy1,phy2,phy3,phy4,phy5,phy6];



let itemsData = [];

switch(labType){
  case 'hardware-lab':
    itemsData = [...hardwarePics];
    break;
  case 'cisco-network-lab':
    itemsData = [...ciscoPics];
    break;
  case 'iot-lab':
    itemsData = [...iotPics];
    break; 
  case 'english-lab':
    itemsData = [...engPics];
    break;
  case 'physics-lab':
    itemsData = [...phyPics];
    break;
}

console.log(labType)
console.log(itemsData)

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
    <div className='pt-[32px] pb-[45px] flex flex-col gap-[56px]'>
      <ul className='lg:grid lg:grid-cols-3 gap-[10px] flex flex-col'>
        {currentItems.map((item,index) => (
          <li key={index}>
            
              <img src={item} className='lg:h-[300px] h-[150px] w-full' />
            
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

  
}


export default LabsPhoto;

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