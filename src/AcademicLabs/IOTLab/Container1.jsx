

const objectives = ["To create an environment for research, design, development and testing of IoT solutions.",
"To provide a large-scale IoT system for the collection of information from the environment and its transfer to a server.",
"To provide students unique interdisciplinary learning and innovation experiences with IoT technologies.",
"To make make environment in a safe, private and secure environment.",
"To connect the way between an enterprise’s requirement.",
]

const mission = ["To enable faculty learning, research and hands-on experimentation to discover and demonstrate the promise of the Internet of Things.",
    "To impart fundamental and advanced training on IoT to upcoming students."
]

const systems = [
    "Smart Car-parking System",
    "Flood Monitoring System",
    {
        name: "Smart Home System",
        subSystems: [
            "IoT based Temperature, Movement and Light Monitoring System for Smart Building",
            "IoT based Weather Monitoring System"
        ]
    }
];

const ListItem = ({ item }) => {
    if (typeof item === 'string') {
        return <li className="lg:text-[18px] text-[14px]  py-1">{item}</li>;
    }

    if (typeof item === 'object') {
        return (
            <li className="lg:text-[18px] text-[14px]  py-1">
                {item.name}
                <ul className="px-5 list-disc">
                    {item.subSystems.map((subSystem, index) => (
                        <ListItem key={index} item={subSystem} />
                    ))}
                </ul>
            </li>
        );
    }

    return null;
};

const SystemsList = () => {
    return (
        <ul className="px-5 mt-5 list-disc opacity-70">
            {systems.map((system, index) => (
                <ListItem key={index} item={system} />
            ))}
        </ul>
    );
};

export default function Container1(){
    return(
        <div>
            
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Mission</h1>
            <ul className="list-disc px-5 mt-5">
                    {mission.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
            <br/>   
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Objective</h1>
            <ul className="list-disc px-5 mt-5">
                    {objectives.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
            <br/>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Topics of Research</h1>
            <SystemsList />
        </div>
    )
}