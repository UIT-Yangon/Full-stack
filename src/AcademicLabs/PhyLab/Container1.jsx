
const experiments = [
    "Spectrometer",
    "Hooke’s Law Experiment",
    "Determination of Densities of Liquids Experiment",
    "Ohm’s Law and Equivalent Resistance",
    "Sonometer Experiment",
    "Joule’s Law Experiment (Electrical Equivalent of Heat)",
    "Magnetic Field"
];


export default function Container1(){
    return(
        <div>
            
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Project Goal</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            In 2017-2018 academic year, the following experiments were demonstrated for the first year students at the Physics Laboratory.</p>
            <ul className="list-disc px-5">
                    {experiments.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
        </div>
    )
}