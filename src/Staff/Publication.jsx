import Head from './Layout/Head';
import dateConvert from '../utils/dateConvert';
    
function Publication({data}) {

  function cutAtFirstSpace(input) {
    if (typeof input !== 'string') {
        throw new Error("Input must be a string.");
    }

    // Use split to cut at the first space
    return input.split(' ')[0];
}


    return (
      <div className="my-8"> 
          <Head heading="Publication" />
          {data.map((a,index) =>
          <div className=" bg-[#F0F8FF] lg:w-full rounded-[32px] py-6  flex flex-col lg:items-start items-center lg:ite gap-4 lg:ps-8 lg:pe-[58px] w-[100%] lg:mb-8 mb-5" key={index}>
          <div className=" flex justify-between lg:items-start lg:flex-row flex-col items-center w-[100%]">
            <div className="lg:font-normal lg:text-xl text-[#3798A6] leading-[22px] text-base lg:text-left text-center w-[64%] lg:m-[inherit] m-auto lg:mb-0 mb-4">
              <h5 className="leading-7">{a.title}</h5>
      
              

            </div>
            <div className="flex font-normal leading-[18px] lg:text-base text-xs lg:mr-13 gap-1 items-center">
              <h6>{dateConvert(cutAtFirstSpace(a.date))}</h6>

            </div>



          </div>
          <p className="lg:text-lg text-sm font-[350px] lg:leading-[27px] leading-[21px] text-[#1C1D2080] lg:w-[85%] w-[70%] lg:text-left text-center">
          {a.description}
          </p>


        </div> 
        )
          
          }
          
      </div>
    );
  
   
  }
  
  
  
  export default Publication;
  

  
