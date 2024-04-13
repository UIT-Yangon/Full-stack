import '../Styles/Degree.css';


const texts = [
  {
    head: "Program Highlight",
    body: "The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system."
  },
  {
    head: "Career",
    body: "The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system."
  },
  {
    head: "Career",
    body: "The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system."
  },
  {
    head: "Career",
    body: "The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, knowledge engineering, high performance computing, business information system."
  }
]

function Trivia() {

  return (
    <div className="h-fit lg:p-14 p-4 mx-auto triviaMain">
        <div className="trivia-container w-full">
            
              {texts.map((item) => (
                <>
                <div className="lg:w-1/2 w-full  mb-6">
                  <h1 className="font-medium text-xl sm:text-3xl leading-5 triviaHead  py-8  ">{item.head}</h1>
                  <p className="text-sxl sm:text-lg font-normal leading-8 sm:leading-10 w-full sm:w-5/6 opacity-80 tracking-wide">
                  {item.body}
                </p>
                </div>
                </>
                
                
              ))}
            
            </div>
        
            
            
       
    </div>
  );
}


export default Trivia;




// font-size: 20px;
// font-weight: 400;
// line-height: 35px;
// letter-spacing: 0.06em;



