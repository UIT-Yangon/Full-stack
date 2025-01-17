import React,{useState,useEffect } from 'react';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import UltiWrapper from '../Components/UltiWrapper';
import { Link } from 'react-router-dom';

import axios from '../utils/axiosInstance';
import FacultyContainer from './FacultyContainer';
import DepartmentContainer from './DepartmentContainer';



function FaculHead() {



 
 


  
  return (
      <div className='FaculHead '>
      <UltiWrapper className='p-[5%]'>
        
          <FacultyContainer/>
          
          <DepartmentContainer />
     </UltiWrapper>
      
      
          
      
    
    </div>
    
  );
}

export default FaculHead;
