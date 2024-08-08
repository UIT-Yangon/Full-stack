import Table from '../../Components/Table';
import TableMobile from '../../Components/TableMobile';
function Tables() {

      const TableData = [
        {   
            id: 1,
            Title: 'FC Courses',
            dataHeader : [
                {
                  name: "No.",
                  style: "w-[10%]"
                },
                {
                  name: "Subject Code",
                  style: "w-[20%]"
                },
                {
                    name: "Suggested Course Title",
                    style: "w-[30%]"
                  },
                  {
                    name: "Module",
                    style: "w-[20%]"
                  },
                
              ]
        ,
        
            data : [
                ["1","Dip-01201","Calculus","Basic/Fundamentals"],
                ["2","Dip-01202","Discrete","Basic/Fundamentals"],
                ["3","Dip-01203","Algebra & Probability","Basic/Fundamentals"],
                ["4","Dip-01204","Numerical Analysis","Basic/Fundamentals"],
                ["5","Dip-01205","Graph & Linear Programming","Advanced"],
                ["6","Dip-01206","Inventory Control, Queuing Theory &  Game Theory","Advanced"],
                
              ]
        },
        {   
            id: 2,
            Title: 'FCS Courses',
            dataHeader : [
                {
                  name: "No.",
                  style: "w-[10%]"
                },
                {
                  name: "Subject Code",
                  style: "w-[20%]"
                },
                {
                    name: "Suggested Course Title",
                    style: "w-[30%]"
                  },
                  {
                    name: "Module",
                    style: "w-[20%]"
                  },
                
              ]
        ,
        
            data : [
                ["1","Dip-01101","Computer Applications Technology – Word, Excel, Desktop Presentation: Power Point","Basic/Fundamentals"],
                ["2","Dip-01102","Data Structure Fundamentals","Basic/Fundamentals"],
                ["3","Dip-01103","Operating System and Configuration","Basic/Fundamentals"],
                ["4","Dip-01104","Desktop Application Development (C++, Java)","Basic/Fundamentals-Project"],
                ["5","Dip-01105","Human Interface Design & Technology (Multimedia Interface)","Advanced"],
                ["6","Dip-01106","Data Structure &  Algorithms","Advanced"],
                ["7","Dip-01107","Programming Languages & Type of Language Processors","Advanced"],
                ["8","Dip-01108","Artificial Intelligent / AI Technologies","Advanced"],
                
              ]
        },
        {   
            id: 3,
            Title: 'FIS Courses',
            dataHeader : [
                {
                  name: "No.",
                  style: "w-[10%]"
                },
                {
                  name: "Subject Code",
                  style: "w-[20%]"
                },
                {
                    name: "Suggested Course Title",
                    style: "w-[30%]"
                  },
                  {
                    name: "Module",
                    style: "w-[20%]"
                  },
                
              ]
        ,
        
            data : [
                ["1","Dip-01301","Database Technology","Basic/Fundamentals"],
                ["2","Dip-01302","Coporate Accounting, Ethics and Legal Affair"],
                ["3","Dip-01303","Busniess and System Strategy"],
                ["4","Dip-01304","Coporate Activities & Project Management","Basic/Fundamentals-Project"],
                ["5","Dip-01305","Business Process Management & eBusniess","Advanced"],
                ["6","Dip-01306","Software Development Methodologies	","Advanced"],
                ["7","Dip-01307","Service Management and System Audit	","Advanced"],
                ["8","Dip-01308","Web Application Development (HTML5, CSS, JavaScript, PHP)	","Advanced-Project"],
                
              ]
        },
        {   
            id: 4,
            Title: 'FCST Courses',
            dataHeader : [
                {
                  name: "No.",
                  style: "w-[10%]"
                },
                {
                  name: "Subject Code",
                  style: "w-[20%]"
                },
                {
                    name: "Suggested Course Title",
                    style: "w-[30%]"
                  },
                  {
                    name: "Module",
                    style: "w-[20%]"
                  },
                
              ]
        ,
        
            data : [
                ["1","Dip-01401","Introduction to Computer System","Basic/Fundamentals"],
                ["2","Dip-01402","Computer Networking","Basic/Fundamentals"],
                ["3","Dip-01403","Security","Basic/Fundamentals"],
                ["4","Dip-01404","Advanced Computer Networking","Advanced"],
                ["5","Dip-01405","Computer Network Security	","Advanced"],
               
                
              ]
        },
        
      ]
    

    return (
      
     <>
        
        <div className="p-[10%]">
                
                
                {TableData.map(item => (
                    <div className='mb-[50px]' key={item.id}>
                        <h3 className='text-[#1e717d] text-[32px]'>{item.Title}</h3>
                        {(window.innerWidth >= 1024 ) ? <Table dataHeader={item.dataHeader} data={item.data} /> : <TableMobile dataHeader={item.dataHeader} data={item.data} />}

                </div>
                ))}
            </div>
    </>
    

    );
  }
  
  export default Tables;
