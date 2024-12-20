import Head from './Layout/Head';
    
function Course({data}) {


    return (
      <div className="lg:my-8 my-5"> 
          <Head heading={data.title} />
          <div className="lg:mt-4 flex flex-wrap lg:gap-2 gap-1">
            {
              data.list.map(
                (a,index) =>
                  <h6 className="lg:px-5 px-4 lg:py-3 py-2 bg-[#F8F8F8] font-normal leading-[18px] lg:text-base text-xs rounded-[32px]" key={index}>{a}</h6>

              )
            }
            


            

          </div>

          
      </div>
    );
  
   
  }
  
  
  
  export default Course;
  

