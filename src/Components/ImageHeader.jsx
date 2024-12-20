import styled from 'styled-components';
import img from '../Images/mainPhoto.png';


const Div = styled.div`
  background-image: url(${props => props.image});
  width: 111.5%;
  margin-left: -6%;
  object-fit: cover;
  margin-top: -5.5%;
  background-repeat: no-repeat;
  background-size: 100% 100%; /* Ensures the image covers the div */
  background-position: center; /* Centers the image within the div */
  opacity: 90%;
`;

const Div2 = styled.div`
  background: linear-gradient(180deg, rgba(217, 217, 217, 0) 41.1%, rgba(28, 29, 32, 0.8) 95.1%);
`;

function ImageHeader({name,name1, image = img}) {

    return (
      <Div className="py-[27.5px] lg:py-14 lg:px-97 relative h-[319px] md:h-[455px]" image={image}>
        <div className="absolute bottom-[70.5px] width-full left-[6%]">
        <h1 className=" w-full flex lg:flex-row flex-col relative  font-normal text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] text-[#ffffff]" style={{ zIndex: 1}}><span>{name}</span><span>{name1}</span></h1>
        </div>
        
        <Div2 className=" absolute top-0 w-full h-full z-0"></Div2></Div>
    );
  
   
  }
  
  export default ImageHeader;

//   font-family: Actor;
// font-size: 40px;
// font-weight: 400;
// line-height: 40px;
// text-align: left;



