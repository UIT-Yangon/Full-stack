import Img from '../Images/syllabus.png';
import MajorImg from './MajorImg';
import styled from 'styled-components'
const Pic = styled.div`

    background: url(${Img});
    background-size: cover;
    object-fit: cover;
    background-position: center center;  


    `;

function ImageSection() {

    const content = [
        "First year syllabus",
        "Second year syllabus",
        
    ]

    

    return (
      <div id="imagesection">
        <MajorImg />
        <div className=" w-full" id="">
        <div className="flex flex-row flex-wrap w-full justify-between">
            {content.map((item,index) => 
            
            <div className="relative w-[48%] mb-[8%] md:mb-[4%] " key={index}>
            <Pic className="w-[100%] h-[51vw] md:w-[100%] md:h-[24.1vw] lg:h-[18.3vw] rounded-[32px] bg-[#D9D9D9] opacity-70">
                

            </Pic>  
            
            </div>
            
            )}
            
        </div>

      </div>
      
      </div>
      
    );
  
   
  }
  
  export default ImageSection;


  // 