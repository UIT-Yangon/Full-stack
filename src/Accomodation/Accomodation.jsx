import UltiWrapper from "../Components/UltiWrapper";
// import Benefits from "./Benefits";
// import CuroselDesktop from "./CuroselDesktop";
import FirstPara from "./FirstPara";
import Headline from "../Components/Headline";
import CarouselSlider from "./CarouselSlider";
import SecPara from "./SecPara";
import HostelInfo from "./HostelInfo";
import Offer from "./Offer";
import TableConditioner from "./TableConditioner";
import ThirdPara from "./ThirdPara";
// import Upcoming from "./Upcoming";

function Alumni(){
    console.log(window.innerWidth)
    return (
        <div className="accommodation ">
            <UltiWrapper>
                <Headline title='Accommodation' MyanText='Accommodation'/>
                <div className="px-[5%]">
                    <FirstPara />
                    <CarouselSlider />
                </div>
                <SecPara />
                <div className="px-[5%]">
                    <HostelInfo />
                </div>
                <Offer />
                {window.innerWidth >= 1024 ? (<div className="px-[5%]">
                    <TableConditioner />
                </div>) : (<TableConditioner/>)}
                <ThirdPara/>
            </UltiWrapper>
        </div>
    )
}

export default Alumni;