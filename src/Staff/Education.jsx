import Head from './Layout/Head';
    
function Education({data}) {


    return (
      <div className="lg:py-8 py-5"> 
          <Head heading={data.title} />
          <div className="lg:mt-4 flex flex-col gap-2">
            {
              data.list.map(
                (a,index) =>
              <div className="flex gap-2 items-start" key={index}>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none lg:w-[18px] w-[14px] lg:h-[21px] h-4">
<path d="M9 10.4286C11.8406 10.4286 14.1429 8.12636 14.1429 5.28573C14.1429 2.44511 11.8406 0.142876 9 0.142876C6.15938 0.142876 3.85714 2.44511 3.85714 5.28573C3.85714 8.12636 6.15938 10.4286 9 10.4286ZM12.8491 11.7384L10.9286 19.4286L9.64286 13.9643L10.9286 11.7143H7.07143L8.35714 13.9643L7.07143 19.4286L5.15089 11.7384C2.28616 11.875 0 14.2174 0 17.1143V18.7857C0 19.8505 0.863839 20.7143 1.92857 20.7143H16.0714C17.1362 20.7143 18 19.8505 18 18.7857V17.1143C18 14.2174 15.7138 11.875 12.8491 11.7384Z" fill="#3798A6"/>
</svg>

                <p className="lg:text-lg text-sm lg:leading-[27px] leading-[21px] font-[350px] text-[#1C1D20CC]">{a}</p>
            </div>
                 )
            }
            
          

          </div>

          
      </div>
    );
  
   
  }
  
  
  
  export default Education;
  

