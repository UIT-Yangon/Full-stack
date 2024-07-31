import Image from '../../../Images/researchLab.png';
import Img2 from '../../../Images/syllabus.png';
import member1 from '../../../Images/Faculty/CS/Teachers/Teacher_1.png';


const data = {
    name: "High Performance Computing (HPC) Laboratory",
    date: "Updated on 04 May 2024",
    Img: [Image],
    paragraph : ["Nowadays, there are many research issues and challenges in high performance computing especially cloud. Cloud computing would seem to be high performance computing (HPC) user’s dream offering almost unlimited storage and instantly available and scalable computing resources, all at a reasonable metered cost. Many HPC applications require large amounts of data. Many clouds, even those that offer HPC features, cannot solve the problem easily.",'In HPC lab, the following research themes are being done such as data management, consistency control, high availability, resource allocation, scheduling and security in access control of cloud computing. Moreover, Fog-based experiments are done to provide low-latency and ubiquitously available computation offloading services with real-time data streaming analytics. The experiments of most of these research works are based on the simulation or modeling approaches. In some research works, the experiments will make on the setup cloud infrastructure in UIT.'],
    content : [
        "To provide a virtual learning environment for Lab tasks and projects",
        "To develop innovative ideas, algorithms, methods, frameworks and architectures for the interactive analysis and visualization of large and complex data sets",
        "To make performance analysis on high performance computing infrastructure and technologies",
        
        
    ],
    areas:  [
        "Security and Privacy",
        "Data Management",
        "Standardization of some NoSQL databases ",
        "Resource Allocation",
        "Task Scheduling",
        "Performance Analysis",
        
        
      ],
    currentWorks : [
        "Fog based Data Streaming in Higher Education",
        "IoT data streams are processed and analyzed using Fog computing layer",
        "Implementation of Context-Aware Notification System for High Education Institutions (Short Term Research Work)",
        
      ],
    completeWorks : [
        "Development of High Performance Infrastructures for service operations",
        "High Performance Big Data Computing and Analytics"
      ],
    
    members : [
        {
            name: "Dr. Aye Myat Myat Paing",
            subtitle: "Associate Professor, Faculty of Computer Science, HPC Lab Leader respective in Cloud Infrastructure",
            image: member1,
            degree: [
              {type: 'Bachelor Degree', subject: 'Computer Science (B.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2002'},
              {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2007'},
              {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2012'}
              
            ],
            interest: [
              'Virtualization Technology',
              'Distributed Computing',
              'Cloud Computing',
              'Fog Computing'
            ]
        },
        {
          name: "Dr. Myat Pwint Phyu",
          subtitle: "Associate Professor, Faculty of Computer Science, HPC Lab Leader respective in Big Data Computing and Analytics",
          image: member1,
          degree: [
            {type: 'Bachelor Degree', subject: 'Computer Science (B.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2004'},
            {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2008'},
            {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2013'}
            
          ],
          interest: [
            
            'Distributed Computing',
            'Cloud Computing',
            'Fog Computing',
            'Artificial Intelligence and Big Data Analytics'
          ]
      },
        
      ],

      publication: {
        prev : [
          {title:"Handling Imbalanced data in Convolutional Neural Network on Apache Spark", place:"the 14th International Conference on ICT Convergence", time:"October 2023"},
          {title:"Toward Context-aware Notification Service in Universities", place: "the 21st International Conference on Computer Applications (ICCA, 2024_IEEE)" , time: 'March 2024'},
          {title:"Semantic-based Big Data Integration with Apache Spark", place:"the 16th International Conference on Future Computer and Communication (ICFCC 2024), Phuket Island, Thailand", time: "June 2024"},
          {title:"Towards Infrastructure Automation using IaC in the era of GenAI", place:"the 16th International Conference on Genetic and Evolutionary Computing (ICGEC-2024)", time:"August 2024"},
          {title:"Impact of Imbalanced Data on Apache Spark", place:"he 16th International Conference on Genetic and Evolutionary Computing (ICGEC-2024)", time:"August, 2024"},
          ],

          upcoming : [
            {title:"More events are coming....", place:"", time:""},
            ]
      }

    }

export function hpc(){
    return data;
}