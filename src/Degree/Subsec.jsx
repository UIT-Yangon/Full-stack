import '../Styles/Degree.css';
import {motion, AnimatePresence } from "framer-motion";

const discription = [
  {
    id: 0,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)"],
    title2: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","one"]
  },
  {
    id: 1,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)"],
    title2: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)"]

  },
  {
    id: 2,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","B.C.sc(Software Engineering)"],
    title2: ["B.C.sc(Software Engineering)","B.C.sc(Software Engineering)","theee"]

  },
]

function Subsec(props) {

  console.log(props)

  return (
    <div className="p-3">
        <div>
        {discription.map(
          (item) => (
            item.id === props.displayId)
             &&
             <AnimatePresence>
               <motion.div initial={{ x: 500, opacity: 0}} animate={{ x: 0, opacity: 1}} exit={{ y: 500, opacity: 0}}  transition={{  type: "spring", stiffness: 100,}}>
                <h1 className="my-3 pt-8 font-medium text-3xl leading-10  text-left degreeHead">{item.category1}</h1>
                <div className="px-6">
                  {item.title1.map((li) => (<li className="leading-9 font-medium text-lg smallLink ">{li} </li>))}
                  <h1 className="my-3 pt-8 font-medium text-3xl leading-10  text-left degreeHead">{item.category2}</h1>
                  <div className="px-6">
                  {item.title2.map((li) => (<li className="leading-9 font-medium text-lg smallLink ">{li} </li>))}
                  </div>

        </div>
               </motion.div>
          </AnimatePresence>)}    
        </div>
        
        
    </div>
  );
}

export default Subsec;

// font-family: Degular Display;
// font-size: 20px;
// font-weight: 500;
// line-height: 35px;
// letter-spacing: 0.06em;
// text-align: left;



