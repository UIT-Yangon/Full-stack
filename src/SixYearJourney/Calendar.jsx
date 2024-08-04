import React from 'react';
import Name from '../utils/Name';
import UltiWrapper from '../Components/UltiWrapper';
import PdfView from './PdfView';
import Headline from '../Components/Headline';

    
function SixYearJourney() {
  const title ="Six Year Journey";
  Name(title);
  const pdfFile = `${process.env.PUBLIC_URL}/UIT6YearsJourney.pdf`;
  
return (
  <>
    <UltiWrapper>
    <Headline title={title} MyanText={title}/>

      <div className='p-[5%]'>
      <PdfView file={pdfFile} />
      </div>
    </UltiWrapper>
  </>
)

 
}



export default SixYearJourney;