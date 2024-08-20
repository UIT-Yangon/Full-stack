import React from 'react';
import { useParams } from 'react-router-dom';
import CiscoLab from './../CiscoLab/CiscoLab';
import HardwareLab from './../HardwareLab/HardwareLab';
import EngLab from './../EngLab/EngLab'
import PhyLab from './../PhyLab/PhyLab'
import IOTLab from './../IOTLab/IOTLab';
import NotFound from '../../NotFound/NotFound';

const LabPage = () => {
  const { labType } = useParams();

  // Determine which lab component to render
  const renderLabComponent = () => {
    switch (labType) {
      case 'cisco-network-lab':
        return <CiscoLab labType={labType}/>;
      case 'hardware-lab':
        return <HardwareLab labType={labType}/>;
      case 'iot-lab':
        return <IOTLab labType={labType}/>;
      case 'english-lab':
        return <EngLab labType={labType}/>;
      case 'physics-lab':
        return <PhyLab labType={labType}/>
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      {renderLabComponent()}
    </div>
  );
};

export default LabPage;
