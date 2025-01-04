//This is for position Sticky things
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let url = process.env.REACT_APP_NEWS_IMAGE;

const Div = styled.div`
background: url(${props => props.image ? url+props.image : 'https://advisorretire.com/wp-content/plugins/pl-platform/engine/ui/images/default-landscape.png'});
background-size: cover;
object-fit: cover;
background-position: center center;
`;


function StickyProfile({data}) {
    return (

       
        
        <div className="h-fit w-[100%] lg:w-[80%] relative lg:sticky lg:top-[34px] flex flex-col items-center center my-14 lg:my-0">
            <Div className=" w-[288px] lg:w-[100%] aspect-square rounded-[32px]"  image={data.img}></Div>
            <div className=" w-[100%] mt-8 flex flex-col items-center gap-1">
                <h5 className="font-normal lg:leading-7 leading-[22px] lg:text-xl text-base">{data.name}</h5>
                <h5 className="font-normal lg:leading-7 lg:text-xl text-[#1C1D2080] leading-[22px] text-base">{data.title}</h5>
                <Link to={data.link} >
                <h5 className="font-normal lg:leading-[27px] leading-[21px] text-sm lg:text-lg text-[#1C1D20] decoration-solid underline text-center hoverMode bg-[#F8F8F8]">{data.faculty}</h5>
                </Link>
                


            </div>


            



        
        </div>
   
       
    )
}


export default StickyProfile;

