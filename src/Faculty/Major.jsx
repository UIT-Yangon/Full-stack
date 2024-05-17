import React,{useState,useEffect} from "react";
import './../Styles/Faculty.css';
import styled from 'styled-components';
import Img from '../Images/Faculty/CS/Trivia/Knowledge_Engineering.png'
import High from '../Images/Faculty/CS/Trivia/High_Performance_Computing.png'

export default function Major(){
    const [hideDiv, setHideDiv] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1024) {
            setHideDiv(true);
        } else {
            setHideDiv(false);
        }
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="majorSection py-[72px] px-[5%]">
            {!hideDiv && <DesktopSize/>}
            {hideDiv && <MobileSize/>}
        </div>
    )
}

const Div = styled.div`
    background: url(${Img});
    background-size: cover;
    object-fit: cover;
    background-position: center center;



    


`;

const Div2 = styled.div`
    background: url(${High});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
`;


    




function DesktopSize(){
    return(
        <div className="grid grid-cols-2 gap-8">
                <div className=" pt-[72px]">
                    <div className="leftMajor w-full">
                        <Div2 className="fakeImg w-full aspect-square"></Div2>
                        <h4>High Performance Computing (HPC)</h4>
                    </div>
                </div>
                <div className="rightMajorWrapper">
                    <div className="majorTitle">
                        <div className="majorSmallTitle">
                        <p className="flex-none text-[#3798a6] text-lg mb-2.5 w-[14px]">.</p>
                    <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Majors</p>
                        </div>
                        <h2>FCS offers two majors:</h2>
                    </div>
                    <div className="rightMajor w-full">
                        <Div className="fakeImg w-full aspect-square"></Div>
                        <h4>Knowledge Engineering (KE)</h4>
                    </div>
                </div>
            </div>
    )
}

function MobileSize(){
    return(
        <div className="majorContainer mobileSize w-full">
            <div className="majorTitle w-full">
                <div className="majorSmallTitle">
                    <p className="flex-none text-[#3798a6] text-lg  mb-2.5 w-[11px]">.</p>
                    <p className="text-xs text-[#1c1d20] opacity-50 font-normal leading-[18px]">Majors</p>
                </div>
                <h2 className="pt-[44px]">FCS offers two majors:</h2>
            </div>
            <div className="majorImgCon w-full">
                <div className="grid grid-col-1 w-full">
                    <Div2 className="w-full aspect-square bg-[#d9d9d9] rounded-[32px] mb-[12px]"></Div2>
                    <h4>High Performance Computing (HPC)</h4>
                </div>
                <div className="grid grid-col-1 w-full">
                    <Div className="w-full aspect-square bg-[#d9d9d9] rounded-[32px] mb-[12px]"></Div>
                    <h4>Knowledge Engineering (KE)</h4>
                </div>
            </div>
        </div>
    )
}