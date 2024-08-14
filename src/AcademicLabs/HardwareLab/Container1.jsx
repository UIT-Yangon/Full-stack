const labs = [
    {
        title: "Digital Circuits Lab",
        desc: "This lab is aimed for 1st Year students to get the practical knowledge for their Digital System Design I and Digital System Design II subjects."
    },
    {
        title: "Advanced Digital Circuit Lab",
        desc: "This lab is aimed for 4th Year (ES) students to design the digital system and understand the respective subject Digital System Design with VHDL."
    },
    {
        title: "Analog Circuit Lab",
        desc: "TThis lab is aimed for 2nd Year and 3rd Year students to understand the Engineering Circuit and Signals and Systems subjects well in practical approach and to make their own circuits."
    },
    {
        title: "Microcontroller Lab",
        desc: "This lab is aimed for 4th Year (ES) students for knowing Microcontroller Programming and Embedded System Architecture subjects well and make one own design."
    },
    {
        title: "Signal Processing Lab",
        desc: "This lab is aimed for 4th Year (ES) students for Digital Signal Processing subjects and 5th Year (ES) students for Image Processing subjects’ practical work."
    },
    {
        title: "Control System Lab",
        desc: "This lab is aimed for 4th Year (ES) students for Modern Control System and Applied Control System subjects’ practical work."
    },

]

export default function Container1(){
    return(
        <div>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[20px] inline-block border-slate-400 border-b-4">Kinds of Labs at Hardware Lab</h1>
            <div className="px-5">
            {labs.map((lab,index) => (
                <div className="mt-5" key={index}>
                    <h1 className="text-[#1e717d] lg:text-[24px] text-[18px] inline-block border-slate-400 border-b-2">{index+1}. {lab.title}</h1>
                    <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
                    {lab.desc}
                    
                    </p>
                </div>
            ))}
            </div>
        </div>
    )
}