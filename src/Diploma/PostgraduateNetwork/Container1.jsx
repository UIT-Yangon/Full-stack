const paths = ["Network Engineer","Network Design Advisor","Infrastructure Support Engineer","Networking professionals","Telecommunication Engineer"]

export default function Container1(){
    return(
        <div>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[20px] inline-block border-slate-400 border-b-4">Post Graduate Diploma for Network Engineering Course</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The UIT Campus aims to offer a broad range of post graduate studies for the coming years. The postgraduate diploma programs for Web Engineering Courses and Network Engineering Courses have been offered since 2014-2015 academic year.<br/><br/>
            The Postgraduate Diploma program aims to impart the skill and knowledge to graduates who wish to broaden their knowledge in the subject they studied at undergraduate level. During the network engineering course, the students will receive <span className="font-semibold">internship</span> opportunities with an employer so they can get some really good experience in the workplace. Network Engineers are involved in the design and maintenance of the hardware and software necessary for a computer network. A network engineer is a highly specialized individual who deals with all aspects of networks and cloud computing. The course is a 10-month program including 12-week internship sessions.<br/><br/>
            
            </p>
            <h1 className="lg:text-[20px] text-[16px] opacity-60 font-semibold">Career</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The career paths best suited to a student who has got the post graduate diploma in network engineering course are:</p>
            <ul className="list-disc lg:py-5 px-5 pt-5">
                    {paths.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
                </ul>
        </div>
    )
}