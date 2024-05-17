import Img from '../../../Images/syllabus.png';
import styled from 'styled-components'
const Pic = styled.div`

    background: url(${Img});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

function Syllabus() {

    const content = [
        "First year syllabus",
        "Second year syllabus",
        "Third year syllabus",
        "Fourth year syllabus",
        "Fifth year syllabus"
    ]

    

    return (
      <>
        <div className="py-7 md:py-8 w-full" id="syllabus">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Syllabus</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {content.map((item) => 
            <>
            <div className="relative w-full md:w-[48%] mb-[32px] md:mb-[4%] ">
            <Pic className="w-[100%] h-[51vw] md:w-[100%] md:h-[24.1vw] lg:h-[18.3vw] rounded-[32px] bg-[#D9D9D9] opacity-70">
                

            </Pic>  
            <p className="absolute bottom-[3%] left-[6%] z-10 font-normal leading-[28px] text-[#1C1D20] text-base md:text-xl">{item}</p>
            </div>
            </>
            )}
            
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Syllabus;


  // 