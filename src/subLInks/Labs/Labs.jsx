
import React,{useState,useEffect,createContext,useContext } from 'react';
// import useResize from '../../../../utils/useResize';
import './../../Styles/Degree.css';
import Heading from '../../Components/Heading';
import BodyPart from './BodyPart';
import { useLocation, useParams } from 'react-router-dom';
import UltiWrapper from '../../Components/UltiWrapper';
import {ddm} from './LabData/DDM';
import {hpc} from './LabData/HPC';
import {netsys} from './LabData/Netsys';
import {vision} from './LabData/Vision';
import {deepLearning} from './LabData/DeepLearning';



export const LabContext = createContext()



function Lab() {

  

//   const windowWidth = useResize("Software Engineering (SE)");
  const { pathname } = useLocation();
  const { labType } = useParams();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])

let lab;

switch (labType) {
  case 'ddmLab':
    lab = ddm();
    break;
  case 'hpcLab':
    lab = hpc();
    break;
  case 'netLab':
    lab = netsys();
    break;
  case 'visionLab':
    lab = vision();
    break;
  case 'deeplearningLab':
    lab = deepLearning();
    break;
  default:
    lab = <div>Lab not found</div>;
}




  
  return (
      <LabContext.Provider value={lab}>
        <UltiWrapper className='p-[5%]'>
        <Heading name={lab.name} />
        <BodyPart />
        </UltiWrapper>
          
      
    
    </LabContext.Provider>
    
  );
}

export default Lab;
