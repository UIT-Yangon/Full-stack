import styled from 'styled-components'
import Img from '../Images/researchLab.png';

const Pic = styled.div`

    background: url(${Img});
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const Container = styled.div`

    position: relative;
    width: 100%;
    height: 51vw;

    @media only screen and (min-width: 1024px) {
    
        height: 37.6vw;
    }
      

    
        


    `;

function MajorImg() {


  return (
        <div className="py-7" id="image">
            
            <Container>
            <Pic className="rounded-[32px]"></Pic>  
            </Container>
            
      
        </div>
         
  );
}

export default MajorImg;
