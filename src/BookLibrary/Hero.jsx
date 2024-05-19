
import HeroText from './Herotext';
function Hero() {
    return(
        <div className="grid w-full lg:grid-cols-2 grid-cols-1 gap-[84px] py-14 lg:py-[72px]">
            <div>
            <div className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square"></div>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
                <HeroText />
            </div>
        </div>
    )
}


export default Hero;