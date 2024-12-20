import Head from './Layout/Head';
    
function Publication({data}) {


    return (
      <div className="my-8"> 
          <Head heading={data.title} />
          <div className=" bg-[#F0F8FF] lg:w-full rounded-[32px] py-6  flex flex-col lg:items-start items-center lg:ite gap-4 lg:ps-8 lg:pe-[58px] w-[100%]">
            <div className=" flex justify-between lg:items-start lg:flex-row flex-col items-center w-[100%]">
              <div className="lg:font-normal lg:text-xl text-[#3798A6] leading-[22px] text-base lg:text-left text-center w-[64%] lg:m-[inherit] m-auto lg:mb-0 mb-4">
                <h5 className="leading-7">{data.bander}</h5>
        
                

              </div>
              <div className="flex font-normal leading-[18px] lg:text-base text-xs lg:mr-13 gap-1 items-center">
                <h6>{data.date}</h6>

              </div>



            </div>
            <p className="lg:text-lg text-sm font-[350px] lg:leading-[27px] leading-[21px] text-[#1C1D2080] lg:w-[85%] w-[70%] lg:text-left text-center">
            {data.body}
            </p>


          </div>
      </div>
    );
  
   
  }
  
  
  
  export default Publication;
  

  
