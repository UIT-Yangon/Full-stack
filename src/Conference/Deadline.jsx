import React from "react";

export default function Deadline(){

    


    return(
        <div className="py-7 md:py-8 flex flex-col justify-around" id="deadline">
            <h3 className="capital mb-5 leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Importance dates</h3>
            <div  className="flex justify-start gap-[15px] md:gap-[30px] items-center">
                
            <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="flex flex-col jusify-around items-center p-[20px] md:p-[24px] px-6 rounded-[15px] bg-[#f0f8ff]">
                    <h4 className="text-[21px] sm:text-[24px] md:text-[32px] text-[#1c1d20]">06</h4>
                    <p className="text-[10px] sm:text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Jaunary 2024</p>
                </div>
                <p className="text-[10px] sm:text-[12px] text-center md:text-[18px] text-[#1c1d20] opacity-50">Updated Deadline</p>
            </div>                                               

            <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="flex flex-col jusify-around items-center p-[20px] md:p-[24px] px-6 rounded-[15px] bg-[#f0f8ff]">
                    <h4 className="text-[21px] sm:text-[24px] md:text-[32px] text-[#1c1d20]">05</h4>
                    <p className="text-[10px] sm:text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Jaunary 2024</p>
                </div>
                <p className="text-[10px] sm:text-[12px] text-center md:text-[18px] text-[#1c1d20] opacity-50">Original Deadline</p>
            </div>       
                    
                  
            </div>
        </div>
    )
}