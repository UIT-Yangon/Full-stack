import React from 'react';

import UltiWrapper from '../Components/UltiWrapper';
import ImageHeader from '../Components/ImageHeader';
import Body from './Body';
import Academy from './Academy';
import AcademyList from './AcademyList';
import CuroselDesktop from './Components/CuroselDesktop';
 
    
function Extracurri() {
//   const language = useSelector((state) => state.language.value);
//   const title = "Email Service";
//   const MyanText = "အီးမေးလ်ဝန်ဆောင်မှု";

//   const display = (language === "EN") ? title : MyanText;
//   const windowWidth = useResize(title);

//   const [dataFromNav, setDataFromNav] = useState(true);

//     const handleDataFromNav = (data) => {
//         setDataFromNav(data);
//     };

  return (
    <UltiWrapper className='p-[5%]'>
        <ImageHeader name="ExtraCurriculums"/>
        <Body />
        <div className="px-[5%] w-[112%] ms-[-6%] lg:py-[72px] rounded-[32px] bg-[#F0F8FF]">
          <CuroselDesktop />
        </div>
        <div className="py-14 lg:py-[72px] flex flex-col gap-y-8">
          <Academy />
          <AcademyList />

        </div>
        

         
      </UltiWrapper>
  );

 
}

export default Extracurri;