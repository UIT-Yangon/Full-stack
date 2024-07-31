import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


function Publication({publication}){
    const {prev,upcoming} = publication;
   
    return (
        <div className="memberWrap py-[56px] " id="Publications">
            <div className="flex flex-col justify-center gap-5">
                <div className="relative">
                    {/* <div className="smallMemberTitle top-[-10px]">
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Members</p>
                    </div> */}
                    <h2 className="text-2xl md:text-[32px] font-normal">Publications</h2>
                    
                </div>
                <div className="previous">
                    <h3 className="text-xl md:text-[18px] font-normat opacity-50 pb-5">Previous</h3>
                    <div className="flex flex-col gap-10">
                    {prev.map((item,index) => (
                        <div key={index} className=" rounded-[32px] overflow-hidden shadow-sm ">
                        <div className="bg-[#f0f8ff] lg:py-[24px] lg:px-[32px] px-[16px] py-[12px] flex flex-col gap-5">
                        <div
                            className="flex lg:flex-row flex-col justify-between items-center gap-[10px]"    
                        >
                            
                                
                                
                                    <h2 className="text-[16px] lg:text-[20px] leading-[25px] text-[#3798a6] lg:w-1/4 lg:text-start text-center">{item.title}</h2>
                                    <div className="flex gap-3">
                                        <FontAwesomeIcon icon={faCalendar} className="text-[#3798a6] opacity-80 text-[16px]" />
                                        <p className="text-[#1c1d20] opacity-80 text-[12px] lg:text-[16px]">{item.time}</p>

                                    </div>
                                
                            
                            
                        </div>
                        <div
                            className="overflow-hidden"
                        >
                            <p className="text-[16px] lg:text-[20px] leading-[25px] text-[#1c1d20] lg:w-1/2 lg:text-start text-center">
                            {item.place}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>

                <div className="upcoming">
                    <h3 className="text-xl md:text-[18px] font-normat opacity-50 pb-5">Upcoming</h3>
                    <div className="flex flex-col gap-10">
                    {upcoming.map((item,index) => (
                        <div key={index} className=" rounded-[32px] overflow-hidden shadow-sm ">
                        <div className="bg-[#f0f8ff] lg:py-[24px] lg:px-[32px] px-[16px] py-[12px] flex flex-col gap-5">
                        <div
                            className="flex lg:flex-row flex-col justify-between items-center gap-[10px]"    
                        >
                            
                                
                                
                                    <h2 className="text-[16px] lg:text-[20px] leading-[25px] text-[#3798a6] lg:w-1/4 lg:text-start text-center">{item.title}</h2>
                                    <div className="flex gap-3">
                                        <FontAwesomeIcon icon={faCalendar} className="text-[#3798a6] opacity-80 text-[16px]" />
                                        <p className="text-[#1c1d20] opacity-80 text-[12px] lg:text-[16px]">{item.time}</p>

                                    </div>
                                
                            
                            
                        </div>
                        <div
                            className="overflow-hidden"
                        >
                            <p className="text-[16px] lg:text-[20px] leading-[25px] text-[#1c1d20   ] lg:w-1/2 lg:text-start text-center">
                            {item.place}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Publication;