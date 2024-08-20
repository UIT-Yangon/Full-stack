const aims = ["To learn the networking fundamentals and infrastructure design","To offer equipment and facility to ensure proper use of equipment in hands-on experience (practice)", "To ensure Cisco Networking Academy student Access", "To pursue research topics in the broad area of computer communications and networks"]

const activities1 = ["Determine how a router will forward traffic based on the contents of a routing table",
"Explain how switching operates in a small to medium-sized business network",
"Use monitoring tools and network management protocols to troubleshoot data networks",
"Configure monitoring tools available for small to medium-sized business networks",
"Configure initial settings on a network device",
"Configure Ethernet switch ports",
"Implement VLANs",
"Implement static routing",
"Implement DHCP on a router",
"Implement network address translation (NAT)",
"Implement access control lists (ACLs) to filter traffic"]

const activities2 = ["Configure and troubleshoot routers and switches",
"Resolve common issues with routings in both IPv4 and IPv6 networks",
"Implement a WLAN in a small-to-medium network",
"Configure and troubleshoot network devices",
"Resolve common issues with data link protocols",
"Implement virtual private network (VPN) operations in a complex network"]

const activities3 = ["Understand network security principles as well as the tools and configurations available",
"Apply knowledge and skills to design, implement, and support network security"]

export default function Container1(){
    return(
        <div>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Project Goal</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The Faculty of Computer Systems and Technologies (FCST) support the Networking Lab to give the students an understanding of the principles behind the latest advances in computer network technology. FCST launched the Cisco Network Lab (“the Cisco Networking Academy Program”). Through the Academy Program, Cisco Network Lab provides the possibility of integrating a curriculum in computer networking that has been developed by Cisco as part of the institution’s educational offerings. The Networking Lab is also committed to ensuring the independent research capabilities and a wide range of knowledge.
            
            </p>
            <br/>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">The Aim of CISCO Networking Lab</h1>
            <ul className="list-disc px-5 mt-5">
                    {aims.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
            <br/>   
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Networking Fundamentals and Designing Infrastructure Courses</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The Networking Lab covers networking architecture, structure, and functions. The Lab introduces the foundation level as the principles and structure of IP addressing and the fundamentals of Ethernet concepts, media, and operations routers and switches in a small network. Students learn how to configure a router and a switch for basic functionality.<p className="pt-2">The Lab activities include:</p></p>
            <ul className="list-disc px-5">
                    {activities1.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The advanced level covers the architecture, components, and operations of routers and switches in larger and more complex networks. Students learn how to configure routers and switches for advanced functionality. The course enables students to understand the selection criteria of network devices and WAN technologies to meet network requirements.<p className="pt-2">The Lab activities include:</p></p>
            <ul className="list-disc px-5">
                    {activities2.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
            <br/>
            <h1 className="text-[#1e717d] lg:text-[32px] text-[18px] inline-block border-slate-400 border-b-4">Network Security Course</h1>
            <p className="lg:text-[20px] text-[16px] opacity-60 text-justify mt-5 ">
            The Network Security course provides the skill set and help meet the growing demand for network security professionals. The curriculum provides an introduction to the core security concepts and skills needed for the installation, troubleshooting, and monitoring of network devices to maintain the integrity, confidentiality, and availability of data and devices.<p className="pt-2">The Lab activities include:</p></p>
            <ul className="list-disc px-5">
                    {activities3.map((subj,index) => (
                        <li key={index} className="lg:text-[18px] text-[14px] opacity-70 py-1">{subj}</li>
                    ))}
            </ul>
        </div>
    )
}