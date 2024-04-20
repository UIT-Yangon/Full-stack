import '../Styles/Degree.css';
import { AnimatedText } from './../Degree/AnimatedText';


const header = [
  "Admissions information",
  "and requirements"
]

const headerMobile = [
  "Admissions",
  "information",
  "requirements"
]



    
function Headline() {

  return (
    <>
     <div className="hide hero ps-14 pt-64 lg:pt-72 lg:pb-24">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-6xl font-medium"
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero ps-4 pt-36 lg:pt-72">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="text-6xl font-medium"
     />
       </span>
       
 
)}

  </div>
  
    </>
  );

 
}

export default Headline;



