
import React from 'react';
import '../Styles/Faq.css';
import '../Images/plus.svg';
import '../Images/minus.svg';
import Category from './Category';
import Question from './Question';
import Navbar from '../Components/Navbar';
import { motion, AnimatePresence } from "framer-motion"
import Footer from './Footer';







  





 


function Faq() {
  const quiz = [
    {id :  1,
      question: "When was the UIT founded?",
      answer: `The University of  Studies, Yangon was initially known as UCC, when it was established in 1971 but it changed into the Institute of Computer Science and Technology (ICST) in 1988. On 1st July, 1998, it became the University of Computer Studies, Yangon. There are currently altogether 25 Computer Universities around the country. The University of Computer Studies (Bahan Campus) was separately established on 3rd December, 2012, as the Center of Excellence to produce the competent computer professionals and specialists who will become invaluable human resources in ICT sector.
      
      The University was officially renamed the University of Information Technology (UIT) on 15th April, 2015. The University of Information Technology produces about 200 Undergraduate students every year. It also offers Undergraduate and Post-graduate courses for Bachelor, Diploma, Master’s and Doctorate level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system, communication and networking, embedded system and computer system technology. UIT is Myanmar’s main center of research in ICT that aim to promote the productivity and the standard of living of the nation.`
    },
    {id :  2,
      question: "How do I contact the University? What is the University's address and telephone number?",
      answer: "University of Information Technology\nParami Road, Hlaing Campus\nYangon\nThe Republic of the Union of Myanmar\n\nPhone : +95-1-9664254      +95-775994221       +95-774152166\n\nFax : +95-1-9664250\n\nEmail : contact@uit.edu.mm"
    },
    {id :  3,
      question: "What the requirements for the applicants?",
      answer: "The students are to get (at least 450 total marks)in the Matriculation Examination to apply the UIT. The candidates from the whole country are applicable to join this University. The time to join this university is in November.The basic requirements are:\n- 4 Photographs of Applicant\n- Copies and Original of NRC Information of Applicant and Parents-copy\n- Copy and Original of Matriculation Exam Mark Receipt\n- Letter of recommendation of Police Station\n - Letter of recommendation of quarter"  },
      {id :  4,
        question: "How long it will take for Graduate Program?",
        answer: "It will take five years to get a Bachelor’s Degree."  },
      {id :  5,
          question: "How many students are there in the University as of now?",
          answer: "Current, there are 1038 students now."  },

  ]
  return (
    <div className="App">
      <Navbar />
      <div className="my-20 mt-40 sm:ml-10 sm:mt-50 mb-15">
      <motion.span initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} className="text-6xl md:text-8xl  p-3.5 dd ">Frequently</motion.span>
      <motion.span initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} className="text-6xl md:text-8xl  p-3.5 dd">asked</motion.span>
      <motion.h3 className="text-6xl md:text-8xl w-50  p-3.5  "  initial={{ y: 50,opacity: 0 }} animate={{ y: 0,opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} >questions</motion.h3>
      </div>


      <div className="w-90 main">
      <div className="alignment"><Category name="General" /></div>
      {quiz.map(item => (
        <Question id={item.id} question={item.question} answer={item.answer} />
      ))}


    

      </div>
      
      
      
      

   
      <Footer />
    </div>
  );
}

export default Faq;
