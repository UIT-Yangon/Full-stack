import UltiWrapper from "../Components/UltiWrapper";
// import Benefits from "./Benefits";
// import CuroselDesktop from "./CuroselDesktop";
import FirstPara from "./FirstPara";
import Headline from "../Components/Headline";
import CarouselSlider from "./CarouselSlider";
import SecPara from "./SecPara";
import HostelInfo from "./HostelInfo";
// import Upcoming from "./Upcoming";

function Alumni(){
    return (
        <div className="accommodation">
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
            </UltiWrapper>
        </div>
    )
}

export default Alumni;