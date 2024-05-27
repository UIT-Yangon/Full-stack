import React,{useState} from 'react';
import {motion,AnimatePresence, spring} from 'framer-motion';

function OtherCommittie(){

    const people = {
      Organizing: [
        {id:1, name: 'Prof. Daw Saw Sanda Aye'},
        {id:2, name: 'Prof. Daw Saw Sanda Aye'},
        {id:3, name: 'Prof. Daw Saw Sanda Aye'}
      ],
      Program: [
        {id:4, name: 'Prof. Daw Saw Sanda Aye'}
      ]
    }

    const allPeople = [...people.Organizing, ...people.Program];

    

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    }

    const getCategoryData = () => {
      switch (selectedCategory) {
        case 'Organizing' :
          return people.Organizing;
          
        case 'Program' :
          return people.Program;
          
        default :
          return allPeople;
          
      }
    }

    const categories = [
      { name: 'All', count: allPeople.length },
      { name: 'Organizing', count: people.Organizing.length },
      { name: 'Program', count: people.Program.length },
    ];

    const categoryVariants = {
      hidden : {
        opacity : 0,
        x : '10%'
      },
      visible : {
        opacity : 1,
        x : 0,
        transition : {
          type : 'spring',
          delay : 0.2,
          duration : 0.3,
          stiffness : 300,
          damping : 15
        }
      },
      exit : {
        opacity : 0,
        x : '-10%',
        transition : {
          duration : 0.3
        }
      }
    }

    

    return (
      <div className="otherCommittie w-full flex flex-col gap-[10px] mt-5">
        <div className="Categories flex flex-row w-[90%] md:w-[50%] justify-between items-center mb-2">
          <p className="text-[#1c1d20] opacity-50 text-[12px] md:text-[16px]">Filter By:</p>
          {categories.map((category) => (
            <div className="relative px-3 md:px-4 cursor-pointer" key={category.name} onClick={()=>handleCategoryChange(category.name)}>
              <p className="text-[#1c1d20] text-[16px] md:text-[20px] " style={{ opacity: selectedCategory === category.name ? 1 : 0.5 }}>{category.name}</p>
              <span className="text-[#1c1d20] text-[8px] md:text-[12px] absolute" style={{right:0,top:0, opacity: selectedCategory === category.name ? 1 : 0.5 }}>({category.count})</span>
            </div>
            
          ))}
        </div>

        <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={categoryVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          
        >
                <ul className='w-full flex flex-row flex-wrap justify-start gap-[15px]'>
                  {getCategoryData().map(person => (
                    
                    <li key={person.id} className="w-[47.6%] md:w-[300px] flex items-center justify-center gap-[10px] ">
                        <div className="w-[50px] h-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                        <div className="flex flex-col">
                            
                            <p className="text-[10px] md:text-[16px] text-[#1c1d20]">{person.name}</p>
                            <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">Rector</p>
                        </div>
                    </li>
                    
                  ))}  
                </ul>
            </motion.div>
            </AnimatePresence>
      </div>
    )
  }

  
  
  
  export default OtherCommittie;