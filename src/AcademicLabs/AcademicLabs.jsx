import UltiWrapper from "../Components/UltiWrapper";
import PaginatedItems from "./PaginatedItems";
import Headline from "../Components/Headline";

// import Upcoming from "./Upcoming";

function Alumni(){
    return (
        <div className="academiclabs">
            <UltiWrapper>
                <Headline title='Academic Labs' MyanText='Academic Labs'/>
                <div className="px-[5%]">
                    <PaginatedItems />
                </div>
                
            </UltiWrapper>
        </div>
    )
}

export default Alumni;