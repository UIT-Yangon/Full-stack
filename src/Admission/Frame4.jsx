import React from "react";
import './../Styles/Frame4.css';

function Frame4(){
    return (
        <div className="lg:max-w-screen-lg md:max-w-screen-md py-8 frame4 lg:max-w-full ps-4">
            <div className="frame3 mx-auto w-full md:w-4/5 lg:w-3/4 lg:px-14">
                <div className="frame1 mb-8">
                    <p className="font-light text-5xl md:text-6xl text-start leading-none md:leading-tight tracking-wide">Step into UIT <br/>your new home</p>
                </div>
                <div className="frame2 flex md:justify-end justify-start ">
                    <p className="font-light text-lg md:text-xl opacity-80 text-left tracking-wider w-[530px]">UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfill their academic ambitions, intellectual passions and the ones who want to be IT Professionals can come to our university. If it sounds good and interesting to you, UIT is the right choice for your future.</p>
                </div>
            </div>
        </div>
    )
}

export default Frame4;