import { Link } from "react-router-dom";

function FacultyData(){
    const data1  = [
        {
          index: 1,
          name: "Faculty of Computer Science (FCS)",
          link: "computer-science"
        },
        {
          index: 2,
          name: "Faculty of Computer Systems and Technologies (FCST)",
          link: "computer-systems-and-technologies"
        },
        {
          index: 3,
          name: "Faculty of Information Science (FIS)",
          link: "information-science"
        },
        {
          index: 4,
          name: "Faculty of Computing (FC)",
          link: "computing"
        },
      
       ]

       const data2  = [
        {
          name: "Department of English",
          link: "departments/english"
        },
        {
          name: "Department of Myanmar",
          link: "departments/myanmar"
        },
        {
          name: "Department of Physics",
          link: "departments/physics"
        },
        {
          name: "Department of Information Technology Support and Maintenance",
          link: ""
        },
        {
          name: "Department of Student Affair",
          link: ""
        },
        {
          name: "Department of Staff Affairs",
          link: ""
        },
        {
          name: "Department of Operation Division",
          link: ""
        },
        {
          name: "Department of International Relations",
          link: ""
        },
        {
          name: "Department of Finance",
          link: ""
        },
      
       ]

    return(
        <div className="flex flex-col justify-center items-start gap-y-3 w-full mt-[-2rem]">
            {
              data1.map(data => (
                <Link to={`/faculties/${data.link}`} key={data.index} className="w-full">
                  <div className="lg:p-[24px] p-[16px] rounded-[24px] flex justify-between items-center w-full hover:bg-[#f0f8ff]">
                      <h5 className="text-[20px] text-[#1c1d20] hover:translate-x-10 transition-transform duration-200">{data.name}</h5>
                      <div className="w-[8px] h-[8px] bg-[#1c1d20] opacity-[20%] rounded-full"></div>
                  </div>
                </Link>
              ))
            }
        </div>
    )
}

export default FacultyData;