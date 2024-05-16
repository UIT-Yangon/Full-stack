import React from "react";


export default function RegistrationFees(){
    return(
        <div className="py-7 md:py-8 flex flex-col justify-around" id='fee'>
            <h3 className="capital mb-4 leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Registration fees</h3>   
            <div className="flex flex-col items-between ">
                <p style={{fontWeight:350}} className="text-[14px] md:text-[18px] leading-[24px] md:leading-[34px] text-[#1c1d20] opacity-80">Foreign participants - 200USD </p>
                <p style={{fontWeight:350}} className="text-[14px] md:text-[18px] text-[#1c1d20] opacity-80">Local participants - 200,000MMK </p>
            </div>
        </div>
    )
}