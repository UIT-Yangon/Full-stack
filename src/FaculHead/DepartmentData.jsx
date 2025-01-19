import { Link } from "react-router-dom";

function DepartmentData(){
    

  const data2 = [
    { 
      index: 1,
      name: "Department of English",
      link: "#"
    },
    {
      index: 2,
      name: "Department of Myanmar",
      link: "#"
    },
    {
      index: 3,
      name: "Department of Physics",
      link: "#"
    },
    {
      index: 4,
      name: "Department of Information Technology Support and Maintenance",
      link: "#"
    },
    {
      index: 5,
      name: "Department of Student Affair",
      link: "#"
    },
    {
      index: 6,
      name: "Department of Staff Affairs",
      link: "#"
    },
    {
      index: 7,
      name: "Department of Operation Division",
      link: "#"
    },
    {
      index: 8,
      name: "Department of International Relations",
      link: "#"
    },
    {
      index: 9,
      name: "Department of Finance",
      link: "#"
    },
  ];
  

    return(
        <div className="flex flex-col justify-center items-start gap-y-3 w-full mt-[-2rem]">
            {
              data2.map(data => (
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

export default DepartmentData;