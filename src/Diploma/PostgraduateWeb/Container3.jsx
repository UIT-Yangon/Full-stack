const subjects1 = ["Web System Development","Operation System Management","Basic Web Programming","Human Computer Interaction","Database Design and Development","Client-Side Web Programming","Ajax and Web Service","Advanced Web Programming (PHP, Joomala)"]

const subjects2 = ["Web System Design Architecture","Project Management","Advanced Web Programming using Java Technology (MVC, Multi-tier , OR Mapping)","E-Business Technique","Performance Computing","Android Application Development","Internal Project (Individual & Group)","12-week paid Internship"]

export default function Container3(){
    return(
        <div >
            <h3 className="mt-5 lg:text-[20px] text-[16px] opacity-80">The faculty of UIT offers post graduate diploma in the following subjects:</h3>
            <div className="flex justify-between lg:flex-row flex-col">
                <ul className="list-disc lg:py-5 px-5 pt-5">
                    {subjects1.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
                </ul>
                <ul className="list-disc lg:py-5 px-5 pb-5">
                    {subjects2.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1 ">{subj}</li>
                    ))}
                </ul>
            </div>
            <h3 className="mt-5 lg:text-[20px] text-justify text-[16px] opacity-80">The students participate in a 12-week supervised internship in a well-known IT-related company to apply what they have learned in a real-world setting. Internships are paid. The internship coordinator will work together with students to secure the best internship.</h3>
        </div>
    )
}