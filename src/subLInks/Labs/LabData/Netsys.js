import Image from '../../../Images/researchLab.png';
import Img2 from '../../../Images/syllabus.png';
import member1 from '../../../Images/Faculty/CS/Teachers/Teacher_1.png';


const data = {
    name: "Network Systems (NETsys) Research Lab",
    date: "Updated on 04 May 2024",
    Img: [Image],
    paragraph : ['The rapid evolution of communication technologies necessitates the establishment of a dedicated Research Lab for advanced research, experimentation, and development in network systems. The Network Systems (NETsys) Research Lab is a research group affiliated with the Faculty of Computer Systems and Technologies (FCST) at the University of Information Technology. The NETsys Research Lab, designed to facilitate cutting-edge research in network protocols, security, and emerging technologies. The research lab serves as a hub for collaboration, innovation, and knowledge sharing in the field of network systems. Our research emphasis spans a wide range of theoretical and applied topics in big data analytics, software-defined network (SDN) architectures, Internet architecture, as well as system and network security. The NETsys Research Lab maintains a sustainable and innovative learning, teaching, and research environment as one of the missions of the university.'],
    content : [
        "To carry out innovative research in emerging technologies, security, and network protocols.",
        "To promote cooperation between academic, industrial, and research partners.",
        "To encourage the creation of creative answers to current networking problems.",
        "To contribute to the development of network systems-related knowledge and technology.",
        
    ],
    areas:  [
        "Examining the efficiency and security of new network protocols.",
        "Creating cutting-edge security solutions to safeguard crucial network   infrastructure.",
        "Examining the effects of edge computing and IoT on network architecture.",
        "Examining the possibilities of 5G and future technologies to improve network performance.",
        "Examining how SDN and NFV affect network administration and effectiveness.",
        "Analyzing the issues of big data processing in distributed computing environments",
        
      ],
    currentWorks : [
        "Blockchain Network Infrastructure Optimization",
        "Improved Data Management in Secure Blockchain Education Network (BEN)",
        "Accelerated Cryptographic Algorithm in Blockchain System Configuration Using CUDA Enabled GPUs",
        "Blockchain in Supply Chain Management System"
      ],
    completeWorks : [
        "Edge based Crime Assistance System with Cloud Computing",
        "Blockchain-Based Storage optimization on Hyperledger Fabric"
      ],
    
    members : [
        {
            name: "Dr. Nwe Nwe Myint Thein",
            subtitle: "Associate Professor, Head of the DDM Research Lab, Faculty of Computer Science",
            image: member1,
            degree: [
              {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2008'},
              {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Information Technology (Yatanarpon Cyber City), Myanmar - 2014'}
            ],
            interest: [
              'Modelling and Simulation',
              'Distributed Data Management',
              'Blockchain Security',
              'High Performance Computing Technology'
            ]
        },
        {
          name: "Dr. Dim En Nyaung",
          subtitle: "Lecturer, Faculty of Computer Science",
          image: member1,
          degree: [
            {type: 'Bachelor Degree', subject: 'Computer Science (B.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2005'},
            {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2010'},
            {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2016'}
          ],
          interest: [
            'Data Analytics',
            'Machine Learning',
            'Distributed System',
            'Cloud Computing',
          ]
        },
        {
          name: "Dr. Thet Thet Aung",
          subtitle: "Lecturer, Faculty of Computer Science",
          image: member1,
          degree: [
            {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Taungngu (UCST) in 2010'},
            {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2022'}
          ],
          interest: [
            'Social Network Analysis',
            'Blockchain',
            'Data Analytics',
            'High Performance Computing Technology'
          ]
        },
        {
          name: "Dr. Khin Su Su Wai",
          subtitle: "Lecturer, Faculty of Computer Science",
          image: member1,
          degree: [
            {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Taungngu (UCST) in 2010'},
            {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Information Technology (UIT), Yangon - 2023'}
          ],
          interest: [
            'Knowledge Discovery',
            'Blockchain',
            'Data Analytics',
            'Secure Data Communication'
          ]
        },
        {
          name: "Ma Khin Pyae Phyo San",
          subtitle: "Master Student, 4th Batch, High Performance Computing",
          image: '',
          degree: [],
          interest: [
            'High Performance Computing'
          ]
        },
        {
          name: "Mg Myo Thant Aung",
          subtitle: "Master Student, 5th Batch, Knowledge Engineering",
          image: '',
          degree: [],
          interest: [
            'Knowledge Engineering'
          ]
        }
      ],
       publication: {
        prev : [
          {title:"Performance Evaluation of Resource Allocation in Software Defined Network", place:"2023 IEEE Conference on Computer Applications (ICCA), Yangon, Myanmar", time:"27-28, February 2023"},
          {title:"Comparative Analysis of Coordinate Checkpoint Protocol in Real-time Messaging System", place: "     2023 International Conference on Communication and Computer Research, Daejeon Korea" , time: 'October 23-24, 2023'},
          {title:"Evaluation of Environmental Monitoring and Data Visualization", place:"2023 International Conference on Communication and Computer Research, Daejeon Korea", time: "October 23-24, 2023"},
          {title:"A Systematic Review: Big Data Analytics in Network Environment", place:"IEEE Conference on Computer Applications (ICCA), University of Computer Studies, Yangon, Myanmar", time:"March 16, 2024"},
          {title:"Investigation of Oversampling in IoT-IDS", place:"IEEE Conference on Computer Applications (ICCA), University of Computer Studies, Yangon, Myanmar", time:"March 16, 2024"},
          ],
    
          upcoming : [
            {title:"More events are coming....", place:"", time:""},
            ]
       }

    }

export function netsys(){
    return data;
}