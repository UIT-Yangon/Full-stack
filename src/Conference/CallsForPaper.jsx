import { useEffect, useState } from 'react';
import useFetch from './../utils/useFetch.js';

function CallsForPaper() {

  // const {data,loading,error} = useFetch('http://localhost:4000/confrence/1','GET')
  // const url = "http://localhost:4000/confrence/1"

  // const [data,setData] = useState(null)

  // useEffect(()=>{
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(res => {console.log(res.name);return setData(res)})
  // },[url])




    const paragraph = ["We are pleased to invite submissions for the 5th International Conference on Advanced Information Technologies (ICAT 2024), to be held August 20-22, 2024, in UIT. This premier forum brings together leading researchers, academics, and industry professionals to exchange and explore innovative ideas, breakthrough technologies, and practical applications in the field of information technologies. We welcome original contributions in areas including, but not limited to, artificial intelligence, big data analytics, cloud computing, cybersecurity, IoT, machine learning, and software engineering. Authors are encouraged to present novel research findings, technological advancements, and case studies. Accepted papers will be published in the conference proceedings and indexed in major databases. Join us at ICAT 2024 to network, share insights, and drive the future of advanced information technologies."]

    return (
      <>
        <div className="py-7 md:py-8" id="callsforpaper">
          <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Call for paper</h3>   
            {/* or marign 20px */}
          <div>
              {paragraph.map((item,index) => <div key={index}><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[26px] text-left text-[#1c1d20b0]">{item}</p></div>)}
          </div>

        </div>
      </>
      
    );
  
   
  }
  
  export default CallsForPaper;

//styleName: p - mobile;
// font-family: Oldschool Grotesk;
// font-size: 14px;
// line-height: 20px;