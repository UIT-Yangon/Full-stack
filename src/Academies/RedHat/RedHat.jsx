

import React from 'react';
import UltiWrapper from '../../Components/UltiWrapper';
import Objective from './Objective';
import HeadPart from './HeadPart';
import Conclusion from './Conclusion';
import img from "../../Images/redHat.png";
import Section from './Section';



    
function RedHat() {

  const text = "The University of Information Technology has been accredited as Red Hat Academy for faculties and students to start learning journey with Red Hat. Red Hat Academy’s learning platform provides course contents, guided exercises, and Labs in a practical way. ";


  const objective = [
    {
      title: "Objective",
      list: ["To benefit students by offering comprehensive curriculum, hands-on instruction, immersive labs, and performance-based testing"]
    },
    {
      title: "Certified Examination",
      list: ["Red Hat Certified System Administrator (EX200)"]
    }
  ]

  const concluText = "As the first step of UIT- Red Hat Academy, Red Hat System administration I (RH124) course has started in 2022–2023 academic year. Then, Red Hat System administration I and II (RH124 and 134) and Getting Started with Linux Fundamentals 9.1(RH104) have started since 2023- 2024.";

  const section1 = [
    {
      question: "Getting Started with Linux Fundamentals 9.1",
      answer: "This course focuses on foundational Linux concepts and core tasks. It covers how to apply command-line concepts and enterprise-level tools, starting your journey towards becoming a full-time Linux system administrator."
    },
    {
      question: "Red Hat System Administration (RH124)",
      answer: "This course focuses on foundational Linux concepts and core tasks. It covers how to apply command-line concepts and enterprise-level tools, starting your journey towards becoming a full-time Linux system administrator."
    },
    {
      question: "Red Hat System Administration (RH134)",
      answer: "This course focuses on foundational Linux concepts and core tasks. It covers how to apply command-line concepts and enterprise-level tools, starting your journey towards becoming a full-time Linux system administrator."
    }
  ]


  

 
 
  
return (
  <>
    <UltiWrapper>
      <h1 className="px-[5%] font-normal lg:text-[80px] lg:leading-[80px] lg:py-[72px] py-14 text-[40px] leading-[40px]">Red Hat Academy</h1>
      <HeadPart text={text}/>
      <Section data={section1}/>
 
      <Objective data={objective}/>
      <Conclusion text={concluText} img={img}/>

     

    </UltiWrapper>
  </>
)

 
}



export default RedHat;